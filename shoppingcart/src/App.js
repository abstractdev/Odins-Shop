import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { menTees, womenTees } from "./Data/Tee";
import { menHoodies, womenHoodies } from "./Data/Hoodie";
import { accessories } from "./Data/Accessory";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Accessories from "./Components/Accessories";
import MainNavigation from "./Components/MainNavigation";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import CartPage from "./Components/CartPage";
import MobileSidebar from "./Components/MobileSidebar";

function App(props) {
  const [totalCost, setTotalCost] = useState(0);
  const [items, setItems] = useState([
    ...menTees,
    ...womenTees,
    ...menHoodies,
    ...womenHoodies,
    ...accessories,
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mobileSidebarIsOpen, setMobileSidebarIsOpen] = useState(false);

  function toggleMobileSidebar() {
    setMobileSidebarIsOpen(!mobileSidebarIsOpen);
  }

  function createCategorizedPage(header, category) {
    return (
      <div className="shop-container">
        <Sidebar />
        <div className="shop-content-container">
          <div className="shop-header">{header}</div>
          <div className="shop-content">{category}</div>
        </div>
      </div>
    );
  }

  function handleSetSize(event) {
    setSize(event.target.value);
  }

  function handleSetQuantity(event) {
    if (event.target.className === "minus-container") {
      if (quantity === 1) {
        return;
      } else {
        setQuantity(quantity - 1);
      }
    } else if (event.target.className === "plus-container") {
      setQuantity(quantity + 1);
    }
  }
  return (
    <>
      <MainNavigation
        cartItems={cartItems}
        toggleMobileSidebar={toggleMobileSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              menTees={menTees}
              womenTees={womenTees}
              menHoodies={menHoodies}
              womenHoodies={womenHoodies}
              accessories={accessories}
            />
          }
        />
        <Route
          path="/shop/men"
          element={
            <>
              {createCategorizedPage(
                "Men",
                <Men menTees={menTees} menHoodies={menHoodies} />
              )}
            </>
          }
        />
        <Route
          path="/shop/women"
          element={
            <>
              {createCategorizedPage(
                "Women",
                <Women womenTees={womenTees} womenHoodies={womenHoodies} />
              )}
            </>
          }
        />
        <Route
          path="/shop/accessories"
          element={
            <>
              {createCategorizedPage(
                "Accessories",
                <Accessories accessories={accessories} />
              )}
            </>
          }
        />
        <Route
          path="/shop/men/:id"
          element={
            <>
              {createCategorizedPage(
                "",
                <Details
                  items={items}
                  size={size}
                  setSize={setSize}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  handleSetSize={handleSetSize}
                  handleSetQuantity={handleSetQuantity}
                />
              )}{" "}
            </>
          }
        />
        <Route
          path="/shop/women/:id"
          element={
            <>
              {createCategorizedPage(
                "",
                <Details
                  items={items}
                  size={size}
                  setSize={setSize}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  handleSetSize={handleSetSize}
                  handleSetQuantity={handleSetQuantity}
                />
              )}
            </>
          }
        />
        <Route
          path="/shop/accessories/:id"
          element={
            <>
              {createCategorizedPage(
                "",
                <Details
                  items={items}
                  size={size}
                  setSize={setSize}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  handleSetSize={handleSetSize}
                  handleSetQuantity={handleSetQuantity}
                />
              )}
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <div className="main-container">
                <Sidebar />
                <CartPage
                  totalCost={totalCost}
                  setTotalCost={setTotalCost}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              </div>
            </>
          }
        />
      </Routes>
      <Footer />
      {mobileSidebarIsOpen ? (
        <div className="modal-container show">
          <MobileSidebar
            mobileSidebarIsOpen={mobileSidebarIsOpen}
            setMobileSidebarIsOpen={setMobileSidebarIsOpen}
          />
        </div>
      ) : (
        <div className="modal-container hide">
          <MobileSidebar
            mobileSidebarIsOpen={mobileSidebarIsOpen}
            setMobileSidebarIsOpen={setMobileSidebarIsOpen}
          />
        </div>
      )}
    </>
  );
}

export default App;
