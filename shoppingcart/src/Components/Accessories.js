import React from "react";
import '../Styles/Shop.css'

function Accessories({accessories}) {
  const allAccessories = accessories.map((e, index) => {
    let price;
    switch (e.type) {
      case 'case': price = e.price.case;
        break;
      case 'mug': price = e.price.mug;
        break;
      case 'pillow': price = e.price.pillow;
        break;
      case 'sticker': price = e.price.sticker;
        break;
      case 'tote': price = e.price.tote;
        break;
      default:
        break;
    }
    return (
      <div key={`accessory${index}`} className="accessory">
        <li data-testid={`accessory${index}`}>
          <div className="item-header-container">
            <div className="item-header">{e.type}</div>
          </div>
          <div className="item-image-container">
            <img src={e.image} alt="accessory"/>
          </div>
          <div className="item-price-container">
            <div className="item-price">{price}</div>
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