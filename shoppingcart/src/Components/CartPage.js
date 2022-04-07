import React from "react";
import '../Styles/CartPage.css';
import { FiTrash2 } from "react-icons/fi";

function CartPage({totalCost, setTotalCost, cartItems, setCartItems}) {
  function deleteCartItem(event) {
    const filtered = cartItems.filter((e, i) => {
      return i !== parseInt(event.target.dataset.id)
    })
    setCartItems(filtered);
  }
  const cartContent = cartItems.map((e, i) => {
    return (
        <div key={i} className="cart-item-container">
              <div className="cart-item-header-container">
                {e.category === 'apparel' && <div className="cart-item-header">{`${e.gender}'s ${e.color} ${e.theme} ${e.type}`}</div>}
                {e.category === 'accessory' && <div className="cart-item-header">{`${e.theme} ${e.type}`}</div>}

              </div>
              <div className="cart-item-image-container">
                <img className="cart-image" src={e.image} alt={`${e.gender}'s ${e.type}`}/>
              </div>
              <div className="cart-item-size-container">
                <div>{e.cartSize}</div>
              </div>
              <div className="cart-item-quantity-container">
                <div>Qt {e.cartQuantity}</div>
              </div>
              <div className="cart-item-price-container">
                <div className="cart-price">${e.cartQuantity * e.price}</div>
              </div>
              <div className="cart-item-delete-container" onClick={(event) => deleteCartItem(event)}>
                <div data-id={i} className="cart-delete"><FiTrash2 className="trash-svg"/></div>
              </div>
        </div>)
  })
  return (
      <>
        <div className="cart-container">
          <div className="cart-title">Cart</div>
          <div className="cart-content-container">
            {cartContent}
          </div>
        </div>
      </>
  );
}
export default CartPage