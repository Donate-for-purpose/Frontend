import React, { useState } from 'react'
import Navbar from '../../components/Navbar'

function index() {
    const [funds, setFunds] = useState([{
        "purpose": "purpose",
        "fund": "$"
    },
    {
        "purpose": "purpose",
        "fund": "$"
    },
    {
        "purpose": "purpose",
        "fund": "$"
    }
    ])

    const data = [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Victor Wayne" },
        { id: "4", name: "Jane Doe" },
    ];
    return (
        <>
            <Navbar />
            <div className='bg-gray-900 pt-20 w-full h-full '>
                <div className=" bg-gray-800 bg-opacity-50 rounded-lg w-6/12 mx-auto p-10">
                    <h2 className="text-white text-4xl pt-0 mx-auto w-full text-center font-semibold">Your funds</h2>
                    <div className="relative mb-4 mt-8">
                        <label htmlFor="c" className="leading-7 text-lg text-gray-400">Your Address</label>
                        <p className=' px-5 py-2 rounded-lg bg-gray-600 text-white border-none'>cosmos1cdytzhqh2aq6z80t6sxg6slrt7jgzmjvs752wy</p>
                    </div>
                    <div className='bg-gray-700 h-60 overflow-scroll'>
                        <div className="text-md pt-4 pb-2  text-center">fund for complete the rode work</div>
                        <p className=' px-5 py-2 rounded-lg bg-yellow-500  border-none w-fit mx-auto '>4,124$</p>

                        <div className="text-md pt-4 pb-2  text-center">fund for complete the rode work</div>
                        <p className=' px-5 py-2 rounded-lg bg-yellow-500  border-none w-fit mx-auto '>4,124$</p>

                        <div className="text-md pt-4 pb-2  text-center">fund for complete the rode work</div>
                        <p className=' px-5 py-2 rounded-lg bg-yellow-500  border-none w-fit mx-auto '>4,124$</p>

                        <div className="text-md pt-4 pb-2  text-center">fund for complete the rode work</div>
                        <p className=' px-5 py-2 rounded-lg bg-yellow-500  border-none w-fit mx-auto '>4,124$</p>

                        <div className="text-md pt-4 pb-2  text-center">fund for complete the rode work</div>
                        <p className=' px-5 py-2 rounded-lg bg-yellow-500  border-none w-fit mx-auto '>4,124$</p>

                        <div className="text-md pt-4 pb-2  text-center">fund for complete the rode work</div>
                        <p className=' px-5 py-2 rounded-lg bg-yellow-500  border-none w-fit mx-auto '>4,124$</p>
                    </div>
                    <div className='bg-gray-700 overflow-scroll mt-3 h-fit py-2'>
                        <div className='flex'>
                            <input></input>
                        </div>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:scale-90 duration-300 mt-3">Donate</button>
                    <p className="text-xs mt-3">You have the power to save a Life.</p>
                </div>
            </div>
        </>
    )
}

export default index