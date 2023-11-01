import React, { useState } from 'react';
 import Image from 'next/image'
 import JoeLogo from '../../styles/svg/Joe-Logo.svg'
 import Link from 'next/link'
 //'../../styles/svg/Joe-Logo.svg
// import styles from "./navbar.module.css"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lavendarWeb py-3 w-full">
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 text-3xl">
          <div className="flex items-center">
            <div className='px-4'>
            <Image
            className='py-10'
            src={JoeLogo}
           width={70}
           height={70}
            alt="the logo"
            />

            </div>
            <Link href='/'className="flex-shrink-0
             text-black 
             font-BrushScript
            lg:text-5xl
             hover:text-redWine">
             Burley Maids
            </Link>    
            
          </div>
          <div className="hidden md:block  ">
            <div className="ml-10 flex 
            items-baseline 
            space-x-4 text-xl 
            font-bold tracking-wide 
            ">
              <Link
                href="services"
                className=" px-3 py-2 hover:text-redWine"
              >
                Services
              </Link>
              <Link
                href="/Testimonies"
                className=" px-3 py-2 hover:text-redWine"
              >
               Testimonies
              </Link>
              <Link
                href="/contact"
                className=" px-3 py-2 hover:text-redWine"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden text-black">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-70"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link
              href="/"
              className=" hover:bg-frenchGray hover:text-redWine block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
         
            <Link
              href="/services"
              className=" hover:bg-frenchGray hover:text-redWine block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonies
            </Link>
            <Link
              href="/contact"
              className=" hover:bg-frenchGray hover:text-redWine block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
