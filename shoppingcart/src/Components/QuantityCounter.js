import React from 'react'
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import '../Styles/QuantityCounter.css'

function QuantityCounter() {
  return (
    <>
      <div className="counter-container">
        <div className="minus-container">
          <FiMinusSquare className='minus'/>
        </div>
        <input type="text" name="quantity" id="quantity" />
        <div className="plus-container">
          <FiPlusSquare className='plus'/>
        </div>
      </div>
    </>
  );
}
export default QuantityCounter
