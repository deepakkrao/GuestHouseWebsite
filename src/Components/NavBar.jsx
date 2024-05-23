import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white w-full bg-transparent bg-opacity-10 fixed backdrop-blur-sm z-50 rounded-full top-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-full flex justify-between items-center">
            <div className={`flex-shrink-0 text-zinc-700 font-bold font-mono`}>
              <span class="inline-block animate-pulse shadow-lg p-2 rounded-full ml-1 hover:bg-zinc-800 hover:text-white">
                Kingsukh Gouest House
              </span>
            </div>
            <div className="hidden md:block">
              {/* Add your navigation links here */}
              {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
                (items, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {items}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-zinc-900 focus:outline-none focus:text-zinc-700"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className=" flex justify-center items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Add your navigation links here */}
          {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
            (items, index) => (
              <a
                key={index}
                href="#"
                className="text-zinc-800 hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-full text-sm font-medium"
              >
                {items}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
