import { FaCcMastercard, FaCcVisa, FaFacebookF, FaInstagram, FaRegCreditCard, FaTwitter } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
    return (
        <footer className="footer-bg ">
            <div className="container mx-auto py-10 md:py-36">
                <div className="relative z-10 text-white flex space-y-3 flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                        <div>
                            <h2 className="text-4xl md:text-6xl">Discover the world of cakes</h2>
                        </div>
                    </div>
                    <div className="w-full md:w-3/12 px-4">
                        <div>
                            <h6 className="text-2xl md:text-3xl">Address:</h6>
                            <p className="text-lg md:text-2xl md:my-8">1080 Brickell Ave Miami - Florida U.S. of America</p>
                            <ul className="flex gap-5 pt-3 md:pt-0 text-lg md:text-2xl">
                                <li><a><FaFacebookF /></a></li>
                                <li><a><FaTwitter /></a></li>
                                <li><a><FaInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-3/12 px-4">
                        <div>
                            <h6 className="text-2xl md:text-3xl">Contact:</h6>
                            <p className="md:my-8 text-lg md:text-2xl">info@cakes.com</p>
                            <p className="text-lg md:text-2xl">+1 234 567 890</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="glass-morphism hidden sm:block">
                <div className="container mx-auto px-4 py-6 text-white">
                    <div className="flex justify-between items-center flex-wrap">
                        <ul className="flex flex-wrap gap-5 text-lg items-center ">
                            <li>Partnerships</li>
                            <li><GoDotFill /></li>
                            <li>Customer Support</li>
                            <li><GoDotFill /></li>
                            <li>Privacy Policy</li>
                        </ul>
                        <ul className="flex gap-5 flex-wrap text-2xl items-center">
                            <li><FaCcVisa /></li>
                            <li><FaCcMastercard /></li>
                            <li><FaRegCreditCard /></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer