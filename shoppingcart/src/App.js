import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { menTees, womenTees } from './Data/Tee';
import { menHoodies, womenHoodies } from './Data/Hoodie';
import { accessories } from './Data/Accessory';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Men from './Components/Men';
import Women from './Components/Women';
import Accessories from './Components/Accessories';
import MainNavigation from './Components/MainNavigation';
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer';
import Details from './Components/Details';

function App(props) {
  const [totalCost, setTotalCost] = useState(0);
  const [items, setitems] = useState([...menTees, ...womenTees, ...menHoodies, ...womenHoodies, ...accessories])

  function createCategorizedPage(header, category) {
    return(
      <div className="shop-container">
        <Sidebar/>
        <div className="shop-content-container">
          <div className="shop-header">{header}</div>
          <div className="shop-content">
            {category}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <BrowserRouter>
        <MainNavigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop menTees={menTees} womenTees={womenTees} menHoodies={menHoodies} womenHoodies={womenHoodies} accessories={accessories}/>} />
          <Route path="/shop/men" element={<>{createCategorizedPage("Men", <Men menTees={menTees} menHoodies={menHoodies}/>)}</>}/>
          <Route path="/shop/women" element={<>{createCategorizedPage("Women", <Women womenTees={womenTees} womenHoodies={womenHoodies}/>)}</>}/>
          <Route path="/shop/accessories" element={<>{createCategorizedPage("Accessories", <Accessories accessories={accessories}/>)}</>}/>
          <Route path="/shop/men/:id" element={<>{createCategorizedPage("", <Details items={items}/>)}</>}/>
          <Route path="/shop/women/:id" element={<>{createCategorizedPage("", <Details items={items}/>)}</>}/>
          <Route path="/shop/accessories/:id" element={<>{createCategorizedPage("", <Details items={items}/>)}</>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
