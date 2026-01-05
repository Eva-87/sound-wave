import "./Logo.css";
import logoImg from "../assets/logo.png"; 

function Logo() {
  return (
    <img
      src={logoImg}
      alt="Logo"
      className="logo"
    />
  );
}

export default Logo;
