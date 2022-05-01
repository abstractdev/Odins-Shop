import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/MainNavigation.css";
import odinIcon from "../Assets/odinIcon.svg";
import Cart from "./Cart";
import { FiMenu } from "react-icons/fi";

function MainNavigation({ cartItems, toggleMobileSidebar }) {
  return (
    <>
      <nav className="top-nav">
        <NavLink to="/" className="icon-plus-text-container">
          <div className="odin-icon-container">
            <img className="odin-icon" src={odinIcon} alt="icon" />
          </div>
          <div data-testid="icon-text" className="icon-text">
            Odin's Shop
          </div>
        </NavLink>
        <div className="links-container">
          <NavLink to="/">
            <div className="mobile-odin-icon-container">
              <img className="mobile-odin-icon" src={odinIcon} alt="icon" />
            </div>
          </NavLink>
          <NavLink to="/" className="home-link">
            Home
          </NavLink>
          <NavLink to="/shop" className="shop-link">
            Shop
          </NavLink>
          <NavLink to="/shop/men" className="mobile-top-men-link">
            Men
          </NavLink>
          <NavLink to="/shop/women" className="mobile-top-women-link">
            Women
          </NavLink>
          <Cart cartItems={cartItems} />
          <div
            className="top-burger-container"
            onClick={(event) => toggleMobileSidebar(event)}
          >
            <FiMenu className="top-burger" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
