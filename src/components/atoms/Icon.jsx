
import "./Icon.css";

// Importa tus iconos desde assets
import albums from "../assets/albums.svg";
import covers from "../assets/covers.jpg";
import microphone from "../assets/microphone.svg";
import more from "../assets/more.svg";
import fb from "../assets/fb.jpg";
import logo from "../assets/logo.svg";
import twitter from "../assets/twitter.jpg";
import logonav from "../assets/logonav.png";

// Mapa de iconos
const icons = {
  albums,
  covers,
  microphone,
  more,
  fb,
  logo,
  twitter,
  logonav

};

function Icon({ name, size = 24 }) {
  const src = icons[name];

  return (
    <img
      src={src}
      alt={name}
      className="icon"
      style={{ width: size, height: size }}
    />
  );
}

export default Icon;
