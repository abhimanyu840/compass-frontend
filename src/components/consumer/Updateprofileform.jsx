import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateProfileForm = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [mobileNo, setMobileNo] = useState(user.mobileNo);
    const userId = user.userId

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/auth/updateUser`, { userId, name, email, mobileNo });
            toast.success('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update profile');
        }
    };

    return (
        <div className="my-8 font-poppins rounded-lg border-gray-100 border-solid shadow-lg px-5 py-2">
            <h2 className="text-xl font-semibold mb-4">Update Profile Information</h2>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-sm">
                <label htmlFor="name" className="mb-2">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4 rounded-md" />
                <label htmlFor="email" className="mb-2">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4 rounded-md" />
                <label htmlFor="mobileNo" className="mb-2">Mobile Number</label>
                <input type="tel" id="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4 rounded-md" />
                <button type="submit" className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-800 font-ubuntu">Update Profile</button>
            </form>
        </div>
    );
}

export default UpdateProfileForm;
