import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaGit, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style={{color: "#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Roorkee</p>
                        <p>Uttarakhand (247667).</p>
                    </div>
                </div>

                <div className="phone">
                    <FaPhone size={25} style={{color: "#fff", marginRight:"2rem"}}/>
                    <div>
                        <h4>+91 7217-XXXXXX</h4>
                    </div>
                </div>

                <div className="mail">
                    <FaMailBulk size={25} style={{color: "#fff", marginRight:"2rem"}}/>
                    <div>
                        <h4>vaanichaudhary666@gmail.com</h4>
                    </div>
                </div>
            </div>


            <div className="right">
                <h4>Connect with me!</h4>
                <div className="linkedin">
                    <FaLinkedin size={25} style={{color: "#fff", marginRight:"1rem"}}/>
                    <a href="https://www.linkedin.com/in/vannichaudhary/">@vannichaudhary</a>
                </div>
                <div className="github">
                    <FaGithub size={25} style={{color: "#fff", marginRight:"1rem"}}/>
                    <a href="https://github.com/vaannisv">@vaannisv</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer