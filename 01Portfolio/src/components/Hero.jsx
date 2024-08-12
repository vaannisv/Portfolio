import "./HeroStyles.css"

import React from 'react'
import IntroImg from "../assets/intro-img.jpeg"
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Intro" />
        </div>
        <div className="content">
            <p>HI, I'M A</p>
            <h1>WEB DEVELOPER.</h1>
            <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
        </div>
        
    </div>
  )
}

export default Hero