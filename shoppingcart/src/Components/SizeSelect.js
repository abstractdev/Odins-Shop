import React from 'react'
import '../Styles/SizeSelect.css'

function SizeSelect({size, setSize, handleSetSize}) {
  
  return (
    <>
      <div className="size-select-container">
        <select name="size" id="size" value={size} onChange={(event) => handleSetSize(event)}>
          <option value="size">Size</option>
          <option value="small">S</option>
          <option value="medium">M</option>
          <option value="large">L</option>
        </select>
      </div>
    </>
  );
}
export default SizeSelect