import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiContext from '../context/apiContext';
import { toast } from 'react-toastify'


const Productpage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const context = useContext(apiContext)
    const { user, getUser } = context

    const token = localStorage.getItem('accessToken')
    const ref = useRef()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/products/${id}`);
                const { data } = response;
                const parsedProduct = {
                    _id: data._id,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    image: data.imageUrl,
                    type: data.type,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    duration: data.duration
                };
                setProduct(parsedProduct);
            } catch (error) {
                console.error('Fetching Product failed:', error);
            }
        };
        fetchProduct();
        (() => {
            getUser(token)
        })()
    }, [id]);

    const handleCheckout = async (amount) => {
        const { data: { key } } = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/getkey`)
        const { data: { order } } = await axios.post(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/payment/checkout`, { amount })
        var options = {
            key: key,
            amount: order.amount,
            currency: "INR",
            name: "The Investment Compass",
            description: "Transaction for The Investment Compass",
            image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/mv0lPzzqwRuz2ZE5/new-project-12-1-Yle54ojpjnt6QxDV.png',
            order_id: order.id,
            redirect: false,
            // callback_url: `${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/payment/paymentVerification` ,
            handler: async function (response) {
                await axios.post(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/payment/paymentVerification`, {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                })
            },
            handler: async function () {
                await axios.post(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/orders/create`, {
                    userId: user.userId,
                    productId: product._id,
                    totalPrice: product.price,
                    status: "completed"
                })
            },
            prefill: {
                name: user.name,
                email: user.email,
                contact: user.mobileNo
            },
            redirect: false,
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3B036A"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    let buyedProductId

    // useEffect(() => {
    //     const fetchBuyed = async () => {
    //         let res = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/orders/${user?.userId}`)
    //         const buyedItem = res.data
    //         Array.from(buyedItem, item => buyedProductId = item._id)

    //         if (buyedProductId == product._id) {
    //             ref.current.disabled = true
    //         } else {
    //             ref.current.disabled = false

    //         }
    //         console.log(ref.current.disabled)
    //         console.log(buyedProductId)
    //     }
    //     fetchBuyed()
    // }, [product])





    return (
        <div>
            {product ? (
                <section className="text-gray-600 body-font overflow-hidden font-roboto">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap ">
                            <img alt="product" className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                                <p className="leading-relaxed">{product.description}</p>
                                {product.type == 'course' ? <p className=" font-ubuntu mb-3">Duration: {product.duration} Days</p> : <>
                                    <p className=" font-ubuntu mb-3">Start: {new Date(product.startDate).toISOString().split('T')[0]}</p>
                                    <p className=" font-ubuntu mb-3">End: {new Date(product.endDate).toISOString().split('T')[0]}</p>
                                </>}
                                <div className="flex flex-wrap mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    <span className="title-font font-medium text-2xl text-gray-900">Price: ₹{product.price}</span>
                                    <button ref={ref} disabled={false} onClick={() => handleCheckout(product.price)} className="ml-auto text-lg font-ubuntu text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded cursor-pointer">Register Now</button>
                                    {/* <button className="ml-auto text-lg font-ubuntu text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded cursor-pointer">Explore</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Productpage;
