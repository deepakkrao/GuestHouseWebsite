import React from "react";
import beds from "../assets/RoomesBed.jpg";
import MainPage from "./MainPage";
import Forms from "./Forms";
function Contact() {
  const data = {
    title: "Send Your Query/Messages",
    Content: "We are Here to help you",
    image: beds,
  };

  return (
    <div>
      <MainPage data={data} />
      <Forms />
    </div>
  );
}

export default Contact;
