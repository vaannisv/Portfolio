import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

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
      <div className="right"></div>
    </div>
  );
};

export default AboutContent;
