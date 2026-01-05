import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        
        SoundWave
        <Link to="/">Home</Link>
        <Link to="discover">Discover</Link>
        <Link to="join">Join</Link>
    </>
    
  );
}

export default Navbar;
