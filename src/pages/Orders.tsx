import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import axios from "axios";
import type { IOrder } from "../types/order.type";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaTruck, FaCheckCircle, FaClock, FaTimesCircle, FaShippingFast } from "react-icons/fa";
import { useProducts } from "../context/ProductProvider";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Orders = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState(true);

    const { user } = JSON.parse(localStorage.getItem("cake_bakery_user") || "{}");
    const { products } = useProducts();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/order/get/${user._id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setOrders(res.data.orders);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    return (
        <section>
            <Header />
            <div className="shop-bg relative overflow-hidden">
                <div className="text-white flex justify-center h-[70%] items-center flex-col relative z-10">
                    <h2 className="text-6xl md:text-8xl mb-5 font-bold">Orders</h2>
                    <p className="text-lg">Your Orders</p>
                </div>
                <div className="absolute ele-shape scale-y-[-1]" aria-hidden="true" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 5.8" preserveAspectRatio="none">
                        <path className="" fill="white" d="M5.4.4l5.4 5.3L16.5.4l5.4 5.3L27.5.4 33 5.7 38.6.4l5.5 5.4h.1L49.9.4l5.4 5.3L60.9.4l5.5 5.3L72 .4l5.5 5.3L83.1.4l5.4 5.3L94.1.4l5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3L161 .4l5.4 5.3L172 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3L261 .4l5.4 5.3L272 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3L361 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3L461 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1L550 .4l5.4 5.3L561 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L650 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L750 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2L850 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4V0H-.2v5.8z"></path>
                    </svg>
                </div>
            </div>
            <div className="product-bg py-24">
                {loading ? (
                    <div className="text-center py-20">
                        <ClipLoader color="#c19b77" size={50} />
                    </div>
                ) : (
                    <div className="container mx-auto px-4">
                        {orders.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="max-w-md mx-auto">
                                    <div className="text-6xl mb-4">🛒</div>
                                    <h2 className="text-3xl font-bold mb-4 text-gray-800">No orders found</h2>
                                    <p className="text-lg text-gray-600 mb-6">You haven't placed any orders yet. Start shopping to see your orders here!</p>
                                    <Link to="/shop" className="add-to-cart-btn">
                                        <span className="relative z-10">Browse Products</span>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {orders.map((order) => {
                                        const getStatusIcon = (status: string) => {
                                            switch (status) {
                                                case 'DELIVERED':
                                                    return <FaCheckCircle className="text-green-500" />;
                                                case 'SHIPPED':
                                                    return <FaShippingFast className="text-blue-500" />;
                                                case 'PROCESSING':
                                                    return <FaClock className="text-yellow-500" />;
                                                case 'CANCELLED':
                                                    return <FaTimesCircle className="text-red-500" />;
                                                default:
                                                    return <FaClock className="text-gray-500" />;
                                            }
                                        };

                                        const getStatusColor = (status: string) => {
                                            switch (status) {
                                                case 'DELIVERED':
                                                    return 'bg-green-100 text-green-800 border-green-200';
                                                case 'SHIPPED':
                                                    return 'bg-blue-100 text-blue-800 border-blue-200';
                                                case 'PROCESSING':
                                                    return 'bg-yellow-100 text-yellow-800 border-yellow-200';
                                                case 'CANCELLED':
                                                    return 'bg-red-100 text-red-800 border-red-200';
                                                default:
                                                    return 'bg-gray-100 text-gray-800 border-gray-200';
                                            }
                                        };

                                        return (
                                            <div key={order._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                                {/* Order Header */}
                                                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 border-b border-gray-100">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-lg font-bold text-gray-800 truncate">Order #{order._id}</h3>
                                                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.orderStatus)}`}>
                                                            {getStatusIcon(order.orderStatus)}
                                                            {order.orderStatus}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <FaCalendarAlt className="mr-2 text-gray-400" />
                                                        {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Order Details */}
                                                <div className="p-4 space-y-4">
                                                    {/* Total Amount */}
                                                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                                        <div className="flex items-center text-gray-700">
                                                            <span className="font-semibold">Total Amount</span>
                                                        </div>
                                                        <span className="text-xl font-bold text-green-600">${order.totalAmount.toFixed(2)}</span>
                                                    </div>

                                                    {/* Order Items */}
                                                    <div>
                                                        <h4 className="font-semibold mb-3 text-gray-800 flex items-center">
                                                            <FaTruck className="mr-2 text-gray-400" />
                                                            Order Items ({order.orderItems.length})
                                                        </h4>
                                                        <div className="space-y-2 max-h-32 overflow-y-auto">
                                                            {order.orderItems.map((item, index) => (
                                                                <div key={item._id || index} className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
                                                                    <span className="text-gray-700"> {products.find(p => p._id === item.productId)?.name || 'Product Name'} </span>
                                                                    <div className="text-right">
                                                                        <div className="font-semibold">${item.price.toFixed(2)}</div>
                                                                        <div className="text-gray-500">Qty: {item.quantity}</div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Shipping Info */}
                                                    <div>
                                                        <h4 className="font-semibold mb-3 text-gray-800 flex items-center">
                                                            <FaMapMarkerAlt className="mr-2 text-gray-400" />
                                                            Shipping Address
                                                        </h4>
                                                        <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                                                            <p className="mb-1">{order.shippingInfo.address}</p>
                                                            <p className="mb-1">{order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.postalCode}</p>
                                                            <div className="flex items-center">
                                                                <FaPhone className="mr-2 text-gray-400" />
                                                                {order.shippingInfo.phoneNo}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div>
                <Footer />
            </div>
        </section >
    )
}

export default Orders