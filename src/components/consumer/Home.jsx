import React, { useContext, useEffect } from 'react'
import Card from './Courseeventcard'
import { Link } from 'react-router-dom'
import apiContext from '../context/apiContext'

const Home = ({ admin }) => {
    return (
        <>
            <div className='container font-poppins mx-4 '>
                <section className='text-center my-4 mx-2'>

                    <div className="mx-auto">
                        <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/mv0lPzzqwRuz2ZE5/new-project-12-1-Yle54ojpjnt6QxDV.png' />
                    </div>

                    <div className="font-normal text-xl">
                        <span className="font-bold my-4">
                            Empowering Indians for Financial Freedom<br />
                        </span>
                        we're dedicated to empowering Indians with the knowledge and skills for financial freedom through stock market education on Trading and Investment
                    </div>
                    <div className="px-2 mx-auto my-2 ">
                        <button className=" cursor-pointer font-ubuntu flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg"><Link to={'/allproducts'} className='no-underline text-white'>Explore Products</Link></button>
                    </div>
                    <div className="px-2 mx-auto my-2 ">
                        {admin && <button className=" cursor-pointer font-ubuntu flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg"><Link to={'/admin/dashboard'} className='no-underline text-white'>Admin Dashboard</Link></button>}
                    </div>
                </section>

            </div>


        </>
    )
}

export default Home
