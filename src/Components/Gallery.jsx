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
import gl9 from "../assets/kolkataG.jpg";
import gl4 from "../assets/kolkataG1.jpg";

function Gallery() {
  const data = {
    title: "Discover Your Home",
    Content: "Away from Home",
    image: gallery,
  };
  const cardData = [
    {
      Headers: "The Indian Museum",
      bg: gl9,
      mess: "The Indian Museum in Kolkata, often referred to simply as the Indian Museum, is the largest and oldest museum in India, as well as one of the most significant museums in the Asia-Pacific region",
    },
    {
      Headers: "Kolkata Tramway ",
      bg: gl4,
      mess: "The Kolkata Tramway oldest operating electric tram system in Asia and one of the iconic symbols of Kolkata, India. ",
    },
    {
      Headers: "The Ayodhya",
      bg: gl1,
      mess: "Ayodhya is an ancient city in the Indian state of Uttar Pradesh, renowned for its historical, cultural, and religious significance",
    },
    {
      Headers: "Baranti Village ",
      bg: gl2,
      mess: "Baranti is a serene and picturesque village located in the Purulia district of West Bengal, India. Nestled amidst hills and forests, it is an emerging eco-tourism destination",
    },
    { Headers: "Follwer", bg: gl3, mess: "" },
    {
      Headers: "The Mithon Dam",
      bg: gl5,
      mess: "Maithon Dam is a significant multipurpose dam 0wlocated on the Barakar River in the Dhanbad district of Jharkhand, India.",
    },
    { Headers: "Outer Image", bg: gl6, mess: "" },
    { Headers: "The Palace", bg: gl7, mess: "" },
    { Headers: "Small", bg: gl8, mess: "" },
  ];

  return (
    <div>
      <MainPage data={data} />
      <Cards cardData={cardData} />
    </div>
  );
}

export default Gallery;
