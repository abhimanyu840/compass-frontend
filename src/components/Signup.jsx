import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import apiContext from './context/apiContext';
// import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const context = useContext(apiContext)
    const { signup, getSignup } = context
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        userId: '',
        email: '',
        mobileNo: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.userId || !formData.email || !formData.mobileNo || !formData.password || !formData.confirmPassword) {
            toast.error('Please input all fields');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Password and confirm password do not match');
            return;
        }

        try {
            getSignup(formData)
            // Handle success response
            toast.success('Signup successful!');
            toast.info('Now Login!');
            navigate('/login')
            console.log('Signup successful!');
        } catch (error) {
            // Handle error response
            console.error('Signup failed:', error);
            toast.error('Signup failed. Please try again.');
        }
    };

    return (
        <>
            <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6  mt-44 font-poppins">
                <span className="self-center text-3xl text-green-700 underline font-bold font-madimi-one whitespace-nowrap">Sign Up</span>

                <div className="bg-white shadow-lg rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                    <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Your Name Here" required />
                            </div>
                            <div>
                                <label htmlFor="userid" className="text-sm font-medium text-gray-900 block mb-2">User Id</label>
                                <input type="text" name="userId" id="userid" value={formData.userId} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Write a user Id" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="mobileno" className="text-sm font-medium text-gray-900 block mb-2">Mobile No.</label>
                                <input type="number" name="mobileNo" id="mobileno" value={formData.mobileNo} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Your Mobile Number" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="text-sm font-medium text-gray-900 block mb-2">Confirm password</label>
                                <input type="password" name="confirmPassword" id="confirm-password" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-blue-600 block w-full p-2.5" required />
                            </div>

                            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center font-ubuntu cursor-pointer">Create account</button>
                            <div className="text-sm font-medium text-gray-500">
                                Already have an account? <Link to={'/login'} className="text-blue-500 hover:underline">Login here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
