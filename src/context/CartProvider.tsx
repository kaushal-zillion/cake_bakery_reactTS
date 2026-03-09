import { createContext, useContext, useEffect, useState } from "react";
import type { CartContextType } from "../types/context.type";
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
    const [loading, setLoading] = useState(true);

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
                    toast.error("Maximum quantity reached!", {
                        style: { background: '#dc2626', color: 'white' },
                    });
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

    const handleCheckout = async () => {
        const { user } = JSON.parse(localStorage.getItem("cake_bakery_user") || "{}");
        const token = localStorage.getItem("token");
        const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 5;
        try {

            const res = await loadRazorPayScript("https://checkout.razorpay.com/v1/checkout.js");

            if (!res) {
                toast.error("Failed to load Razorpay script. Please try again.", {
                    style: { background: '#dc2626', color: 'white' },
                });
                return;
            }

            const paymentRes = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/order/create/payment/${user._id}`,
                { totalAmount },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY,
                amount: totalAmount * 100,
                currency: "INR",
                name: "Cake Bakery",
                description: "Order Payment",
                order_id: paymentRes.data.id,
                handler: function (response: any) {
                    console.log(response);
                    setCart([]);
                    toast.success("Checkout successful!", {
                    });
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
        }
    }

    return (
        <CartContext.Provider value={{ cart, loading, addToCart, alreadyInCart, increaseQuantity, decreaseQuantity, removeFromCart, handleCheckout }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider