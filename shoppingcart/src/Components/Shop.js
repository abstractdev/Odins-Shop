import React from "react";
import Men from "./Men";
import Women from "./Women";
import Accessories from "./Accessories";
import Sidebar from "./Sidebar";
import '../Styles/Shop.css'

function Shop({menTees, womenTees, menHoodies, womenHoodies, accessories}) {
  return (
    <>
      <div className="shop-container">
        <Sidebar/>
        <div className="shop-content-container">
          <div className="shop-header">Odin's Store</div>
          <div className="shop-content">
              <Men menTees={menTees} menHoodies={menHoodies}/>
              <Women womenTees={womenTees} womenHoodies={womenHoodies}/>
              <Accessories accessories={accessories}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop