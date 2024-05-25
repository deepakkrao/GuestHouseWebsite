import React from "react";

function Cards({ cardData }) {
  if (!cardData) return;
  else
    return (
      <div className="flex justify-center items-center flex-col -mt-24 ml-20 mr-20 sm:flex-row gap-10">
        {cardData.map((items, indx) => (
          <div
            key={indx}
            className="w-[78vw] h-[55vh] rounded-[12px] bg-zinc-800 flex justify-center items-center bg-cover bg-center sm:w-[60vw] "
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
