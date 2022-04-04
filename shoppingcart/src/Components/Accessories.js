import React from "react";
import '../Styles/Shop.css'

function Accessories({accessories}) {
  const allAccessories = accessories.map((e, index) => {
    return (
      <div key={`accessory${index}`} className="accessory">
        <li data-testid={`accessory${index}`}>
          <div className="item-image-container">
            <img src={e.image} alt="accessory"/>
          </div>
        </li>
      </div>)
  })
  return (
    <>
      {allAccessories}
    </>
  );
}

export default Accessories