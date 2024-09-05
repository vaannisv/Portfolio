import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import aboutimg1 from "../assets/aboutimg1.jpg";
import aboutimg2 from "../assets/aboutimg2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I'm a front-end developer with knowledge in HTML, CSS, JS and ReactJS
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={aboutimg1} className="img" alt="img"/>
          </div>
          <div className="img-stack bottom">
            <img src={aboutimg2} className="img" alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
