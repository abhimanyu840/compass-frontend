import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken')); // Check if user is logged in
    const [showDropdown, setShowDropdown] = useState(false); // State to toggle the visibility of the dropdown menu
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        localStorage.removeItem('accessToken'); // Remove access token from local storage
        setIsLoggedIn(false); // Update authentication state
        setShowDropdown(false); // Close the dropdown menu after logout
        navigate('/'); // Redirect to home page after logout
    };



    return (
        <div className='backdrop-blur-md z-10 w-full sticky top-0 bg-white'>
            <header className="text-gray-600 body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 px-2 flex-col md:flex-row items-center justify-between">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl font-madimi-one"><Link to={'/'} className='no-underline font-black text-black'>The Investment Compass</Link></span>
                        <button onClick={toggleMenu} className="md:hidden mx-2 text-2xl text-gray-700 focus:outline-none">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <nav className={`md:hidden items-center text-base justify-around font-poppins font-light ${isOpen ? 'flex flex-col' : 'hidden'}`}>
                        <Link to={'/'} className="block my-2 hover:text-gray-900 no-underline font-black text-black">Home</Link>
                        {/* <Link to={'/about'} className="block my-2 hover:text-gray-900 no-underline font-black text-black">About</Link>
                        <Link to={'/contact'} className="block my-2 hover:text-gray-900 no-underline font-black text-black">Contact</Link> */}
                        {isLoggedIn ? (
                            <div className="relative mx-2">
                                <FaUserCircle onClick={() => setShowDropdown(!showDropdown)} className="text-2xl text-gray-700 cursor-pointer hover:text-gray-900 mx-2" />
                                {showDropdown && (
                                    <div className="absolute right-0  mt-2 bg-white border border-gray-200 rounded-md shadow-lg cursor-pointer">
                                        <button onClick={logout} className="block w-full py-2 px-6 mx-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"><MdLogout />Logout</button>
                                        <Link to="/profile" className="block w-full py-2 px-6 mx-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Profile</Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="px-1 mx-auto my-1.5 ">
                                    <Link to={'/login'} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-800 rounded text-sm ">Login</button></Link>
                                </div>
                                <div className="px-1 mx-auto my-1.5 ">
                                    <Link to={'/signup'} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-800 rounded text-sm ">SignUp</button></Link>
                                </div>
                            </>
                        )}
                    </nav>
                    {/* Desktop menu */}
                    <nav className="md:flex hidden items-center text-base justify-around font-poppins font-light">
                        <Link to={'/'} className="mr-5 hover:text-gray-900 no-underline font-black text-black">Home</Link>
                        {/* <Link to={'/about'} className="mr-5 hover:text-gray-900 no-underline font-black text-black">About</Link>
                        <Link to={'/contact'} className="mr-5 hover:text-gray-900 no-underline font-black text-black">Contact</Link> */}
                        {isLoggedIn ? (
                            <div className="relative">
                                <FaUserCircle onClick={() => setShowDropdown(!showDropdown)} className="text-xl text-gray-700 cursor-pointer hover:text-gray-900 mx-2" />
                                {showDropdown && (
                                    <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg cursor-pointer">
                                        <button onClick={logout} className=" w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center"><MdLogout className='ml-1 text-blue-800' />Logout</button>
                                        <Link to="/profile" className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Profile</Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="px-1 mx-auto my-0.5 ">
                                    <Link to={'/login'} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-800 rounded text-sm ">Login</button></Link>
                                </div>
                                <div className="px-1 mx-auto my-0.5 ">
                                    <Link to={'/signup'} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-800 rounded text-sm ">SignUp</button></Link>
                                </div>
                            </>
                        )}
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
