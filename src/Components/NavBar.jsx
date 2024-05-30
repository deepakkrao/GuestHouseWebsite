import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { TbHomeFilled, TbUserFilled } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { FcGallery, FcServices } from "react-icons/fc";
import { IoBed } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

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
                <span className=" text-zinc-900 hidden md:inline-block animate-bounce shadow-lg p-2 rounded-full ml-1 hover:bg-zinc-800 font-sans hover:text-white">
                  Kingsukh Guest House
                </span>
              </div>
              <div className="hidden md:block">
                {/* Add your navigation links here */}

                {[
                  { a: "Home", link: "/" },
                  { a: "About", link: "/About" },
                  { a: "Services", link: "/Services" },
                  { a: "Rooms", link: "/RoomsBed" },
                  { a: "Gallery", link: "/Gallery" },
                  { a: "Contact", link: "/Contact" },
                ].map((items, index) => (
                  <NavLink
                    to={items.link}
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-zinc-800 m-2 text-white px-3 py-2 rounded-md text-sm font-medium"
                        : "text-gray-300 hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    {items.a}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile menu */}

            <div className="absolute w-[90%] flex justify-center items-center md:hidden">
              {/* <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-zinc-900 text-3xl focus:outline-none focus:text-zinc-700"
              >
                <CgMenuGridO />
              </button> */}
              <div className=" flex justify-center items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* Add your navigation links here */}
                {[
                  { a: <TbHomeFilled />, link: "/" },
                  { a: <TbUserFilled />, link: "/About" },
                  { a: <FcServices />, link: "/Services" },
                  { a: <IoBed />, link: "/RoomsBed" },
                  { a: <FcGallery />, link: "/Gallery" },
                  { a: <RiContactsLine />, link: "/Contact" },
                ].map((items, index) => (
                  <NavLink
                    key={index}
                    to={items.link}
                    className={({ isActive }) =>
                      isActive
                        ? " bg-zinc-800 text-2xl text-white m-2 px-3 py-2 rounded-full font-medium"
                        : "text-zinc-800 hover:bg-zinc-800 text-xl hover:text-white px-3 m-3 py-2 rounded-full font-medium"
                    }
                  >
                    {items.a}
                  </NavLink>
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
