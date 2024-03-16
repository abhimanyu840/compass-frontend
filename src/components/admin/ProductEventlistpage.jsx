import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
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
                    {/* {products.map(product => (
                        <div key={product._id} className="border border-gray-200 rounded p-4"> */}
                    <div className="border border-gray-200 rounded p-4">
                        <h3 className="text-lg font-semibold mb-2">product.name</h3>
                        <p className="text-gray-600">product.description</p>
                        <p className="text-gray-600">product.price</p>
                        <div className="flex justify-around">
                            <div className="px-0.5 mx-auto my-1 ">
                                <button class=" cursor-pointer font-ubuntu flex mx-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Edit</button>
                            </div>
                            <div className="px-0.5 mx-auto my-1 ">
                                <button class=" cursor-pointer font-ubuntu flex mx-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">Delete</button>
                            </div>
                        </div>

                    </div>
                    {/* ))} */}
                </div>
            )}
        </div>
    );
};

export default ProductListPage;
