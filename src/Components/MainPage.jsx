import React from "react";
import header from "../assets/header.jpg";

function MainPage() {
  return (
    <div
      className=" relative h-[70vh] w-full bg-cover bg-center rounded-bl-[6em] rounded-br-[6em] -z-[999]"
      style={{ backgroundImage: `url(${header})` }}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-[1.7em] text-center sm:text-[3em] font-bold text-zinc-300">
          <span className="shadow-lg p-3 rounded-full ">
            Make Yourself at home
          </span>
          {/* <span class="inline-block animate-pulse">
            "Welcome to Our Guest House"
          </span> */}
          <span class="inline-block animate-pulse shadow-lg p-3 rounded-full hover:bg-zinc-800 hover:text-white text-nowrap">
            "Welcome to Our Guest House"
          </span>
        </h1>
      </div>
    </div>
  );
}

export default MainPage;
