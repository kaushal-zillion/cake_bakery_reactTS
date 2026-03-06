import type { Product } from "./product.type";

export interface ProductContextType {
    products: Product[];
    loading: boolean;
}

export interface CartContextType {
    cart: Product[];
    loading: boolean;
    addToCart: (product: Product) => void;
}

export interface AuthContextType {
    loading: boolean;
    signIn: (email: string, password: string) => Promise<boolean>;
    signUp: (name: string, email: string, password: string) => Promise<boolean>;
    signOut: () => void;
}   