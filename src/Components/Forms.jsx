import React from "react";

function Forms() {
  return (
    <div className="full h-1/2 flex justify-around items-center flex-col -mt-20 sm:flex-row">
      <div className="bg-zinc-400 bg-opacity-30 text-black grid grid-col-1 justify-between sm:grid-cols-2 md:grid-cols-3 p-8 rounded-xl  ">
        <input
          type="text"
          placeholder="First Name"
          className="outline-none border-zinc-400 m-8 border-b-4 p-4 font-bold  rounded-full"
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          className=" outline-none border-zinc-400 m-8 border-b-4 p-4 font-bold  rounded-full"
        ></input>
        <input
          type="email"
          placeholder="Email Address"
          className="outline-none border-zinc-400 m-8 border-b-4 p-4 font-bold  rounded-full"
        ></input>
        <input
          type="number"
          placeholder="Mobile Number +91"
          className="outline-none border-zinc-400 m-8 border-b-4 p-4 font-bold  rounded-full"
        ></input>
        <textarea
          placeholder="Write your Query/Message"
          className="outline-none border-zinc-400 m-8 border-b-4 p-4 font-bold  rounded-full"
        ></textarea>
        <h1 className=" text-center m-12">
          <span className="bg-zinc-900 text-white font-bold shadow-lg p-3 rounded-full  text-sm sm:text-xl">
            Send.
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Forms;
