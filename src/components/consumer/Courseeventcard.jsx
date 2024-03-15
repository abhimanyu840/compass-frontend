import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    const handleClick = () => {

    }


    return (
        <>
            <div className="p-4 md:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src='https://dummyimage.com/720x400' alt="blog" />
                    <div className="p-3">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-0.5 ">Category</h2>
                        <h1 className="title-font font-baloo text-lg font-bold text-gray-900 mb-3">Title</h1>
                        <p className="leading-relaxed font-ubuntu mb-3">Description</p>
                        <div className="flex items-center justify-center flex-wrap ">
                            {/* <Link to={`/coursepage/${course.slug[0]}`} className='my-3' onClick={handleClick}><button className=" text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm flex mx-auto ">Start Watching</button></Link> */}
                            <Link to={`/`} className='my-3 no-underline ' onClick={handleClick} ><button className=" text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-800 rounded-md text-sm flex mx-auto font-ubuntu cursor-pointer">Start Watching</button></Link>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
