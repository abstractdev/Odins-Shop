import './App.css';
import { menTees, womenTees } from './Data/Tee';
import { menHoodies, womenHoodies } from './Data/Hoodie';
import { accesories } from './Data/Accessory';
import Header from './Components/Header';
import HomeContent from './Components/HomeContent/HomeContent';


function App() {
  return (
    <div className="App">
      <Header/>
      <HomeContent/>
    </div>
  );
}

export default App;
