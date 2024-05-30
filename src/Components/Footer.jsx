import React from "react";
import { FaLocationDot, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagram, FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className=" bg-zinc-900 mt-28 flex flex-col justify-center items-center rounded-t-xl rounded-r-xl  ">
      <div className="text-zinc-800 text text-4xl font-bold font-sans mt-7 text-nowrap text-center sm:text-9xl">
        Kingsukh Gouest House.
      </div>
      <div className="bg-blue-400 w-2/3 rounded-xl p-8 mt-8">
        <h1 className="text-2xl p-2 text-center font-bold text-zinc-900">
          Contact Info
        </h1>
        {[
          {
            icon: <FaLocationDot />,
            con: " Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156",
          },
          {
            icon: <MdAttachEmail />,
            con: "kkghosh0099@gmail.com",
          },
          {
            icon: <FaPhoneAlt />,
            con: "+91 9007062180",
          },
        ].map((items, idx) => (
          <div
            key={idx}
            className="text-white mt-2 mb-4 flex flex-row gap-6 items-center text-xl text-wrap font-bold"
          >
            <span className="text-zinc-900">{items.icon}</span>{" "}
            <span> {items.con} </span>
          </div>
        ))}
        <div className="flex flex-row justify-center items-center gap-6 text-xl">
          <span className="text-zinc-900 font-bold">Follow Us on</span>
          <FaFacebookSquare />
          <FaInstagram />
          <FaYoutube />
          <FaXTwitter />
        </div>
      </div>

      <div>Map</div>
    </div>
  );
}

export default Footer;
