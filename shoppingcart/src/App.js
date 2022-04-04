import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { menTees, womenTees } from './Data/Tee';
import { menHoodies, womenHoodies } from './Data/Hoodie';
import { accesories } from './Data/Accessory';
import Home from './Components/Home';
import odinIcon from './Assets/odinIcon.svg'
import {BsCart} from 'react-icons/bs'
import Shop from './Components/Shop';

function App(props) {

  const [shopClicked, setShopClicked] = useState(false)

  function handleShopClick() {
    setShopClicked(true)
  }


  return (
    <>
      <BrowserRouter>
        <nav className="top-nav">
        <Link to="/" className="icon-plus-text-container">
          <div className="odin-icon-container">
            <img className='odin-icon' src={odinIcon} alt="icon"/>
          </div>
          <div data-testid="icon-text" className="icon-text">The Odin Shop</div>
        </Link>
          <div className="links-container">
            <Link to="/"  className="home-link">Home</Link>
            <a className="shop-link" href="/shop" onClick={() => handleShopClick()}>Shop</a>
            <a data-testid="cart-link" className="cart-link" href="/cart"><BsCart className='cart-icon' size='23px'/></a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop menTees={menTees} womenTees={womenTees} menHoodies={menHoodies} womenHoodies={womenHoodies} accessories={accesories}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
