import React from "react";
import '../Styles/Shop.css'

function Men({menTees, menHoodies}) {
  const allMenTees = menTees.map((e, index) => {
    return (
      <div key={`mTee${index}`}className="men-tee">
        <li data-testid={`mTee${index}`}>
          <div className="item-image-container">
            <img src={e.image} alt="men's tee"/>
          </div>
        </li>
      </div>)
  })
  const allMenHoodies = menHoodies.map((e, index) => {
    return (
      <div key={`mHoodie${index}`} className="men-hoodie">
        <li data-testid={`mHoodie${index}`}>
          <div className="item-image-container">
            <img src={e.image} alt="men's hoodie"/>
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