import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useSearchParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const ManagePassword = () => {
    const [input, setInput] = useState({ password: "", confirmPassword: "" })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    const token = searchParams.get("reset_password_token");

    // console.log(userId, token);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (userId && token) {
            if (input.password.length < 4) {
                return toast.error("Password must be at least 4 characters long");
            }
            if (Object.values(input).some((val) => val.trim() === "")) {
                return toast.error("Please fill all the fields");
            }
            if (input.password !== input.confirmPassword) {
                return toast.error("Passwords do not match");
            }

            setLoading(true);

            try {
                const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/resetPassword/password`, {
                    id: userId,
                    reset_password_token: token,
                    password: input.password
                })

                if (res.status === 200) {
                    toast.success("Password reset successful! You can now sign in with your new password.")
                    setInput({ password: "", confirmPassword: "" })
                    navigate("/signin")
                } else {
                    toast.error("Failed to reset password. Please try again.")
                }
            } catch (error) {
                console.log(error);
                toast.error("An error occurred while resetting the password. Please try again.")
            } finally {
                setLoading(false);
            }
        } else if (userId) {
            setLoading(true)
            try {
                const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/user/update/password/${userId}`, { old_password: input.password, new_password: input.confirmPassword }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
                if (res.status === 200) {
                    toast.success("Password updated successfully!")
                    setInput({ password: "", confirmPassword: "" })
                    navigate("/signin")
                } else {
                    toast.error("Failed to update password. Please try again.")
                }
            } catch (error) {
                console.log(error);
                toast.error("An error occurred while updating the password. Please try again.")
            } finally {
                setLoading(false);
            }
        }

    }

    return (
        <section className="login-bg">
            <div className="form-bg relative">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-primary font-serif uppercase font-bold text-4xl md:text-xl mb-8">{token ? "Reset" : "Update"} Password</h2>
                    <div>
                        <label htmlFor="password" className="block mb-3">{token ? "New Password" : "Current Password"}</label>
                        <input value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} type="password" name="password" id="password" placeholder="*****" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-3">{token ? "Confirm Password" : "New Password"}</label>
                        <input value={input.confirmPassword} onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })} type="password" name="confirmPassword" id="confirmPassword" placeholder="*****" />
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
                </form>
            </div>
        </section>
    )
}

export default ManagePassword 