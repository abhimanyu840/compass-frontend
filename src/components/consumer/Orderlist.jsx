import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = ({ userId }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const fetchOrders = async () => {
            try {
                let res = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/orders/${userId}`)
                setOrders(res.data)
            } catch (error) {
                console.log('Error fetching user data', error)
            }
        }
        fetchOrders();
    }, [userId]);


    return (
        <div className="my-8">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <div>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <table className="w-full rounded-lg border-gray-100 border-solid shadow-lg px-5 py-2">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Order ID</th>
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                <th className="border border-gray-300 px-4 py-2">Total</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td className="border border-gray-300 px-4 py-2">{order.productId}</td>
                                    <td className="border border-gray-300 px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                                    <td className="border border-gray-300 px-4 py-2">Rs. {order.totalPrice}</td>
                                    <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default OrderList;
