import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    return (
        <>
            <div className="p-4 md:w-1/4">
                {console.log(product,'product')}
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={product.imageUrl} alt="blog" />
                    <div className="p-3">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-0.5 ">Category: {product.type}</h2>
                        <h1 className="title-font font-roboto text-lg font-bold text-gray-900 mb-3">{product.name}</h1>
                        <p className="leading-relaxed font-ubuntu mb-3">Desc: {product.description}</p>
                        <p className="leading-relaxed font-ubuntu mb-3">Price: ₹{product.price}</p>
                        {product.type == 'course' ? <p className="leading-relaxed font-ubuntu mb-3">Duration: {product.duration}</p> : <div className='flex justify-around'>
                            <p className="leading-relaxed font-ubuntu mb-3">Start: {new Date(product.startDate).toISOString().split('T')[0]}</p>
                            <p className="leading-relaxed font-ubuntu mb-3">End: {new Date(product.endDate).toISOString().split('T')[0]}</p>
                        </div>}
                        <div className="flex items-center justify-center flex-wrap ">
                            {/* <Link to={`/coursepage/${course.slug[0]}`} className='my-3' onClick={handleClick}><button className=" text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm flex mx-auto ">Start Watching</button></Link> */}
                            <Link to={`/product/${product._id}`} className='my-3 no-underline ' ><button className=" text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-800 rounded-md text-sm flex mx-auto font-ubuntu cursor-pointer">Explore</button></Link>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
