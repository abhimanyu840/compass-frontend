// Dashboard.js
import React, { useRef } from 'react';
import SalesPage from './Salespage';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const salesRef = useRef();
    // Logic to fetch sales statistics and order details from backend

    const handleClick = () => {

    }

    return (
        <>
            <h2 className='font-madimi-one text-center text-4xl underline text-green-800'>Dashboard</h2>

            <div className="flex">


                {/* Display sales statistics */}
                <div className="px-2 mx-auto my-0.5 ">
                    <Link to={`/admin/dashboard/sales`} className='no-underline'><button onClick={handleClick} className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg">Display Sales</button></Link>

                </div>
                {/* Display order details */}
                <div className="px-2 mx-auto my-0.5 ">
                    <Link to={`/admin/dashboard/orders`} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg">Display Orders</button></Link>
                </div>

                <div className="px-2 mx-auto my-0.5 ">
                    <Link to={`/admin/dashboard/allproducts`} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg">Show All Products</button></Link>
                </div>
                <div className="px-2 mx-auto my-0.5 ">
                    <Link to={`/admin/dashboard/addproducts`} className='no-underline'><button className=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg">Add Product</button></Link>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
