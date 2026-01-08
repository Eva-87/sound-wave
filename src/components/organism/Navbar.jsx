import { Link } from "react-router-dom";
import Logo from "../atoms/Logo"; // ajusta la ruta según tu estructura

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      
      {/* Logo + nombre */}
      <div className="flex items-center gap-3">
        <Logo />
        <span className="text-xl font-bold">SoundWave</span>
      </div>

      {/* Links */}
      <div className="flex gap-6 font-[Poppins]">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="discover" className="hover:text-blue-400">Discover</Link>
        <Link to="join" className="hover:text-blue-400">Join</Link>
      </div>

    </nav>
  );
}

export default Navbar;
