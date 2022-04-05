import '../Styles/Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="Home">
      <Link to="/shop"><button className="enter">Enter</button></Link>
    </div>
    </>
  );
}
export default Home