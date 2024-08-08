import "./Navbar.css";
import { MdOutlineNightlight } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* <img src={logo_img} alt="logo" className="logo"></img> */}
        <h1 className="logo">Anu.</h1>

        <ul className="nav_menu">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contacts</li>
          <MdOutlineNightlight />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
