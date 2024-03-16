import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiContext from '../context/apiContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const UpdateProduct = () => {
    const token = localStorage.getItem('accessToken');
    const context = useContext(apiContext);
    const { singleProduct, getSingleProduct, getUpdateProduct, clearPreviousData } = context
    const { id } = useParams(); // Get the id from the URL params
    const navigate = useNavigate(); // Access history object to redirect after update

    const [product, setProduct] = useState(null); // Initialize product state as null


    useEffect(() => {
        // Fetch the existing product details and set the state
        const fetchProduct = async () => {
            try {
                let res = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/products/${id}`)
                setProduct(res.data); // Update product state with fetched data
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await getUpdateProduct(product, token, id);
            toast.success('Updated Successfully');
            // Redirect to product details page after successful update
            navigate(`/admin/dashboard/allproducts`);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Render loading state if product is still loading
    if (!product) {
        return <div>Loading...</div>;
    }

    // Render form once product is fetched
    return (
        <div className="container mx-auto px-4 py-8 font-poppins">
            <h2 className="text-3xl font-semibold mb-4 font-madimi-one underline text-green-700 text-center">Update Product/Event</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" value={product.name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" id="description" value={product.description} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                    <select name="type" id="type" value={product.type} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        <option value="course">Course</option>
                        <option value="event">Event</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="text" name="price" id="price" value={product.price} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                {product.type === "course" ? (
                    <div className="mb-4">
                        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (in days)</label>
                        <input type="text" name="duration" id="duration" value={product.duration} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                            <input type="date" name="startDate" id="startDate" value={product.startDate} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                            <input type="date" name="endDate" id="endDate" value={product.endDate} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
                )}
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input type="text" name="imageUrl" id="imageUrl" value={product.imageUrl} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Update
                </button>
            </form>
        </div>
    );
}

export default UpdateProduct;
