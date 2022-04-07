import React from "react";
import SizeSelect from "./SizeSelect";
import QuantityCounter from "./QuantityCounter";
import AddCartButton from "./AddCartButton";
import '../Styles/DetailsForm.css'
import '../Styles/AddCartButton.css'

function DetailsForm({detailsItem, size, setSize, quantity, setQuantity, cartItems, setCartItems, handleSetSize, handleSetQuantity}) {
  console.log(cartItems);
  function handleOnSubmit(event) {
    console.log(event.target.elements);
    event.preventDefault();
    if (event.target.elements[0].value ==='size') {
      alert('error')
      return
    }
    if (!event.target.elements[1].value) {
      alert('error')
      return
    }
    if (event.target.elements[1].value > 100) {
      alert('error')
      return
    }

    setCartItems([...cartItems, {cartSize: size, cartQuantity: quantity, ...detailsItem}])
  }

  return (
      <form className="DetailsForm" onSubmit={(event)=> handleOnSubmit(event)}>
        <div className="details-bottom-container">
          <div className="size-quantity-container">
            <SizeSelect size={size} setSize={setSize} handleSetSize={handleSetSize}/>
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