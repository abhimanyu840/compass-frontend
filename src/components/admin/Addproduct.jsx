import React, { useState } from 'react';
import axios from 'axios';

const AddProductPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        type: 'course', // Default to 'course'
        price: '',
        duration: '',
        startDate: '',
        endDate: '',
        imageUrl: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/products/add', formData);
            console.log('Product added successfully');
            // Optionally redirect or show a success message
        } catch (error) {
            console.error('Error adding product:', error);
            // Optionally show an error message
        }
    };

    return (
        <div className="flex items-center justify-center h-full font-poppins m-4">
            <div className="bg-white shadow-lg rounded-lg px-8 py-6 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-center font-madimi-one underline">Add New Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                        <select id="type" name="type" value={formData.type} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            <option value="course">Course</option>
                            <option value="event">Event</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    {formData.type === 'course' && (
                        <div>
                            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (in days)</label>
                            <input type="number" id="duration" name="duration" value={formData.duration} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    )}
                    {formData.type === 'event' && (
                        <>
                            <div>
                                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                                <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                                <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </>
                    )}
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <button type="submit" className="bg-violet-500 text-white py-2 px-4 cursor-pointer font-ubuntu rounded hover:bg-violet-600">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;
