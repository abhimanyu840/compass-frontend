import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import apiContext from './context/apiContext';

const Login = () => {
    const backendHost = `${process.env.REACT_APP_BACKEND_HOST}`;
    const context = useContext(apiContext);
    const { getLogin, login } = context;
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post(`${backendHost}/compass/api/v1/auth/signin`, loginData);
            const accessToken = res.data?.accessToken; // Add a check for login
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
                toast.success('Logged In successfully');
                navigate("/");
                // location.reload()
            } else {
                toast.error('Login failed. Please try again.'); // Handle login failure
            }
        } catch (error) {
            console.error('Error Logging In', error);
            toast.error('Error Logging In');
        }
    };

    return (
        <>
            <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-2 pt:mt-0 font-poppins">
                <Link href="" className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
                    <span className="self-center text-3xl font-madimi-one text-black font-bold whitespace-nowrap">Login</span>
                </Link>
                <div className="bg-white shadow-md rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                    <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                                <input type="email" value={loginData.email} onChange={handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                                <input type="password" value={loginData.password} onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                            </div>
                            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base cursor-pointer px-5 py-3 w-full sm:w-auto text-center font-ubuntu">Login</button>
                            <div className="text-sm font-medium text-gray-600">
                                Not registered? <Link to={'/signup'} className="text-blue-500 hover:underline">Create account</Link>
                            </div>
                            <div className="text-sm font-medium text-gray-600">
                                <Link to={'/forgot-password'} className="text-blue-500 hover:underline">Forgot Password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
