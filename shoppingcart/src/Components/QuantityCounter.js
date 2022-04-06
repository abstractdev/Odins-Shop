import React from 'react'
import { useState } from 'react';
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import '../Styles/QuantityCounter.css'

function QuantityCounter() {
  const [quantity, setQuantity] = useState(1)

function handleClickQuantity(event) {
  if (event.target.className === 'minus-container') {
    if (quantity === 1) {
      return
    } else {
      setQuantity(quantity - 1)
    }
  }else if(event.target.className === 'plus-container'){
    setQuantity(quantity + 1)
  }
}

  return (
    <>
      <div className="counter-container">
        <div className="minus-container"onClick={(event) => {handleClickQuantity(event)}}>
            <FiMinusSquare className='minus'/>
        </div>
        <input type="number" name="quantity" id="quantity" min="1" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))}/>
        <div className="plus-container" onClick={(event) => {handleClickQuantity(event)}}>
            <FiPlusSquare className='plus'/>
        </div>
      </div>
    </>
  );
}
export default QuantityCounter
