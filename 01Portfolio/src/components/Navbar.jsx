import "./NavbarStyles.css";

import React, { useState } from "react";
import { BiColor } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100)
    {
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <a href="/">
        <h1>Portfolio.</h1>
      </a>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#fff" }} />
        )}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/project">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
