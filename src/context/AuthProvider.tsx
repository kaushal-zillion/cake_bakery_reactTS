import { createContext, useContext, useState } from "react"
import type { AuthContextType } from "../types/context.type"
import axios from "axios"
import type { UserResponse } from "../types/user.type"
import toast from "react-hot-toast"

const AuthContext = createContext<AuthContextType | null>(null)


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider")
    }
    return context
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true)

    const signIn = async (email: string, password: string): Promise<boolean> => {
        try {
            const res = await axios.post<UserResponse>(`${import.meta.env.VITE_API_BASE_URL}/signin`, { email, password })

            if (res.data.success) {
                localStorage.setItem("token", res.data.sign_in)
                localStorage.setItem("cake_bakery_user", JSON.stringify({ user: res.data.user }))
                toast.success("Signed in successfully", {});
                setLoading(false);
                return true;
            } else {
                setLoading(false);
                return false;
            }
        } catch (error) {
            console.log(error);
            toast.error("Sign in failed", {
              style: { background: '#dc2626', color: 'white' },
            });
            setLoading(false);
            return false;
        }
    }

    const signUp = async (name: string, email: string, password: string) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/signup`, { name, email, password })
            if (res.data.success) {
                const signInSuccess = await signIn(email, password);
                setLoading(false);
                return signInSuccess;
            } else {
                setLoading(false);
                return false;
            }
        } catch (error) {
            console.log(error);
            toast.error("Sign up failed", {
              style: { background: '#dc2626', color: 'white' },
            });
            setLoading(false);
            return false;
        }
    }

    const signOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("cake_bakery_user");
    }

    return (
        <AuthContext.Provider value={{ loading, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider