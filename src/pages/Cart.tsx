import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useCart } from "../context/CartProvider";
import { useState } from "react";
import type { ShippingDetails } from "../types/context.type";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Cart = () => {

    const { cart, loading, increaseQuantity, decreaseQuantity, removeFromCart, handleCheckout } = useCart();
    const [modalOpen, setModalOpen] = useState(false);
    const [shipping, setShipping] = useState<ShippingDetails>({
        address: '',
        city: '',
        phoneNo: '',
        postalCode: '',
        state: ''
    });

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();

        if (Object.values(shipping).some(value => value.trim() === '')) {
            toast.error("All the fields required..!");
            return;
        }

        handleCheckout(shipping);
        setModalOpen(false);
    };

    return (
        <section>
            <Header />
            <div className="shop-bg relative overflow-hidden">
                <div className="text-white flex justify-center h-[70%] items-center flex-col relative z-10">
                    <h2 className="text-6xl md:text-8xl mb-5 font-bold">Cart</h2>
                    <p className="text-lg">Your Shopping Cart</p>
                </div>
                <div className="absolute ele-shape scale-y-[-1]" aria-hidden="true" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 5.8" preserveAspectRatio="none">
                        <path className="" fill="white" d="M5.4.4l5.4 5.3L16.5.4l5.4 5.3L27.5.4 33 5.7 38.6.4l5.5 5.4h.1L49.9.4l5.4 5.3L60.9.4l5.5 5.3L72 .4l5.5 5.3L83.1.4l5.4 5.3L94.1.4l5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3L161 .4l5.4 5.3L172 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3L261 .4l5.4 5.3L272 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3L361 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3L461 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1L550 .4l5.4 5.3L561 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L650 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L750 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2L850 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4V0H-.2v5.8z"></path>
                    </svg>
                </div>
            </div>
            <div className="product-bg py-24">
                <div className="container mx-auto">
                    {cart.length === 0 ? (
                        <div className="text-center py-20">
                            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
                            <p className="text-lg">Browse our products and add some delicious treats to your cart!</p>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-6 xl:gap-0">
                            {/* cart items */}
                            <div className="xl:w-8/12 w-full px-4">
                                <div className=" border border-gray-200 p-6 overflow-x-auto">
                                    <table className="w-full min-w-[600px] md:min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-center"></th>
                                                <th className="text-center">Name</th>
                                                <th className="text-center">Price</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-center">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(item => (
                                                <tr key={item._id} className="border-t">
                                                    <td className="flex items-center gap-5 py-6">
                                                        <button className="p-5 border" onClick={() => removeFromCart(item._id)}><FaTrash /></button>
                                                        <img src={item.photos[0].secure_url} alt={item.name} width={100} className="h-24" />
                                                    </td>
                                                    <td className="text-center py-6">{item.name}</td>
                                                    <td className="text-center py-6">${item.price}</td>
                                                    <td className="text-center py-6">
                                                        <button className="p-2 border" onClick={() => decreaseQuantity(item._id)}><FaMinus /></button>
                                                        <span className="mx-2">{item.quantity}</span>
                                                        <button className="p-2 border" onClick={() => increaseQuantity(item._id)}><FaPlus /></button>
                                                    </td>
                                                    <td className="text-center py-6">${item.price * item.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Order Summary */}
                            <div className="xl:w-4/12 w-full px-4">
                                <div className="border border-gray-200 p-6 sticky top-28">
                                    <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                                    <div className="flex justify-between mb-4">
                                        <p>Subtotal</p>
                                        <p>${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between mb-4">
                                        <p>Shipping</p>
                                        <p>$5</p>
                                    </div>
                                    <div className="flex justify-between mb-4">
                                        <p className="font-bold text-2xl">Total</p>
                                        <p className="font-bold text-2xl">${(cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 5).toFixed(2)}</p>
                                    </div>
                                    {loading ? (<div className="flex justify-center"><ClipLoader color="#c19b77" size={50} /></div>) : (
                                        <button className="add-to-cart-btn w-full" onClick={() => setModalOpen(true)}>
                                            <span className="relative z-10">Proceed to Checkout</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <Footer />
            </div>
            {/* Shipping Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4 animate-fadeIn">
                        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
                        <form onSubmit={handlePayment}>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium mb-1">Address*</label>
                                <input type="text" id="address" name="address" value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} className="w-full p-2 border border-gray-300 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-sm font-medium mb-1">City*</label>
                                <input type="text" id="city" name="city" value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} className="w-full p-2 border border-gray-300 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNo" className="block text-sm font-medium mb-1">Phone Number*</label>
                                <input type="number" id="phoneNo" name="phoneNo" value={shipping.phoneNo} onChange={(e) => setShipping({ ...shipping, phoneNo: e.target.value })} className="w-full p-2 border border-gray-300 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="postalCode" className="block text-sm font-medium mb-1">Postal Code*</label>
                                <input type="number" id="postalCode" name="postalCode" value={shipping.postalCode} onChange={(e) => setShipping({ ...shipping, postalCode: e.target.value })} className="w-full p-2 border border-gray-300 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="state" className="block text-sm font-medium mb-1">State*</label>
                                <input type="text" id="state" name="state" value={shipping.state} onChange={(e) => setShipping({ ...shipping, state: e.target.value })} className="w-full p-2 border border-gray-300 rounded" required />
                            </div>
                            <div className="flex justify-end gap-4">
                                <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Proceed to Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Cart