import { Outlet } from "react-router-dom"
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";

const Layout = () => {
  return (
    <>
      <nav><Navbar/></nav>
      <main><Outlet/></main>
      <footer><Footer/>
        <div className="pb-24">
            {}
        </div>
</footer>
    </>
  );
};

export default Layout
