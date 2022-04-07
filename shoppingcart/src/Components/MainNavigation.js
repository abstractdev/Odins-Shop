import React from "react";
import { NavLink } from "react-router-dom";
import '../Styles/MainNavigation.css'
import odinIcon from '../Assets/odinIcon.svg'
import Cart from "./Cart";

function MainNavigation() {
  return (
    <>
      <nav className="top-nav">
        <NavLink to="/" className="icon-plus-text-container">
          <div className="odin-icon-container">
            <img className='odin-icon' src={odinIcon} alt="icon"/>
          </div>
          <div data-testid="icon-text" className="icon-text">The Odin Shop</div>
        </NavLink>
          <div className="links-container">
            <NavLink to="/"  className="home-link">Home</NavLink>
            <NavLink to="/shop"  className="shop-link">Shop</NavLink>
            <Cart/>
          </div>
        </nav>
    </>
  );
}

export default MainNavigation;