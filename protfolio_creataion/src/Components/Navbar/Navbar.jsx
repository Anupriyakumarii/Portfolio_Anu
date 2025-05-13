import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      {/* <div className="navbar">
        <ul className="nav_menu">
          <li className="nav-link">
            <a href="#Home">Home</a>
          </li>
          <li className="nav-link">
            <a href="#About">About</a>
          </li>
          <li className="nav-link">
            <a href="#Experience">Experience</a>
          </li>
          <li className="nav-link">
            <a href="#Project">Projects</a>
          </li>
          <li className="nav-link">
            <a href="#Contact">Contacts</a>
          </li>
        </ul>
      </div> */}

      <nav className="navbar">
        <div className="logo">~Anu</div>
        {/* <img src={logo} className="logo" height={60}></img> */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#About">About</a>
          <a href="#Experience">Experience</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
