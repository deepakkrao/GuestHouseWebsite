import React from "react";
import Button from "./Button";

function Cards({ cardData }) {
  if (!cardData) return;
  else
    return (
      // <div className="flex justify-center items-center flex-col -mt-24 ml-20 mr-20 sm:flex-row gap-10">
      <div className=" grid grid-col-1 justify-center -mt-24 items-center sm:grid-cols-2 md:grid-cols-3  gap-10 ml-20 mr-20 ">
        {cardData.map((items, indx) => (
          <div
            key={indx}
            className="w-full h-[45vh] rounded-[12px] bg-zinc-800 flex justify-center items-center bg-cover flex-col bg-center"
            style={{ backgroundImage: `url(${items.bg})` }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm flex h-[20vh] rounded-2xl flex-col justify-center items-center p-4 m-4 hover:shadow-lg hover:z-50">
              <h2 className="text-[#31515e] font-bold text-3xl">
                {items.Headers}
              </h2>
              <p className="text-center text-yellow-900">{items.mess}</p>
            </div>
            <Button />
          </div>
        ))}
      </div>
    );
}

export default Cards;
