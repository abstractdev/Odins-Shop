import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DetailsForm from "./DetailsForm";
import '../Styles/Details.css';

function Details({items, size, setSize, quantity, setQuantity, cartItems, setCartItems, handleSetSize, handleSetQuantity}) {
  let {id} = useParams();
  //find the item by matching the useparams id and the iteam id
  const selectedItem = items.filter((element) => {
    return element.id === id
  });
  //set a state variable equal to the item
  const [detailsItem, setDetailsItem] = useState(selectedItem[0])
  //display the item
  return (
      <>
        {console.log(cartItems)}
        <div className="details-content">
          {detailsItem.category === 'accessory' ?
          <h1 className="details-header">{`${detailsItem.theme} ${detailsItem.type}`}</h1> :
          <h1 className="details-header">{`${detailsItem.gender}'s ${detailsItem.color} ${detailsItem.theme} ${detailsItem.type}`}</h1>}
          <div className="details-image-container">
            <img src={detailsItem.image} alt="item"/>
          </div>
          <div className="details-bottom-container">
            <DetailsForm detailsItem={detailsItem} setDetailsItem={setDetailsItem} size={size} setSize={setSize} quantity={quantity} setQuantity={setQuantity} cartItems={cartItems} setCartItems={setCartItems} handleSetSize={handleSetSize} handleSetQuantity={handleSetQuantity}/>
          </div>
        </div>
      </>
  );
}
export default Details