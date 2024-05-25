import React from "react";
import MainPage from "./MainPage";
import Cards from "./Cards";
import header from "../assets/header.jpg";

import Comfort from "../assets/Comfort.jpg";
import Adven from "../assets/adventure.jpg";
import luxury from "../assets/luxury.jpg";
import serenity from "../assets/Serenity.jpg";

function Home() {
  const data = {
    title: "Discover Your Home",
    Content: "Away from Home",
    image: header,
  };
  const cardData = [
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
  ];
  return (
    <div>
      <MainPage data={data} />
      <Cards cardData={cardData} />
    </div>
  );
}

export default Home;
