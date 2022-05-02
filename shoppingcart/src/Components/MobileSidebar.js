import React from "react";
import "../Styles/MobileSidebar.css";
import { NavLink } from "react-router-dom";
import { AiTwotoneLeftSquare } from "react-icons/ai";
import odinIcon from "../Assets/odinIcon.svg";

function MobileSidebar({ mobileSidebarIsOpen, setMobileSidebarIsOpen, theme }) {
  function handleCloseMobileSideNav(event) {
    setMobileSidebarIsOpen(!mobileSidebarIsOpen);
  }
  return (
    <nav className="mobile-side-nav" data-theme={theme}>
      <div className="mobile-sidebar-top">
        <NavLink to="/" className="mobile-icon-plus-text-container">
          <div className="odin-icon-container">
            <img className="odin-icon" src={odinIcon} alt="icon" />
          </div>
          <div data-testid="icon-text" className="icon-text">
            Odin's Shop
          </div>
        </NavLink>
        <div
          className="close-mobile-side-nav-container"
          onClick={(event) => handleCloseMobileSideNav(event)}
        >
          <AiTwotoneLeftSquare className="close-sidebar-button" />
        </div>
      </div>
      <div className="mobile-side-links-container">
        <NavLink
          to="/shop"
          className="side-shop-link"
          onClick={(event) => handleCloseMobileSideNav(event)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/shop/men"
          className="side-men-link"
          onClick={(event) => handleCloseMobileSideNav(event)}
        >
          Men
        </NavLink>
        <NavLink
          to="/shop/women"
          className="side-women-link"
          onClick={(event) => handleCloseMobileSideNav(event)}
        >
          Women
        </NavLink>
        <NavLink
          to="/shop/accessories"
          className="accessories-link"
          onClick={(event) => handleCloseMobileSideNav(event)}
        >
          Accessories
        </NavLink>
      </div>
    </nav>
  );
}

export default MobileSidebar;
