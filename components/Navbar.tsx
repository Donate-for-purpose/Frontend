import { useState } from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';




function Navbar() {


  const [usedisplay, setusediplay] = useState(false);
  const enterd = () => {
    setusediplay(true)
  }

  let pro='hidden'
  const [dis, setdisplay] = useState('hidden')
  function t() {
    console.log("asfd");

    {
      if (dis == 'hidden') {
        setdisplay('visible')
        return
      }
      else if (dis == "visible") {
        setdisplay('hidden')
        return
      }
      else {
        setdisplay('hidden')
      }
    }
  }



  function drop() {
    var c = 0;

    var x = document.getElementById('dropdown')
    var nv = document.getElementById('nav'); {
      if (x!=null && x.style.visibility == 'visible') {
        x.style.visibility = 'hidden';
      }
      else if(x!=null) {
        x.style.visibility = 'visible';
      }
    }
  }

  return (
    <div>
      <ul id="nav" className=" flex w-full bg-black text-white fixed h-16 ">

        <div className='hidden sm:contents'>
          <li className="mr-3 lg:mr-6 ml-6  my-4 text-lg">
            <Link href="#">Home</Link>
          </li>
          <li className="mr-3 lg:mr-6 my-4 text-lg">
            <Link href="/donate">Donate</Link>
          </li>
          <li className="mr-3 lg:mr-6 my-4 text-lg">
            <Link href="/register">Register</Link>
          </li>
          <li className="mr-3 lg:mr-6 my-4 text-lg">
            <Link href="/yourfunds">Your funds</Link>
          </li>
        </div>


        <div className='lg:hidden  md:hidden'>
          <button id="dropdownButton" data-dropdown-toggle="dropdown" className="mt-3 ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:hidden md-hidden sm-hidden" type="button" onClick={t} >
            <i className="iconify" data-icon="akar-icons:three-line-horizontal"></i>
            <Icon icon="akar-icons:three-line-horizontal" />
          </button>


          <div className={dis}>
            <div className=" ml-4 z-10  text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 " id="dropdown">
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Home</a>
                </li>
                <li>
                  <a href="/donate" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Donate</a>
                </li>
                <li>
                  <a href="/register" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Register</a>
                </li>
                <li>
                  <a href="/yourfunds" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Your funds</a>
                </li>
              </ul>
            </div>
          </div>

        </div>



        <div className='flex-1'>
          <li className="mr-3 lg:mr-6 text-right ">
            <Link href="/Login">
              <button onClick={enterd} className=" my-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 border-b-4  border-black hover:border-blue-500 rounded">LOG IN</button>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar