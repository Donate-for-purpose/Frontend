import React, { useState } from 'react'

function Navbar() {
  const [dis, setdisplay] = useState('hidden')
  return (
    <div>
      <ul id="nav" className=" flex w-full bg-black fixed h-16 ">
        <div className='hidden sm:contents text-white'>
          <li className="mr-3 lg:mr-6 ml-6  my-4 text-lg">
            <a href="#">Home</a>
          </li>
          <li className="mr-3 lg:mr-6 my-4 text-lg">
            <a href="#">Donate</a>
          </li>
          <li className="mr-3 lg:mr-6 my-4 text-lg">
            <a href="#">Register</a>
          </li>
        </div>


        <div className='flex-1'>
          <li className="mr-3 lg:mr-6 text-right ">
            
              <button className=" my-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 border-b-4  border-black hover:border-blue-500 rounded">LOG IN</button>
    
          </li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar