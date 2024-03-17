import React, { useContext, useEffect } from 'react';
import Card from './Courseeventcard';
import apiContext from '../context/apiContext';

const Products = () => {
    const context = useContext(apiContext);
    const { fetchAllProduct, getFetchAllProduct } = context;

    useEffect(() => {
        (async () => {
            try {
                await getFetchAllProduct();
            } catch (error) {
                console.error('Oops some error occurred', error);
            }
        })();
    }, []);

    return (
        <div className='font-poppins'>
            <h1 className='text-3xl underline text-blue-800 text-center font-madimi-one'>
                All Products and Events
            </h1>
            <div className="flex flex-wrap justify-center items-center">
                {fetchAllProduct.map(product => (
                    <Card key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
