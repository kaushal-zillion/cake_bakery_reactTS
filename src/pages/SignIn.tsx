import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import toast from "react-hot-toast"

const SignIn = () => {
    const [input, setInput] = useState({ email: "", password: "" })
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (Object.values(input).some((val) => val.trim() === "")) {
            return toast.error("Please fill all the fields", { position: "top-right" });
        }
        const success = await signIn(input.email, input.password)
        if (success) {
            navigate("/shop")
        }
        setInput({ email: "", password: "" })
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
                        <button className="cart-btn">
                            <span className="relative z-10">
                                submit
                            </span>
                        </button>
                    </div>
                    <div className="mt-5 text-gray-400">
                        <span>Don't have an account? <Link className="text-blue-500" to={"/signup"}>Sign up</Link></span>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignIn