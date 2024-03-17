import React from 'react';
import { useSearchParams } from "react-router-dom"


const Paymentsuccess = () => {
    const searchParams = new useSearchParams()[0]
    const referenceNum = searchParams.get("reference");

    return (
        <div className="">
            <h1 className="text-2xl font-roboto font-semibold text-center">
                Payment Successful
            </h1>
            <div className='font-poppins text-lg text-center'>
                Reference No:- {referenceNum}
            </div>
        </div>
    );
}

export default Paymentsuccess;
