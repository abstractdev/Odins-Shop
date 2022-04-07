import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'

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