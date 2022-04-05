import React from "react";
import '../Styles/Shop.css'

function Women({womenTees, womenHoodies}) {
  const allWomenTees = womenTees.map((e) => {
    return (
      <div key={e.id} className="women-tee">
        <li data-testid={e.id}>
          <div className="item-header-container">
            <div className="item-header">Women's Tee</div>
          </div>
          <div className="item-image-container">
            <img src={e.image} alt="women's tee"/>
          </div>
          <div className="item-price-container">
            <div className="item-price">{e.price.tee}</div>
          </div>
        </li>
      </div>)
  })
  const allWomenHoodies = womenHoodies.map((e) => {
    return (
      <div key={e.id} className="women-hoodie">
        <li data-testid={e.id}>
          <div className="item-header-container">
            <div className="item-header">Women's Hoodie</div>
          </div>
          <div className="item-image-container">
            <img src={e.image} alt="women's hoodie"/>
          </div>
          <div className="item-price-container">
            <div className="item-price">{e.price.hoodie}</div>
          </div>
        </li>
      </div>)
  })
  return (
    <>
      {allWomenTees}
      {allWomenHoodies}
    </>
  );
}

export default Women