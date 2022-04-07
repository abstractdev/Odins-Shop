import React from "react";
import SizeSelect from "./SizeSelect";
import QuantityCounter from "./QuantityCounter";
import AddCartButton from "./AddCartButton";
import '../Styles/DetailsForm.css'
import '../Styles/AddCartButton.css'

function DetailsForm({detailsItem, size, setSize, quantity, setQuantity, cartItems, setCartItems, handleSetSize, handleSetQuantity}) {

  function handleSetCartItems() {
    if (detailsItem.category === 'apparel') {
      return [...cartItems, {cartSize: size, cartQuantity: quantity, ...detailsItem}]
    }
    else if (detailsItem.category === 'accessory') {
      return [...cartItems, {cartQuantity: quantity, ...detailsItem}]
    }
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    //prevent submit without selecting size
    if (event.target.elements.length === 3 && event.target.elements[0].value ==='size') {
      alert('Error')
      return
    }
    //prevent submit with empty quantity
    if (event.target.elements.length === 3 && !event.target.elements[1].value) {
      alert('Error')
      return
    }
    //prevent apparel submit with quantity > 100
    if (event.target.elements.length === 3 && event.target.elements[1].value > 100) {
      alert('Error')
      return
    }
    //prevent accessory submit with quantity > 100
    if (event.target.elements.length === 2 && event.target.elements[0].value > 100) {
      alert('Error')
      return
    }
    setCartItems(handleSetCartItems())
  }

  return (
      <form className="DetailsForm" onSubmit={(event)=> handleOnSubmit(event)}>
        <div className="details-bottom-container">
          <div className="size-quantity-container">
            {detailsItem.category === 'apparel' &&
            <SizeSelect size={size} setSize={setSize} handleSetSize={handleSetSize}/>}
            <QuantityCounter quantity={quantity} setQuantity={setQuantity} detailsItem={detailsItem} handleSetQuantity={handleSetQuantity}/>
          </div>
          <div className="add-cart-button-container">
          <AddCartButton/>
          </div>
        </div>
      </form>
  );
}
export default DetailsForm