import React from 'react';
import { NavLink } from 'react-router-dom';
import {BsCart} from 'react-icons/bs'
import '../Styles/Cart.css'

function Cart({cartItems}) {

  function getCartQuantity() {
    const cartItemsQuantity = cartItems.map((e) => e.cartQuantity)
    const cartQuantity = cartItemsQuantity.reduce((acc, cv) => {
      return acc + cv
    }, 0);
    return cartQuantity
  }


  return (
    <>
      <NavLink to="/cart" data-testid="cart-link" className="cart-link">
        <div className="cart-icon-container">
          <BsCart className='cart-icon' size='23px'/>
          <div className="cart-number">{cartItems.length > 0 && getCartQuantity()}</div>
        </div>
      </NavLink>
    </>
  );
}
export default Cart