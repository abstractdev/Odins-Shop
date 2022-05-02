import React from "react";
import "../Styles/CartPage.css";
import { FiTrash2 } from "react-icons/fi";
import MainButton from "./MainButton";

function CartPage({ cartItems, setCartItems, theme }) {
  const text = "Checkout";
  function deleteCartItem(event) {
    const filtered = cartItems.filter((e, i) => {
      return i !== parseInt(event.target.dataset.id);
    });
    setCartItems(filtered);
  }

  function getCartTotalPrice() {
    const cartTotalPrice = cartItems
      .map((e) => e.price)
      .reduce((acc, cv) => {
        return acc + cv;
      }, 0);
    return `$${cartTotalPrice}`;
  }
  const cartContent = cartItems.map((e, i) => {
    return (
      <div key={i} className="cart-item-container">
        <div className="cart-item-image-container">
          <img
            className="cart-image"
            src={e.image}
            alt={`${e.gender}'s ${e.type}`}
          />
        </div>
        <div className="cart-info">
          <div className="cart-left">
            <div className="cart-item-header-container">
              {e.category === "apparel" && (
                <div className="cart-item-header">{`${e.gender}'s ${e.color} ${e.theme} ${e.type}`}</div>
              )}
              {e.category === "accessory" && (
                <div className="cart-item-header">{`${e.theme} ${e.type}`}</div>
              )}
            </div>
            <div className="cart-item-size-container">
              <div>{e.cartSize}</div>
            </div>
            <div className="cart-item-quantity-container">
              <div>Qt {e.cartQuantity}</div>
            </div>
          </div>
          <div className="cart-right">
            <div className="cart-item-price-container">
              <div className="cart-price">${e.cartQuantity * e.price}</div>
            </div>
            <div
              className="cart-item-delete-container"
              onClick={(event) => deleteCartItem(event)}
            >
              <div data-id={i} className="cart-delete">
                <FiTrash2 className="trash-svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="cart-container" data-theme={theme}>
        <div className="cart-title">Cart</div>
        <div className="cart-content-container">
          {cartContent}
          {cartItems.length > 0 && (
            <div className="checkout-container">
              <form className="checkout-form">
                <div className="checkout-form-container">
                  <div className="checkout-total-container">
                    <div className="checkout-total">Total: </div>
                  </div>
                  <div className="checkout-total-value">
                    {getCartTotalPrice()}
                  </div>
                  <div className="checkout-shipping-container">
                    <div className="checkout-shipping">Shipping</div>
                  </div>
                  <div className="checkout-shipping-value">$5</div>
                  <div className="checkout-button-container">
                    <MainButton text={text} style={{ pointerEvents: "none" }} />
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CartPage;
