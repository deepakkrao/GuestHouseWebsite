import React from "react";

function Button() {
  const phoneNum = "9007062180";
  const message =
    "Hello, Iwould like to book a room at your guest house. Could you please more details";
  const chatMe = () => {
    const URL = `https://wa.me/${phoneNum}?text=${encodeURIComponent(message)}`;
    window.location.href = URL;
  };
  return (
    <div>
      <button
        onClick={chatMe}
        className="bg-zinc-900 text-white font-bold shadow-lg p-3 rounded-full  text-sm sm:text-xl"
      >
        Book Now.
      </button>
    </div>
  );
}

export default Button;
