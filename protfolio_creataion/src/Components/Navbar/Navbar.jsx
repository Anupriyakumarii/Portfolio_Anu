import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="nav">
          <ul className="nav_menu">
            <li className="nav-link">
              <a href="Home">Home</a>
            </li>
            <li className="nav-link">
              <a href="About">About</a>
            </li>
            <li className="nav-link">
              <a href="Experience">Experience</a>
            </li>
            <li className="nav-link">
              <a href="Project">Projects</a>
            </li>
            <li className="nav-link">
              <a href="Contact">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
