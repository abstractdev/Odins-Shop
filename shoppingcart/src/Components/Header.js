import '../Styles/Header.css'
import odinIcon from '../Assets/odinIcon.svg'
import {BsCart} from 'react-icons/bs'

export default function Header() {
  return (
    <>
    <nav className="top-nav">
      <a className="icon-plus-text-container" href="/home">
        <div className="odin-icon-container">
          <img className='odin-icon' src={odinIcon} alt="svg"/>
        </div>
        <div className="icon-text">The Odin Shop</div>
      </a>
        <div className="links-container">
          <a className="home-link" href="/home">Home</a>
          <a className="shop-link" href="/shop">Shop</a>
          <a className="cart-link" href="/cart"><BsCart className='cart-icon' size='23px'/></a>
        </div>
    </nav>
    </>
  );
}