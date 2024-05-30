import React from "react";
import MainPage from "./MainPage";
import Cards from "./Cards";
import service from "../assets/service.jpg";

import Comfort from "../assets/Comfort.jpg";
import Adven from "../assets/adventure.jpg";
import luxury from "../assets/luxury.jpg";
import serenity from "../assets/Serenity.jpg";

function services() {
  const data = {
    title: "We're Here to Help You",
    Content: "Services",
    image: service,
  };
  const cardData = [
    {
      Headers: "High Class Security",
      bg: Comfort,
      mess: "Our guest house is all about comfort, with cozy rooms and friendly service to make your stay relaxing and enjoyable",
    },
    {
      Headers: "24 Hours Room Service",
      bg: Adven,
      mess: "Experience adventure at our guest house, where excitement awaits at every turn",
    },
    {
      Headers: "Restaurant",
      mess: "Indulge in luxury at our guest house, where opulent amenities and exquisite touches redefine relaxation.",
      bg: luxury,
    },
    {
      Headers: "Tourist Guide Support",
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

export default services;
