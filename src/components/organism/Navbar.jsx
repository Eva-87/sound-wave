import Logo from "../atoms/Logo";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo />
        <Title>SoundWave</Title>
      </div>

      <div className="navbar-right">
        <Button>Home</Button>
        <Button>Discover</Button>
        <Button>Join</Button>
      </div>
    </nav>
  );
}

export default Navbar;
