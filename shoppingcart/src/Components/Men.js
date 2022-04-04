import React from "react";
import '../Styles/Shop.css'

function Men({menTees, menHoodies}) {
  const allMenTees = menTees.map((e, index) => {
    return (
      <div key={`mTee${index}`}className="men-tee">
        <li data-testid={`mTee${index}`}>
          <div className="item-header-container">
            <div className="item-header">Men's Tee</div>
          </div>
          <div className="item-image-container">
            <img src={e.image} alt="men's tee"/>
          </div>
          <div className="item-price-container">
            <div className="item-price">{e.price.tee}</div>
          </div>
        </li>
      </div>)
  })
  const allMenHoodies = menHoodies.map((e, index) => {
    return (
      <div key={`mHoodie${index}`} className="men-hoodie">
        <li data-testid={`mHoodie${index}`}>
          <div className="item-header-container">
            <div className="item-header">Men's Hoodie</div>
          </div>
          <div className="item-image-container">
            <img src={e.image} alt="men's hoodie"/>
          </div>
          <div className="item-price-container">
            <div className="item-price">{e.price.hoodie}</div>
          </div>
        </li>
      </div>)
  })
  return (
    <>
      {allMenTees}
      {allMenHoodies}
    </>
  );
}

export default Men