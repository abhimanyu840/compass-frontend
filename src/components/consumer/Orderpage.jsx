// OrderPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 font-poppins">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
            {orders.length > 0 ? (
                <div>
                    {orders.map(order => (
                        <div key={order._id} className="mb-4 border rounded p-4">
                            <h3 className="text-lg font-semibold mb-2">Order ID: {order._id}</h3>
                            <p>Total Price: ₹{order.totalPrice}</p>
                            <p>Status: {order.status}</p>
                            <p>Products:</p>
                            <ul>
                                {order.products.map(product => (
                                    <li key={product.productId}>
                                        {product.name} - Quantity: {product.quantity} - Price: ₹{product.price}
                                    </li>
                                ))}
                            </ul>
                            <p>Order Date: {new Date(order.createdAt).toLocaleString()}</p>
                            {/* Additional order details */}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">No orders found.</p>
            )}
        </div>
    );
};

export default OrderPage;
