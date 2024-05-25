import React from "react";
import gallery from "../assets/Gallery.jpg";
import MainPage from "./MainPage";
import Cards from "./Cards";

//galllery images impoert from assets

import gl1 from "../assets/ayodhya.webp";
import gl2 from "../assets/baranti.webp";
import gl3 from "../assets/flower.jpg";
import gl5 from "../assets/mithonDam.webp";
import gl6 from "../assets/out.jpg";
import gl7 from "../assets/palash.webp";
import gl8 from "../assets/small.jpg";

function Gallery() {
  const data = {
    title: "Discover Your Home",
    Content: "Away from Home",
    image: gallery,
  };
  const cardData = [
    { Headers: "fdgfhj", bg: gl1, mess: "qwarestdyfughjk" },
    { Headers: "fdgfhj", bg: gl2, mess: "qwarestdyfughjk" },
    { Headers: "fdgfhj", bg: gl3, mess: "qwarestdyfughjk" },
    { Headers: "fdgfhj", bg: gl5, mess: "qwarestdyfughjk" },
    { Headers: "fdgfhj", bg: gl6, mess: "qwarestdyfughjk" },
    { Headers: "fdgfhj", bg: gl7, mess: "qwarestdyfughjk" },
    { Headers: "fdgfhj", bg: gl8, mess: "qwarestdyfughjk" },
  ];

  return (
    <div>
      <MainPage data={data} />
      <Cards cardData={cardData} />
    </div>
  );
}

export default Gallery;
