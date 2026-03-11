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
                        <div className="w-full md:w-6/12 h-full flex items-center">
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
                <section className="about-bg" id="about">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap ">
                            <div className="w-full md:w-6/12 px-4 h-full">
                                <div>
                                    <div className="overflow-hidden">
                                        <img src="https://www.nicdarkthemes.com/bakery/wp-content/uploads/2025/06/ndimg-parallax-04-1024x683.jpg" alt="women carrying trolley of breads" className="object-cover h-auto md:h-[700px]" />
                                    </div>
                                    <div className="mt-10 flex flex-wrap">
                                        <div className="w-full sm:w-6/12 pe-2">
                                            <div>
                                                <img src="https://www.nicdarkthemes.com/bakery/wp-content/uploads/2025/07/ndimg-icononsitebg-01.png" alt="cake logo" width={80} />
                                            </div>
                                            <h6 className="font-serif font-semibold my-6 text-xl">Premium Experience</h6>
                                            <p>Reliable customer support designed to provide fast and effective solutions.</p>
                                        </div>
                                        <div className="w-full sm:w-6/12 ps-2">
                                            <div>
                                                <img src="https://www.nicdarkthemes.com/bakery/wp-content/uploads/2025/07/ndimg-icononsitebg-01.png" alt="cake logo" width={80} />
                                            </div>
                                            <h6 className="font-serif font-semibold my-6 text-xl">Premium Experience</h6>
                                            <p>Reliable customer support designed to provide fast and effective solutions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 px-4 h-full">
                                <div className="h-full">
                                    <h6 className="text-primary uppercase font-semibold">smart and simple</h6>
                                    <div className="flex h-full items-center mt-6">
                                        <div className="w-full lg:w-9/12 pe-4 h-full">
                                            <h2 className="text-4xl md:text-6xl font-serif font-semibold">Start building your future today</h2>
                                            <p className="text-gray-500 my-8">We believe in creating meaningful experiences through personalized service and attention to detail. Whether you’re seeking guidance or practical support, our staff is here to help you.</p>
                                            <button className="px-6 py-3 bg-primary text-white text-sm">SEE MORE</button>
                                        </div>
                                        <div className="w-3/12 lg:block hidden ps-4 h-full">
                                            <img width="100%" src="https://www.nicdarkthemes.com/bakery/wp-content/uploads/2025/06/ndimg-vertical-02.jpg" alt="cake" />
                                        </div>
                                    </div>
                                    <div className="mt-8 h-full">
                                        <img src="https://www.nicdarkthemes.com/bakery/wp-content/uploads/2025/06/ndimg-parallax-05-1024x683.jpg" alt="cake" className="h-full w-full" />
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