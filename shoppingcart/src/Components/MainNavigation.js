import React from "react";
import { Link } from "react-router-dom";
import '../Styles/MainNavigation.css'
import odinIcon from '../Assets/odinIcon.svg'
import {BsCart} from 'react-icons/bs'

function MainNavigation(props) {
  return (
    <>
      <nav className="top-nav">
        <Link to="/" className="icon-plus-text-container">
          <div className="odin-icon-container">
            <img className='odin-icon' src={odinIcon} alt="icon"/>
          </div>
          <div data-testid="icon-text" className="icon-text">The Odin Shop</div>
        </Link>
          <div className="links-container">
            <Link to="/"  className="home-link">Home</Link>
            <Link to="/shop"  className="shop-link">Shop</Link>
            <a data-testid="cart-link" className="cart-link" href="/cart"><BsCart className='cart-icon' size='23px'/></a>
          </div>
        </nav>
    </>
  );
}

export default MainNavigation;