import React from 'react'
import '../Styles/SizeSelect.css'

function SizeSelect() {
  return (
    <>
      <form className="form">
        <div className="size-container">
          <div className="size-label-container">
            <label htmlFor="size">Size</label>
          </div>
          <div className="size-select-container">
            <select name="size" id="size">
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
}
export default SizeSelect