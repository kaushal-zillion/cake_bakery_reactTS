import Cart from '../pages/Cart';
export interface ImageData {
    imageType: string;
    imageName: string;
    imageSize: number;
}

export interface Photo {
    imageData: ImageData;
    public_id: string;
    secure_url: string;
    _id: string;
}

export interface Category {
    _id: string;
    name: string;
    products: string[];
    user: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    sold: number;
    category: Category;
    user: string;
    photos: Photo[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface ApiResponse {
    success: boolean;
    products: Product[];
}

export interface CartItem {
    _id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    sold: number;
    category: Category;
    user: string;
    photos: Photo[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    quantity: number;
}