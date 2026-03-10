import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import toast from "react-hot-toast"
import axios from "axios"
import { ClipLoader } from "react-spinners"

const SignIn = () => {
    const [input, setInput] = useState({ email: "", password: "" })
    const [forgotModal, setForgotModal] = useState(false)
    const [forgotEmail, setForgotEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (Object.values(input).some((val) => val.trim() === "")) {
            return toast.error("Please fill all the fields", { position: "top-right" });
        }
        setLoading(true)
        const success = await signIn(input.email, input.password)
        setLoading(false)
        if (success) {
            navigate("/shop")
        }
        setInput({ email: "", password: "" })
    }
    const handleForgotSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!forgotEmail.trim()) {
            return toast.error("Please enter your email address.")
        }
        try {
            setLoading(true);
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/recover/password`, { email: forgotEmail })
            setLoading(false);
            toast.success("Password reset link sent to your email!")
            setForgotModal(false)
            setForgotEmail("")
        } catch (error) {
            setLoading(false);
            toast.error("Failed to send reset link. Please try again.")
        }
    }
    return (
        <section className="login-bg">
            <div className="form-bg relative">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-primary font-serif uppercase font-bold text-4xl md:text-6xl mb-8">sign in</h2>
                    <div>
                        <label htmlFor="email" className="block mb-3">Email</label>
                        <input value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} type="email" name="email" id="email" placeholder="example@mail.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-3">Password</label>
                        <input value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} type="password" name="password" id="password" placeholder="*****" />
                    </div>
                    <div>
                        {loading ? (
                            <div className="mt-2">
                                <ClipLoader color="#c19b77" size={35} className="mx-auto" />
                            </div>
                        ) : (
                            <button className="cart-btn">
                                <span className="relative z-10">submit</span>
                            </button>)}
                    </div>
                    <div className="mt-5 text-gray-400">
                        <span className="text-sm">Don't have an account? <Link className="text-blue-500" to={"/signup"}>Sign up</Link></span>
                        {/* forgot password */}
                        <div className="text-sm">
                            <span>Forgot Password </span>
                            <button type="button" className="text-blue-500" onClick={() => setForgotModal(true)}>
                                Click here
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* Forgot Password Modal */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300 ${forgotModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white p-6 rounded-lg w-full max-w-md mx-4 transform transition-all duration-300 ${forgotModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
                    <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Reset Password</h3>
                    <p className="text-gray-600 mb-6 text-center">Enter your email address and we'll send you a link to reset your password.</p>
                    <form onSubmit={handleForgotSubmit}>
                        <div className="mb-4">
                            <label htmlFor="forgotEmail" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                id="forgotEmail"
                                value={forgotEmail}
                                onChange={(e) => setForgotEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:shadow-none focus:border-primary"
                                required
                            />
                        </div>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => { setForgotModal(false); setLoading(false) }}
                                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            {loading ? (
                                <div className="flex-1 flex justify-center mt-2">
                                    <ClipLoader color="#c19b77" size={20} />
                                </div>
                            ) : (
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                                >
                                    Send Reset Link
                                </button>)}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn