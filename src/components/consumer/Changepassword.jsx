import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

const ChangePasswordForm = ({ userId }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/auth/updateUser`, { userId, oldPassword, password });
            toast.success('Password changed successfully');
            setOldPassword('')
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Error changing password:', error);
            toast.error('Failed to change password');
        }
    };

    return (
        <div className="my-8 rounded-lg border-gray-100 border-solid shadow-lg px-5 py-2 font-roboto">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-sm">
                <label htmlFor="password" className="mb-2">Old Password</label>
                <input type="password" id="oldpassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4 rounded-md" />
                <label htmlFor="password" className="mb-2">New Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4 rounded-md" />
                <label htmlFor="confirmPassword" className="mb-2">Confirm New Password</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4 rounded-md" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Change Password</button>
            </form>
        </div>
    );
}

export default ChangePasswordForm;
