import React from "react";
import Men from "./Men";
import Women from "./Women";
import Accessories from "./Accessories";
import '../Styles/Shop.css'

function Shop({menTees, womenTees, menHoodies, womenHoodies, accessories}) {
  return (
    <>
      <div className="shop-container">
          <Men menTees={menTees} menHoodies={menHoodies}/>
          <Women womenTees={womenTees} womenHoodies={womenHoodies}/>
          <Accessories accessories={accessories}/>
      </div>
    </>
  );
}
export default Shop