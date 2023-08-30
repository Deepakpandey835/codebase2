import React from 'react'
import logo from '../assests/images/logo.png';

export const Footer = () => {
  return (
        <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo}></img>
          </a>
          <p class="text-black text-xl font-normal capitalize sm:ml-4 sm:pl-[70%] sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">@copyright —2023 Wikipedia
          </p>
        </div>
      </footer>
  )
}
export default Footer;

    