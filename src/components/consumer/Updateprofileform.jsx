import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfileForm = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [mobileNo, setMobileNo] = useState(user.mobileNo);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/user/${user.id}`, { name, email, mobileNo });
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };

    return (
        <div className="my-8">
            <h2 className="text-xl font-semibold mb-4">Update Profile Information</h2>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-sm">
                <label htmlFor="name" className="mb-2">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4" />
                <label htmlFor="email" className="mb-2">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4" />
                <label htmlFor="mobileNo" className="mb-2">Mobile Number</label>
                <input type="tel" id="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Profile</button>
            </form>
        </div>
    );
}

export default UpdateProfileForm;
