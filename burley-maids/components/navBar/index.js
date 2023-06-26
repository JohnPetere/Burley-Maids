import React, { useState } from "react";
import "./navBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar ">
      <div className=" nav-desktop-bar  ">
        <div className=" inner-desktop-bar ">
          <div className=" nav-logo ">
            <div className="">
              <img className="logo" src="/logo.svg" alt="Logo" />
            </div>
          </div>
          <div className="desktop-nav-link">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="link">
                Home
              </a>
              <a href="/about" className="link">
                About
              </a>
              <a href="/services" className="link">
                Services
              </a>
              <a href="/contact" className="link">
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="menu-toggle"
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
      {/* open mobile menu */}
      {isOpen && (
        <div className="md:hidden mobile-menu" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="link">
              Home
            </a>
            <a href="/about" className="link">
              About
            </a>
            <a href="/services" className="link">
              Services
            </a>
            <a href="/contact" className="link">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
