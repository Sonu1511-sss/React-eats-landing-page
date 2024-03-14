import React from 'react'
import { VscThreeBars } from "react-icons/vsc";

function Navbar() {
  return (
    <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
    <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <VscThreeBars size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      <div>
        <input type="text" className="w-full py-2 pl-10 pr-[18rem] text-gray-900 bg-white border border-gray-800 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
   
        </div>
      {/* Mobile Menu open: "block", Menu closed: "hidden" */}
      <div  className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
        <div className="flex flex-col md:flex-row md:mx-6">
          <a className="my-2 text-gray-700 transition-colors font-bold duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a>
          <a className="my-2 text-gray-700 transition-colors font-bold duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Orders</a>
          <a className="my-2 text-gray-700 transition-colors font-bold duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Best Ones</a>
          <a className="my-2 text-gray-700 transition-colors font-bold duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Contact Us</a>
        </div>
        <button className='bg-black text-white hidden md:flex items-center py-2 px-[2rem] rounded-lg'>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>Cart
      </button>

      </div>
    </div>
  </nav>
  )
}

export default Navbar