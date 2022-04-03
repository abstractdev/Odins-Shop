import '../Styles/Header.css'
import odinIcon from '../Images/odinIcon.svg'

export default function Header() {
  return (
    <>
    <nav className="top-nav">
      <div className="icon-plus-text-container">
        <div className="odin-icon-container">
          <img className='odin-icon' src={odinIcon} alt="svg"/>
        </div>
        <div className="icon-text">The Odin Shop</div>
      </div>
    </nav>
    </>
  );
}