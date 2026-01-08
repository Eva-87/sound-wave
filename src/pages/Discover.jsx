import React from "react";
import Button from "../components/atoms/Button";

import microphone from "../assets/microphone.svg";
import albums from "../assets/albums.svg";
import more from "../assets/more.svg";
import covers from "../assets/covers.jpg";

const Discover = () => {
  const items = [
    { icon: microphone, label: "Charts", link: "/discover/charts" },
    { icon: albums, label: "Albums", link: "/discover/albums" },
    { icon: more, label: "More", link: "/discover/more" },
  ];

  return (
    <section className="w-full bg-[#2F303A] text-white font-poppins py-20 px-6 md:px-6">

      {}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">

        {}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Discover New Music
          </h2>

          <div className="grid grid-cols-3 gap-2">
          {items.map((item) => (
            <Button
              key={item.label}
              text={
                <div className="flex flex-col items-center gap-1">
                  <img src={item.icon} alt={item.label} className="w-6 h-6" />
                  <span className="text-xs">{item.label}</span>
                </div>
              }
              link={item.link}  
              className="
                bg-[#202027]
                hover:bg-[#2a2a33]
                transition-colors
                rounded-lg
                w-16 h-16
                flex items-center justify-center
               "
             />
            ))}
          </div>


          <p className="text-sm opacity-80 max-w-xs md:max-w-sm">
            By joining you can benefit by listening to the latest albums released.
          </p>
        </div>

        {}
        <div className="flex justify-center md:justify-end">
          <img
            src={covers}
            alt="Album covers"
            className="w-56 sm:w-64 md:w-72 lg:w-80 object-contain rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Discover;
