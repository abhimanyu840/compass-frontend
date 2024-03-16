import React from 'react'
import Card from './Courseeventcard'

const Home = () => {
    return (
        <>
            <div className='container font-poppins mx-4 '>
                <section className='text-center my-4 mx-2'>

                    <div className="mx-auto">
                        <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=206,fit=crop,q=95/mv0lPzzqwRuz2ZE5/new-project-12-1-Yle54ojpjnt6QxDV.png' />
                    </div>

                    <div className="font-normal text-xl">
                        <span className="font-bold my-4">
                            Empowering Indians for Financial Freedom<br />
                        </span>
                        we're dedicated to empowering Indians with the knowledge and skills for financial freedom through stock market education on Trading and Investment
                    </div>
                    <div className="px-2 mx-auto my-2 ">
                        <button className=" cursor-pointer font-ubuntu flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg">Button</button>
                    </div>
                </section>

            </div>
            <hr />

            <div className="featured ">
                <h1 className="text-3xl font-bold font-madimi-one  text-center">
                    Featured Course
                </h1>

                <div className="flex flex-wrap items-center justify-center">
                    <Card />
                </div>

            </div>

        </>
    )
}

export default Home
