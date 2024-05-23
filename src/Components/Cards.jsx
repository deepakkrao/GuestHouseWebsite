import React from "react";
import Comfort from "../assets/Comfort.jpg";
import Adven from "../assets/adventure.jpg";
import luxury from "../assets/luxury.jpg";
import serenity from "../assets/Serenity.jpg";

function Cards() {
  return (
    <div className="flex justify-center items-center flex-col -mt-24 ml-20 mr-20 sm:flex-row gap-10">
      {[
        {
          Headers: "Comfort",
          bg: Comfort,
          mess: "Our guest house is all about comfort, with cozy rooms and friendly service to make your stay relaxing and enjoyable",
        },
        {
          Headers: "Adventure",
          bg: Adven,
          mess: "Experience adventure at our guest house, where excitement awaits at every turn",
        },
        {
          Headers: "Luxury",
          mess: "Indulge in luxury at our guest house, where opulent amenities and exquisite touches redefine relaxation.",
          bg: luxury,
        },
        {
          Headers: "Serenity",
          mess: "Find serenity at our guest house, where tranquility surrounds you, offering a peaceful escape from the hustle and bustle of everyday life.",
          bg: serenity,
        },
      ].map((items, indx) => (
        <div
          key={indx}
          className="w-[78vw] h-[55vh] rounded-[12px] bg-zinc-800 flex justify-center items-center bg-cover bg-center sm:w-[60vw]"
          style={{ backgroundImage: `url(${items.bg})` }}
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm flex h-[20vh] rounded-2xl flex-col justify-center items-center p-4 m-4 hover:shadow-lg hover:z-50">
            <h2 className="text-[#31515e] font-bold text-3xl">
              {items.Headers}
            </h2>
            <p className="text-center text-yellow-900">{items.mess}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
