export interface IPaymentInfo {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
}

export interface IShippingInfo {
    address: string;
    city: string;
    phoneNo: string;
    postalCode: string;
    state: string;
}

export interface IOrderItem {
    productId: string;
    price: number;
    quantity: number;
    _id?: string; 
}

export interface IOrder {
    _id: string;
    user: string; 
    orderItems: IOrderItem[];
    shippingInfo: IShippingInfo;
    paymentInfo: IPaymentInfo;
    taxAmount: number;
    shippingAmount: number;
    totalAmount: number;
    orderStatus: "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    createdAt: string; 
    updatedAt: string;
    __v: number;
}