import apiContext from './apiContext';
import React, { useState } from 'react';
import axios from 'axios';

const ApiState = (props) => {
    const backendHost = `${process.env.REACT_APP_BACKEND_HOST}`;

    const [login, setLogin] = useState();
    const [signup, setSignup] = useState();
    const [fetchAllProduct, setFetchAllProduct] = useState([])
    const [addProduct, setAddProduct] = useState()
    const [updateProduct, setUpdateProduct] = useState()
    const [singleProduct, setSingleProduct] = useState(null)

    const clearPreviousData = () => {
        setSingleProduct(null)
    }

    const getLogin = async (loginData) => {
        try {
            const res = await axios.post(`${backendHost}/compass/api/v1/auth/signin`, loginData);
            setLogin(res.data);
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed. Please try again.');
        }
    };

    const getSignup = async (formData) => {
        try {
            const res = await axios.post(`${backendHost}/compass/api/v1/auth/signup`, formData);
            setSignup(res.data);
        } catch (error) {
            console.error('Signup failed:', error);
            throw new Error('Signup failed. Please try again.');
        }
    };

    const getFetchAllProduct = async () => {
        try {
            const response = await axios.get(`${backendHost}/compass/api/v1/products`);
            setFetchAllProduct(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const getAddProduct = async (formData, token) => {

        // Check if the user is logged in
        if (!token) {
            throw new Error('Not Allowed');
        }

        const config = {
            headers: {
                'x-access-token': token
            }
        }

        try {
            const res = await axios.post(`${backendHost}/compass/api/v1/admin/products/add`, formData, config)
            setAddProduct(res.data)
        } catch (error) {
            console.error('Adding Product failed:', error);
            throw new Error('Oops! Adding Product failed');

        }
    }

    const getUpdateProduct = async (formData, token, id) => {
        // Check if the user is logged in
        if (!token) {
            throw new Error('Not Allowed');
        }

        const config = {
            headers: {
                'x-access-token': token
            }
        }

        try {
            const res = await axios.put(`${backendHost}/compass/api/v1/admin/products/update/${id}`, formData, config)
            setUpdateProduct(res.data)
        } catch (error) {
            console.error('Updating Product failed:', error);
            throw new Error('Oops! Updating Product failed');

        }

    }

    const getSingleProduct = async (id) => {
        try {
            const res = await axios.get(`${backendHost}/compass/api/v1/products/${id}`);
            setSingleProduct(res.data);
        } catch (error) {
            console.error('Fetching Product failed:', error);
            throw new Error('Oops! Fetching Product failed');
        }
    }

    const deleteProduct = async (id, token) => {
        if (!token) {
            throw new Error('Not Allowed');
        }

        const config = {
            headers: {
                'x-access-token': token
            }
        }
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/admin/products/delete/${id}`, config)

        } catch (error) {
            console.error('Deleting Product failed:', error);
            throw new Error('Oops! Deleting Product failed');

        }
    }

    return (
        <apiContext.Provider value={{ login, signup, fetchAllProduct, addProduct, singleProduct, getLogin, getSignup, getFetchAllProduct, getAddProduct, getUpdateProduct, getSingleProduct, deleteProduct, clearPreviousData }}>
            {props.children}
        </apiContext.Provider>
    );
};

export default ApiState;
