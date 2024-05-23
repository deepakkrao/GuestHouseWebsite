import React from "react";
import header from "../assets/header.jpg";

function MainPage() {
  return (
    <div
      className=" relative h-[70vh] w-full bg-cover bg-center rounded-bl-[6em] rounded-br-[6em] -z-[999]"
      style={{ backgroundImage: `url(${header})` }}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-[2em] text-center sm:text-[3em] text-white">
          Xperience the Art of Hospitality
          {/* <span class="inline-block animate-pulse">
            "Welcome to Our Guest House"
          </span> */}
          <span class="inline-block animate-pulse shadow-lg p-2 rounded-full ml-1 hover:bg-zinc-800 hover:text-white">
            "Welcome to Our Guest House"
          </span>
        </h1>
      </div>
    </div>
  );
}

export default MainPage;
