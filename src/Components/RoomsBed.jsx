import beds from "../assets/RoomesBed.jpg";
import MainPage from "./MainPage";
import Cards from "./Cards";

import React from "react";

function RoomsBed() {
  const data = {
    title: "Discover Your Home",
    Content: "Away from Home",
    image: beds,
  };
  return (
    <div>
      <MainPage data={data} />
      <Cards />
    </div>
  );
}

export default RoomsBed;
