import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { menTees, womenTees } from './Data/Tee';
import { menHoodies, womenHoodies } from './Data/Hoodie';
import { accessories } from './Data/Accessory';
import Home from './Components/Home';
import odinIcon from './Assets/odinIcon.svg'
import {BsCart} from 'react-icons/bs'
import Shop from './Components/Shop';
import Men from './Components/Men';
import Women from './Components/Women';
import Accessories from './Components/Accessories';
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer';

function App(props) {

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
            <Link to="/shop"  className="shop-link">Shop</Link>
            <a data-testid="cart-link" className="cart-link" href="/cart"><BsCart className='cart-icon' size='23px'/></a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop menTees={menTees} womenTees={womenTees} menHoodies={menHoodies} womenHoodies={womenHoodies} accessories={accessories}/>} />
          <Route path="/shop/men" element={
            <>
              <div className="shop-container">
                <Sidebar/>
                <div className="shop-content-container">
                  <div className="shop-header">Odin's Store</div>
                  <div className="shop-content">
                      <Men menTees={menTees} menHoodies={menHoodies}/>
                  </div>
                </div>
              </div>
            </>}
          />

          <Route path="/shop/women" element={
            <>
              <div className="shop-container">
                <Sidebar/>
                <div className="shop-content-container">
                  <div className="shop-header">Odin's Store</div>
                  <div className="shop-content">
                    <Women womenTees={womenTees} womenHoodies={womenHoodies}/>
                  </div>
                </div>
              </div>
            </>}
          />
          
          <Route path="/shop/accessories" element={
            <>
              <div className="shop-container">
                <Sidebar/>
                <div className="shop-content-container">
                  <div className="shop-header">Odin's Store</div>
                  <div className="shop-content">
                    <Accessories accessories={accessories}/>
                  </div>
                </div>
              </div>
            </>}
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
