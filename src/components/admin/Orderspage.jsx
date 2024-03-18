import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/orders`);
                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders:', error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 font-roboto">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            {loading ? (
                <p className="text-gray-600">Loading orders...</p>
            ) : (
                <div>
                    {orders.length === 0 ? (
                        <p className="text-gray-600">No orders available.</p>
                    ) : (<table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Product Id</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                {/* Add more table headers as needed */}
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td className="px-6 py-4 whitespace-no-wrap">{order.userId}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{order.productId}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{order.status}</td>
                                    {/* Add more table cells for other order details */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default OrdersPage;
