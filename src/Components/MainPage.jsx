import React from "react";

const MainPage = ({ data }) => {
  const { title, Content, image } = data;
  return (
    <div
      className=" relative h-[70vh] w-full bg-cover bg-center rounded-bl-[6em] rounded-br-[6em] -z-[999]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-[1.7em] text-center sm:text-[3em] font-bold text-zinc-300">
          <span className="shadow-lg p-3 rounded-full ">{title}</span>
          <span className="inline-block animate-pulse shadow-lg p-3 rounded-full hover:bg-zinc-800 hover:text-white text-nowrap">
            {Content}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default MainPage;
