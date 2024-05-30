import React from "react";
import aboutUs from "../assets/Aboutt.jpg";
import MainPage from "./MainPage";

function About() {
  const data = {
    title: "Discoer Our Story",
    Content: "Where Every Stay Feels Like Home",
    image: aboutUs,
  };
  return (
    <>
      <MainPage data={data} />
    </>
  );
}

export default About;
