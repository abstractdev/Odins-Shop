import React from "react";
import '../Styles/Shop.css'

function Men({menTees, menHoodies}) {
  const allMenTees = menTees.map((e) => {
    return (
      <div key={e.id}className="men-tee">
        <li data-testid={e.id}>
          <div className="item-header-container">
            <div className="item-header">Men's Tee</div>
          </div>
          <div className="item-image-container">
            <img src={e.image} alt="men's tee"/>
          </div>
          <div className="item-price-container">
            <div className="item-price">{e.price}</div>
          </div>
        </li>
      </div>)
  })
  const allMenHoodies = menHoodies.map((e) => {
    return (
      <div key={e.id} className="men-hoodie">
        <li data-testid={e.id}>
          <div className="item-header-container">
            <div className="item-header">Men's Hoodie</div>
          </div>
          <div className="item-image-container">
            <img src={e.image} alt="men's hoodie"/>
          </div>
          <div className="item-price-container">
            <div className="item-price">{e.price}</div>
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