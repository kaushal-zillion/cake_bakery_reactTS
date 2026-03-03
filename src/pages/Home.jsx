import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <Header />
            <main>
                {/* hero section */}
                <section className="relative hero-bg">
                    <div className="container mx-auto h-full px-4">
                        <div className="w-6/12 h-full flex items-center">
                            <div className="relative z-10 text-white">
                                <h1 className="text-3xl md:text-8xl font-extrabold font-serif">Delicious cakes made with love</h1>
                                <p className="my-8 text-xl">Custom designs, fresh ingredients, and fast delivery — perfect for birthdays, weddings, and celebrations.</p>
                                <div className="mt-6 flex justify-center md:justify-start gap-3">
                                    <Link to="/shop" className="cart-btn"><span className="relative z-10">Shop Cakes</span></Link>
                                    <Link to="/cart" className="view-cart-btn">View Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about */}
                <section className="about-bg">
                    <div className="container mx-auto">
                        <div>
                            <div className="w-6/12 px-4">
                                <div>
                                    <div className="overflow-hidden">
                                        <img src="https://www.nicdarkthemes.com/bakery/wp-content/uploads/2025/06/ndimg-parallax-04-1024x683.jpg" alt="women carrying trolley of breads" className="object-cover h-[700px]" />
                                    </div>
                                    <div className="mt-10 flex flex-wrap">
                                        <div className="w-6/12 pe-2">
                                            <div>
                                                <img src="https://www.nicdarkthemes.com/bakery/wp-content/uploads/2025/07/ndimg-icononsitebg-01.png" alt="cake logo" width={80} />
                                            </div>
                                            <h6 className="font-serif font-semibold my-6 text-xl">Premium Experience</h6>
                                            <p>Reliable customer support designed to provide fast and effective solutions.</p>
                                        </div>
                                        <div className="w-6/12 ps-2">
                                            <div>
                                                <img src="https://www.nicdarkthemes.com/bakery/wp-content/uploads/2025/07/ndimg-icononsitebg-01.png" alt="cake logo" width={80} />
                                            </div>
                                            <h6 className="font-serif font-semibold my-6 text-xl">Premium Experience</h6>
                                            <p>Reliable customer support designed to provide fast and effective solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home