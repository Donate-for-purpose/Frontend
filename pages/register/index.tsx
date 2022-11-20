import React, { useState } from 'react'
import Navbar from '../../components/Navbar'

function register() {
    const [companyName, setCompanyName]=useState('');
    const [companyAddress, setCompanyAddress]=useState('Company address');

    return (
        <>
            <Navbar />
            <section className=" text-gray-400 bg-gray-900 body-font h-full lg:h-screen flex justify-center">
                <div className="container px-5 py-24 m-0 mx-auto flex flex-wrap items-center ">

                    <div className=" m-0 md:m-0 lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
                        <h2 className="text-white text-lg font-medium title-font mb-5">Helping Hands</h2>
                        <div className="relative mb-4">
                            <label htmlFor="company-id" className="leading-7 text-sm text-gray-400">Company Name</label>
                            <input value={companyName} onChange={(e)=>(setCompanyName(e.target.value))} type="text" name="company-id" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="company-id" className="leading-7 text-sm text-gray-400">company wallet address</label>
                            <p className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ">{companyAddress}</p>
                        </div>
                        
                        
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                        <p className="text-xs mt-3">You have the power to save a Life.</p>
                    </div>
                    <div className=" mt-8 w-full lg:ml-20 md:w-1/2 sm:w-full  md:pl-12 lg:pr-0 sm:mt-8 md:mt-8">
                        <h1 className="title-font font-medium text-3xl text-white">Helping hands are better than praying lips!</h1>
                        <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolores unde cumque similique, placeat eos?</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default register