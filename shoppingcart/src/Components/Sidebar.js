import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Sidebar.css'
import {FiMenu} from "react-icons/fi";

function Sidebar(props) {
  return (
    <>
      <nav className="side-nav">
        <a href="/"><FiMenu className="side-burger"/></a>
        <div className="side-links-container">
          <Link to="/shop/men"  className="men-link">Men</Link>
          <Link to="/shop/women"  className="women-link">Women</Link>
          <Link to="/shop/accessories"  className="accessories-link">Accessories</Link>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;