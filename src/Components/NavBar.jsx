import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { TbHomeFilled, TbUserFilled } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { FcGallery, FcServices } from "react-icons/fc";
import { IoBed } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className=" bg-white w-[90%] bg-transparent bg-opacity-10 fixed backdrop-blur-sm z-50 rounded-full top-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-full flex justify-between items-center">
              <div
                className={`flex-shrink-0 text-zinc-700 font-bold font-mono`}
              >
                <span className="inline-block animate-bounce shadow-lg p-2 rounded-full ml-1 hover:bg-zinc-800 font-sans hover:text-white">
                  Kingsukh Guest House
                </span>
              </div>
              <div className="hidden md:block">
                {/* Add your navigation links here */}
                {[
                  "Home",
                  "About",
                  "Services",
                  "Rooms",
                  "Gallery",
                  "Contact",
                ].map((items, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {items}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu */}

            <div className="mr-2 flex md:hidden">
              {/* <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-zinc-900 text-3xl focus:outline-none focus:text-zinc-700"
              >
                <CgMenuGridO />
              </button> */}
              <div className=" flex justify-center items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* Add your navigation links here */}
                {[
                  <TbHomeFilled />,
                  <FcServices />,
                  <IoBed />,
                  <TbUserFilled />,
                  <FcGallery />,
                  <RiContactsLine />,
                ].map((items, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-zinc-800 hover:bg-zinc-800 text-xl hover:text-white px-3 py-2 rounded-full font-medium"
                  >
                    {items}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
