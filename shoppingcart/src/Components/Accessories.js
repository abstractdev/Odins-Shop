import React from "react";
import '../Styles/Shop.css'

function Accessories({accessories}) {
  const allAccessories = accessories.map((e, index) => {
    return (
      <div key={e.id} className="accessory">
        <li data-testid={e.id}>
          <div className="item-header-container">
            <div className="item-header">{e.type}</div>
          </div>
          <div className="item-image-container">
            <img src={e.image} alt="accessory"/>
          </div>
          <div className="item-price-container">
            <div className="item-price">{e.price}</div>
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