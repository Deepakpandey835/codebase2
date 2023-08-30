import React from 'react'
import logo from '../assests/images/logo.png';
import down from '../assests/images/down.png';
export const Navbar = () => {
  return (
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center shadow-lg hover:border-2 hover:border-indigo-400">
          <a class="flex  font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="Your Image" className='"'/>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5  text-black flex  bg-gray-300 rounded-lg pl-4px border-black text-center">courses
            <img src={down} alt ="Your Image" className='"' />
            </a>
            <a href="/home"class="mr-5  text-black">Blog</a>
            <a class="mr-5  text-black">About</a>
          </nav>
          <button class="inline-flex items-center bg-fuchsia-600 rounded-full py-1 px-3 focus:outline-none text-white rounded text-base mt-4 md:mt-0">Explore
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
  )
}
export default Navbar;