import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Footer.css'
import { FiMail } from "react-icons/fi";

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer-links-container">
          <Link to="/contact"  className="contact-link">
              <div className="contact-icon-container">
                <FiMail className="contact-icon"/>
              </div>
              <div className="footer-text-container">
                Contact Us
              </div>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;