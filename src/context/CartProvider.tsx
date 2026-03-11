import { createContext, useContext, useEffect, useState } from "react";
import type { CartContextType, ShippingDetails } from "../types/context.type";
import type { CartItem, Product } from "../types/product.type";
import toast from "react-hot-toast";
import { loadRazorPayScript } from "../utils/loadRazorPay";
import axios from "axios";

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const cart = localStorage.getItem('bakery_cart');
        if (cart) {
            setCart(JSON.parse(cart));
        }
        setLoading(false);
    }, [])
    useEffect(() => {
        localStorage.setItem('bakery_cart', JSON.stringify(cart));
    }, [cart])

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }] as CartItem[]);
        setLoading(false);
        toast.success(`${product.name} added to cart!`, {
        });
    }

    const alreadyInCart = (productId: string) => {
        return cart.some(item => item?._id === productId);
    }

    const increaseQuantity = (productId: string) => {
        setCart((prevCart) => prevCart.map(item => {
            if (item._id === productId) {
                if (item.quantity >= item.stock) {
                    toast.error("Maximum quantity reached!");
                    return { ...item, quantity: item.stock };
                }
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    }

    const decreaseQuantity = (productId: string) => {
        setCart((prevCart) => prevCart.map(item => {
            if (item._id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    }

    const removeFromCart = (productId: string) => {
        setCart((prevCart) => prevCart.filter(item => item._id !== productId));
    }

    const handleCheckout = async (shipping: ShippingDetails) => {
        setLoading(true);
        const { user } = JSON.parse(localStorage.getItem("cake_bakery_user") || "{}");
        const token = localStorage.getItem("token");
        const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 5;
        try {

            const res = await loadRazorPayScript("https://checkout.razorpay.com/v1/checkout.js");

            if (!res) {
                setLoading(false);
                toast.error("Failed to load Razorpay script. Please try again.");
                return;
            }

            const paymentRes = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/order/create/payment/${user._id}`,
                {
                    shippingInfo: shipping,
                    orderItems: cart.map(item => ({ productId: item._id, quantity: item.quantity, price: item.price })),
                    totalAmount: totalAmount,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            console.log(paymentRes.data);

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY,
                amount: totalAmount * 100,
                currency: "INR",
                name: "Cake Bakery",
                description: "Order Payment",
                order_id: paymentRes.data.payment.id,
                handler: async function (response: any) {

                    try {
                        const orderData = {
                            shippingInfo: shipping,
                            orderItems: cart.map(item => ({ productId: item._id, quantity: item.quantity, price: item.price })),
                            totalAmount: totalAmount,
                            paymentInfo: {
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                            }
                        }

                        // console.log(response);

                        const orderRes = await axios.post(
                            `${import.meta.env.VITE_API_BASE_URL}/order/create/${user._id}`,
                            orderData,
                            { headers: { Authorization: `Bearer ${token}` } }
                        );

                        if (orderRes.status === 200) {
                            toast.success("Order placed successfully!");
                            setCart([]);
                        } else {
                            toast.error("Payment succeeded but failed to create order. Please contact support.");
                        }

                    } catch (error) {
                        console.log(error);
                        toast.error("Payment succeeded but failed to create order. Please contact support.");
                    } finally {
                        setLoading(false);
                    }

                },
                modal: {
                    ondismiss: function () {
                        setLoading(false);
                    }
                },
                prefill: {
                    name: user?.name || "",
                    email: user?.email || "",
                },
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <CartContext.Provider value={{ cart, loading, addToCart, alreadyInCart, increaseQuantity, decreaseQuantity, removeFromCart, handleCheckout }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider