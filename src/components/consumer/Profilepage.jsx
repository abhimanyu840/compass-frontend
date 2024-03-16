import React, { useEffect, useState } from 'react';
import UpdateProfileForm from './Updateprofileform';
import ChangePasswordForm from './Changepassword';
import OrderList from './Orderlist';
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch user information and orders from the backend
        const fetchUserData = async () => {
            try {
                const userResponse = await axios.get('/api/user/profile');
                setUser(userResponse.data);

                const ordersResponse = await axios.get('/api/user/orders');
                setOrders(ordersResponse.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
            {user && (
                <>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">User Information</h2>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        {/* Additional user information */}
                    </div>
                    <UpdateProfileForm user={user} />
                    <ChangePasswordForm />
                    <OrderList orders={orders} />
                </>
            )}
        </div>
    );
}

export default ProfilePage;
