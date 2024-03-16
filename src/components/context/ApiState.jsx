import apiContext from './apiContext';
import React, { useState } from 'react';
import axios from 'axios';

const ApiState = (props) => {
    const backendHost = `${process.env.REACT_APP_BACKEND_HOST}`;

    const [login, setLogin] = useState();
    const [signup, setSignup] = useState();

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

    return (
        <apiContext.Provider value={{ login, signup, getLogin, getSignup }}>
            {props.children}
        </apiContext.Provider>
    );
};

export default ApiState;
