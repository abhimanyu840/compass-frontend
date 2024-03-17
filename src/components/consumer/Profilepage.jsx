import React, { useContext, useEffect, useState } from 'react';
import UpdateProfileForm from './Updateprofileform';
import ChangePasswordForm from './Changepassword';
import OrderList from './Orderlist';
import axios from 'axios';
import apiContext from '../context/apiContext';

const ProfilePage = () => {
    const context = useContext(apiContext)
    const { user, getUser } = context
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                await getUser(localStorage.accessToken)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };


        fetchUserData();
    }, []);

    return (
        <div className='flex items-center justify-center'>
            <div className="container mx-auto py-8 font-poppins flex items-center justify-center flex-col">
                <h1 className="text-3xl font-semibold mb-4  underline font-ubuntu ">User Profile</h1>
                {user && (
                    <>
                        <div className='rounded-lg border-gray-100 border-solid shadow-lg px-5 py-2'>
                            <h2 className="text-xl font-semibold mb-4">User Information</h2>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone No.: {user.mobileNo}</p>
                            <p>User Id: {user.userId}</p>
                            {/* Additional user information */}
                        </div>
                        <UpdateProfileForm user={user} />
                        <ChangePasswordForm userId={user.userId} />
                        <OrderList userId={user.userId} />
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
