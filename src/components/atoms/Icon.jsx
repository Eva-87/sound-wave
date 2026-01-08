import React from "react";
import twitterImg from "../../assets/twitter.jpg";
import fbImg from "../../assets/fb.jpg";
import more from "../../assets/more.svg";
import microphone from "../../assets/microphone.svg";
import albums from "../../assets/albums.svg";
import topartist from "../../assets/topartist.jpg";
import topalbums from "../../assets/topalbums.jpg";
import viral50 from "../../assets/viral50.jpg";
import pulse from "../../assets/pulse.jpg";

const Icon = ({ type, link }) => {
  const icons = {
    twitter: {
      img: twitterImg,
      label: "Twitter",
    },
    facebook: {
      img: fbImg,
      label: "Facebook",
    },
     microphone: {
      img: microphone,
      label: "Microphone",
    },
     albums: {
      img: albums,
      label: "Albums",
    },
     more: {
      img: more,
      label: "More",
    }, 
      topartist: {
      img: topartist,
      label: "topartist",
    },
      topalbums: {
      img: topalbums,
      label: "topalbums",
    },
      viral50: {
      img: viral50,
      label: "viral50",
    },
      pulse: {
      img: pulse,
      label: "pulse",
    },
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:opacity-80 transition"
    >
      <img
        src={icons[type].img}
        alt={icons[type].label}
        className="w-8 h-8 object-contain"
      />
      <span className="text-white text-[1.2rem] font-poppins">
        {icons[type].label}
      </span>
    </a>
  );
};

export default Icon;
