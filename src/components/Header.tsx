import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useEffect, useState } from "react"
import { HashLink } from 'react-router-hash-link';
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../context/CartProvider";
import { RiUserSettingsFill } from "react-icons/ri";
import { TbLockPassword, TbLogout } from "react-icons/tb";

const Header = () => {
    const { signOut } = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart();

    const { user } = JSON.parse(localStorage.getItem("cake_bakery_user") || "{}");

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="header-bg sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo" className="w-40 lg:w-60" />
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-2 md:gap-6">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink></li>
                            <li><HashLink smooth to="/#about">About</HashLink></li>
                            <li><NavLink to="/shop" className={({ isActive }) => isActive ? "text-primary" : ""}>Shop</NavLink></li>
                            {isLoggedIn && <li><NavLink to="/my-orders" className={({ isActive }) => isActive ? "text-primary" : ""}>Orders</NavLink></li>}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">

                        {isLoggedIn ? (
                            <>
                                <div className="hidden md:flex">
                                    <Link to="/cart" className="cart-btn relative">
                                        <span className="relative z-10 capitalize" >
                                            <TiShoppingCart className="text-xl mt-2" />
                                        </span>
                                        <span className="absolute top-[2px] right-[32px] z-10 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cart.length}</span>
                                    </Link>
                                </div>
                                <div className="relative hidden md:block user-menu">
                                    <div className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer">
                                        <RiUserSettingsFill className="text-xl text-gray-800" />
                                    </div>
                                    <div className="user-menu-content w-64 rounded-xl border border-gray-100 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                                        {/* 1. Profile Header Section */}
                                        <div className="bg-gray-50/50 p-5 border-b border-gray-100">
                                            <h6 className="text-sm font-bold text-gray-900 truncate uppercase tracking-tight">
                                                {user?.name || "Guest User"}
                                            </h6>
                                            <p className="text-xs text-gray-500 truncate mt-0.5">
                                                {user?.email}
                                            </p>
                                        </div>
                                        <div className="p-2">
                                            <Link
                                                to={{
                                                    pathname: "/account/update-password",
                                                    search: `?id=${user?._id}`
                                                }}
                                                className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                                            >
                                                <TbLockPassword className="text-xl text-gray-400 group-hover:text-blue-500" />
                                                <span className="font-medium">Update Password</span>
                                            </Link>
                                            <hr className="my-2 border-gray-100" />
                                            <Link to="/signin"
                                                onClick={() => { signOut() }}
                                                className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-red-500 rounded-lg hover:bg-red-50 transition-colors group"
                                            >
                                                <TbLogout className="text-xl text-red-400 group-hover:text-red-600" />
                                                <span className="font-medium">Logout</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Link to="/signin" className="login-btn hidden md:block">
                                Login
                            </Link>
                        )}



                        {/* toggle button for mobile view */}
                        <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center w-8 h-8">
                            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
                        <nav>
                            <ul className="flex flex-col gap-4 px-4">
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ""} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                                <li><HashLink smooth to="/#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</HashLink></li>
                                <li><NavLink to="/shop" className={({ isActive }) => isActive ? "text-primary" : ""} onClick={() => setIsMenuOpen(false)}>Shop</NavLink></li>
                                {isLoggedIn && <li><NavLink to="/my-orders" className={({ isActive }) => isActive ? "text-primary" : ""} onClick={() => setIsMenuOpen(false)}>Orders</NavLink></li>}
                                {isLoggedIn ? (
                                    <>
                                        <li><Link to="/cart" className="cart-btn inline-block" onClick={() => setIsMenuOpen(false)}>
                                            <span className="relative z-10 capitalize">cart</span>
                                        </Link></li>
                                        <li><Link to="/signin" className="logout-btn inline-block" onClick={() => { signOut(); setIsMenuOpen(false); }}>Logout</Link></li>
                                    </>
                                ) : (
                                    <li><Link to="/signin" className="login-btn inline-block" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                                )}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header