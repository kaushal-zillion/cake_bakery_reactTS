import type { CartItem, Product } from "./product.type";

export interface ShippingDetails {
    address: string;
    city: string;
    phoneNo: string;
    postalCode: string;
    state: string;
}

export interface ProductContextType {
    products: Product[];
    loading: boolean;
}

export interface CartContextType {
    cart: CartItem[];
    loading: boolean;
    addToCart: (product: Product) => void;
    alreadyInCart: (productId: string) => boolean;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    removeFromCart: (productId: string) => void;
    handleCheckout: (shipping: ShippingDetails) => void;
}

export interface AuthContextType {
    signIn: (email: string, password: string) => Promise<boolean>;
    signUp: (name: string, email: string, password: string) => Promise<boolean>;
    signOut: () => void;
}   