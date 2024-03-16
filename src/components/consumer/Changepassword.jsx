import React, { useState } from 'react';
import axios from 'axios';

const ChangePasswordForm = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            await axios.put('/api/user/change-password', { password });
            alert('Password changed successfully');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Error changing password:', error);
            alert('Failed to change password');
        }
    };

    return (
        <div className="my-8">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-sm">
                <label htmlFor="password" className="mb-2">New Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4" />
                <label htmlFor="confirmPassword" className="mb-2">Confirm New Password</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border border-gray-300 px-3 py-2 mb-4" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Change Password</button>
            </form>
        </div>
    );
}

export default ChangePasswordForm;
