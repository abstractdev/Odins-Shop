import './App.css';
import { menTees, womenTees } from './Data/Tee';
import { menHoodies, womenHoodies } from './Data/Hoodie';
import { accesories } from './Data/Accessory';
import Header from './Components/Header';
import HomeContent from './Components/HomeContent/HomeContent';
import Shop from './Components/Shop/Shop';


function App(props) {
  return (
    <div className="App">
      <Header/>
      <Shop menTees={menTees} womenTees={womenTees} menHoodies={menHoodies} womenHoodies={womenHoodies} accesories={accesories}/>
      <HomeContent/>
    </div>
  );
}

export default App;
