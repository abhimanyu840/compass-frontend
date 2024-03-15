import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-2 pt:mt-0 font-poppins">
                <Link href="" className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
                    <span className="self-center text-3xl font-madimi-one text-black font-bold whitespace-nowrap">Login</span>
                </Link>
                <div className="bg-white shadow-md rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                    <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                        <form className="mt-8 space-y-6" action="#">
                            <div>
                                <label for="email" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" required />
                                </div>
                                <div className="text-sm ml-3">
                                    <label for="remember" className="font-medium text-gray-900">Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-blue-500 hover:underline ml-auto">Lost Password?</a>
                            </div>
                            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base cursor-pointer px-5 py-3 w-full sm:w-auto text-center font-ubuntu">Login to your account</button>
                            <div className="text-sm font-medium text-gray-600">
                                Not registered? <Link href="" className="text-blue-500 hover:underline">Create account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
