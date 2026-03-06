import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useEffect, useState } from "react"
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { signOut } = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <img src="/images/logo.png" alt="logo" className="w-40 md:w-60" />
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex gap-2 md:gap-6">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink></li>
                            <li><HashLink smooth to="/#about" className="hover:text-primary transition-colors">About</HashLink></li>
                            <li><NavLink to="/shop" className={({ isActive }) => isActive ? "text-primary" : ""}>Shop</NavLink></li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        {isLoggedIn ? (
                            <div className="hidden md:flex">
                                <Link to="/cart" className="cart-btn">
                                    <span className="relative z-10 capitalize" >
                                        cart
                                    </span>
                                </Link>
                                <Link to="/signin" className="logout-btn ms-4" onClick={() => {
                                    signOut()
                                }}>
                                    Logout
                                </Link>
                            </div>
                        ) : (
                            <Link to="/signin" className="login-btn hidden md:block">
                                Login
                            </Link>
                        )}
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