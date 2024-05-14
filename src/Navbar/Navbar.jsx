import { useState } from "react";
import './Navbar.css'
const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold text-xl">
                 ꜱᴛᴏɴɪᴛʏ
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a href="#about" className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#services" className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#contact" className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>


            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#services" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#contact" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Contact</a>

            
          
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;