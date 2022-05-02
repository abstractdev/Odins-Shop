import React from "react";
import "../Styles/Footer.css";
import { FiMail } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";

function Footer({ theme }) {
  return (
    <>
      <footer className="footer" data-theme={theme}>
        <div className="socials-links">
          <a href="http://www.github.com/abstractdev">
            <FiInstagram />
          </a>
          <a href="http://www.github.com/abstractdev">
            <FiTwitter />
          </a>
          <a href="http://www.github.com/abstractdev">
            <FiFacebook />
          </a>
          <a href="http://www.github.com/abstractdev">
            <FiGithub />
          </a>
        </div>
        <div className="footer-links-container">
          <a href="http://www.github.com/abstractdev" className="aboutus-link">
            <div className="aboutus-icon-container">
              <FiInfo className="aboutus-icon" />
            </div>
            <div className="aboutus-text-container">About Us</div>
          </a>
          <a href="http://www.github.com/abstractdev" className="contact-link">
            <div className="contact-icon-container">
              <FiMail className="contact-icon" />
            </div>
            <div className="footer-text-container">Contact Us</div>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
