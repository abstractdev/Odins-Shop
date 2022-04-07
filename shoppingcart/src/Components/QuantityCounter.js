import React from 'react'
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import '../Styles/QuantityCounter.css'

function QuantityCounter({quantity, setQuantity, handleSetQuantity}) {

  return (
    <>
      <div className="counter-container">
          <div className="minus-input-plus-container">
            <div className="minus-container"onClick={(event) => {handleSetQuantity(event)}}>
                <FiMinusSquare className='minus'/>
            </div>
            <div className="input-container">
              <input type="number" name="quantity" id="quantity" min="1" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))}/>
            </div>
            <div className="plus-container" onClick={(event) => {handleSetQuantity(event)}}>
                <FiPlusSquare className='plus'/>
            </div>
          </div>
      </div>
    </>
  );
}
export default QuantityCounter
