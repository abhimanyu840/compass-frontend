import React, { useContext, useEffect, useState } from 'react';
import apiContext from '../context/apiContext.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductListPage = () => {
    const [loading, setLoading] = useState(true);
    const context = useContext(apiContext);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                await context.getFetchAllProduct();
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 font-poppins">
            <h2 className="text-2xl font-bold mb-4">All Products</h2>
            {loading ? (
                <p className="text-gray-600">Loading products...</p>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {context.fetchAllProduct.map(product => (
                        <div key={product._id} className="border shadow-lg border-gray-600 rounded p-4">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={product.imageUrl} alt="blog" />
                            <p className="text-gray-600">Type: {product.type}</p>
                            <h3 className="text-lg font-semibold mb-2">Name: {product.name}</h3>
                            <p className="text-gray-600">Description: {product.description}</p>
                            <p className="text-gray-600">Price: ₹{product.price}</p>
                            <div className="flex justify-around">
                                <div className="px-0.5 mx-auto my-1">
                                    <Link to={`/admin/dashboard/updateproducts/${product._id}`} className='no-underline'><button className="cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Edit</button></Link>
                                </div>
                                <div className="px-0.5 mx-auto my-1">
                                    <button onClick={async () => {
                                        await context.deleteProduct(product._id)
                                        toast.success("Deleted")
                                    }} className="cursor-pointer font-ubuntu flex mx-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductListPage;
