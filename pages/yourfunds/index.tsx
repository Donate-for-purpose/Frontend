import React from 'react'
import Navbar from '../../components/Navbar'

function index() {
    return (
        <>
            <Navbar />
            <div className='bg-black'>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-white text-lg font-medium title-font mb-5">Helping Hands</h2>
                    <div className="relative mb-4">
                        <label htmlFor="company-id" className="leading-7 text-sm text-gray-400">Company ID</label>
                        {/* <input value={companyAddress} onChange={(e) => (setCompanyAddress(e.target.value))} type="text" name="company-id" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> */}
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="person-id" className="leading-7 text-sm text-gray-400">Person ID</label>
                        {/* <input value={personAddress} onChange={(e) => (setPersonAddress(e.target.value))} type="text" name="person-id" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> */}
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:scale-90 duration-300">Donate</button>
                    <p className="text-xs mt-3">You have the power to save a Life.</p>
                </div>
            </div>
        </>
    )
}

export default index