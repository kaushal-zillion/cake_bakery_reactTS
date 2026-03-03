import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="header-bg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo" width={240} />
                    </Link>
                    <nav>
                        <ul className="flex gap-6">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-primary" : ""}>About</NavLink></li>
                            <li><NavLink to="/shop" className={({ isActive }) => isActive ? "text-primary" : ""}>Shop</NavLink></li>
                        </ul>
                    </nav>
                    <Link to="/cart" className="cart-btn">
                        <span className="relative z-10 capitalize" >
                            cart
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header