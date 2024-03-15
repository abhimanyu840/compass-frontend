import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='backdrop-blur-md z-10 w-full sticky top-0 bg-white'>


            <header className="text-gray-600 body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 px-2 flex-col md:flex-row items-center ">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl font-madimi-one"><Link to={'/'} className='no-underline font-black text-black'>The Investment Compass</Link></span>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-around font-poppins font-light">
                        <Link to={'/'} className="mr-5 hover:text-gray-900 no-underline font-black text-black">Home</Link>
                        <Link to={'/about'} className="mr-5 hover:text-gray-900 no-underline font-black text-black">About</Link>
                        <Link to={'/contact'} className="mr-5 hover:text-gray-900 no-underline font-black text-black">Contact</Link>

                        <div className="px-1 mx-auto my-0.5 ">
                            <Link to={'/login'} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-800 rounded text-sm ">Login</button></Link>
                        </div>
                        <div className="px-1 mx-auto my-0.5 ">
                            <Link to={'/signup'} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-800 rounded text-sm ">SignUp</button></Link>
                        </div>
                        {/* <div className="px-1 mx-auto my-0.5 ">
                            <button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-indigo-800 rounded text-sm ">Logout</button>
                        </div> */}
                        {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Navbar
