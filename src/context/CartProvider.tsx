import { createContext, useContext, useEffect, useState } from "react";
import type { CartContextType } from "../types/context.type";
import type { Product } from "../types/product.type";

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);
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
        setCart((prevCart) => [...prevCart, product]);
    }
    
    return (
        <CartContext.Provider value={{ cart, loading, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider