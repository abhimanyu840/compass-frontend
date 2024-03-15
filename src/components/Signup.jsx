import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <div class="mx-auto md:h-screen flex flex-col justify-center items-center px-6 scroll-pt-1.5 pt:mt-0 font-poppins">
                <a href="" class="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
                    <span class="self-center text-2xl text-black underline font-bold font-madimi-one whitespace-nowrap">Sign Up</span>
                </a>

                <div class="bg-white shadow-lg rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                    <div class="p-6 sm:p-8 lg:p-16 space-y-8">
                        <form class="mt-8 space-y-6" action="#">
                            <div>
                                <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label for="confirm-password" class="text-sm font-medium text-gray-900 block mb-2">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-blue-600 block w-full p-2.5" required />
                            </div>

                            <button type="submit" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center font-ubuntu cursor-pointer">Create account</button>
                            <div class="text-sm font-medium text-gray-500">
                                Already have an account? <Link to="" class="text-blue-500 hover:underline">Login here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
