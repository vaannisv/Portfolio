import "./NavbarStyles.css" 

import React from 'react'

const Navbar = () => {
  return (
    <div className="header">
        <a href="/"><h1>Portfolio</h1></a>
        <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Projects</a></li>
            <li><a href="/contact">Contact Me</a></li>
        </ul>
    </div>
  )
}

export default Navbar