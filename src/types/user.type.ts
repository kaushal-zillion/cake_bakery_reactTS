export interface UserResponse {
    success: boolean;
    user: {
        _id: string;
        name: string;
        email: string;
        isVerified: boolean;
        role: string;
        loginCount: number;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    sign_in: string;
}
