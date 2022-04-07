import React from 'react';
import { NavLink } from 'react-router-dom';
import {BsCart} from 'react-icons/bs'
import '../Styles/Cart.css'

function Cart() {

  return (
    <>
      <NavLink to="/cart" data-testid="cart-link" className="cart-link"><BsCart className='cart-icon' size='23px'/></NavLink>
    </>
  );
}
export default Cart