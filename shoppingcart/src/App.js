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
  const [menOdinTeeBlue, setMenOdinTeeBlue] = useState(menTees[0]);
  const [menOdinTeeGray, setMenOdinTeeGray] = useState(menTees[1]);
  const [menOdinTeeRed, setMenOdinTeeRed] = useState(menTees[2]);
  const [menOdinTeeWhite, setMenOdinTeeWhite] = useState(menTees[3]);
  const [menRubyTeeWhite, setMenRubyTeeWhite] = useState(menTees[4]);
  const [menJsTeeWhite, setMenJsTeeWhite] = useState(menTees[5]);
  const [womenOdinTeePink, setWomenOdinTeePink] = useState(womenTees[0]);
  const [womenOdinTeePurple, setWomenOdinTeePurple] = useState(womenTees[1]);
  const [womenOdinTeeYellow, setWomenOdinTeeYellow] = useState(womenTees[2]);
  const [womenOdinTeeWhite, setWomenOdinTeeWhite] = useState(womenTees[3]);
  const [womenRubyTeeWhite, setWomenRubyTeeWhite] = useState(womenTees[4]);
  const [womenJsTeeWhite, setWomenJsTeeWhite] = useState(womenTees[5]);
  const [menOdinHoodieBlue, setMenOdinHoodieBlue] = useState(menHoodies[0]);
  const [menOdinHoodieGray, setMenOdinHoodieGray] = useState(menHoodies[1]);
  const [menOdinHoodieRed, setMenOdinHoodieRed] = useState(menHoodies[2]);
  const [womenOdinHoodiePink, setWomenOdinHoodiePink] = useState(womenHoodies[0]);
  const [womenOdinHoodiePurple, setWomenOdinHoodiePurple] = useState(womenHoodies[1]);
  const [womenOdinHoodieYellow, setWomenOdinHoodieYellow] = useState(womenHoodies[2]);
  const [womenOdinHoodieWhite, setWomenOdinHoodieWhite] = useState(womenHoodies[3]);
  const [odinCase1, setOdinCase1] = useState(accessories[0]);
  const [odinCase2, setOdinCase2] = useState(accessories[1]);
  const [odinMug, setodinMug] = useState(accessories[2]);
  const [odinPillow, setodinPillow] = useState(accessories[3]);
  const [odinStickers, setOdinStickers] = useState(accessories[4]);
  const [odinTote, setOdinTote] = useState(accessories[5]);
  const allStates = [
    totalCost,
    menOdinTeeBlue,
    menOdinTeeGray,
    menOdinTeeRed,
    menOdinTeeWhite,
    menRubyTeeWhite,
    menJsTeeWhite,
    womenOdinTeePink,
    womenOdinTeePurple,
    womenOdinTeeYellow,
    womenOdinTeeWhite,
    womenRubyTeeWhite,
    womenJsTeeWhite,
    menOdinHoodieBlue,
    menOdinHoodieGray,
    menOdinHoodieRed,
    womenOdinHoodiePink,
    womenOdinHoodiePurple,
    womenOdinHoodieYellow,
    womenOdinHoodieWhite,
    odinCase1,
    odinCase2,
    odinMug,
    odinPillow,
    odinStickers,
    odinTote
  ]

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

  // function handleCounterClick() {

  // }
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
          <Route path="/shop/men/:id" element={<>{createCategorizedPage("", <Details allStates={allStates}/>)}</>}/>
          <Route path="/shop/women/:id" element={<>{createCategorizedPage("", <Details allStates={allStates}/>)}</>}/>
          <Route path="/shop/accessories/:id" element={<>{createCategorizedPage("", <Details allStates={allStates}/>)}</>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
