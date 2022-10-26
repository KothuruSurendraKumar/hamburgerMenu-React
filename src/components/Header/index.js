// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <nav className="navbar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button testid="hamburgerIconButton">
          <GiHamburgerMenu />
        </button>
      }
      className="pop-content"
      overlayStyle={overlayStyles}
    >
      {close => (
        <div className="main-popup">
          <button
            testid="closeButton"
            type="button"
            className="closeicon"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>

          <ul className="lists">
            <li>
              <Link to="/" className="nav-link">
                <AiFillHome />
                <h1 className="home-but">Home</h1>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <BsInfoCircleFill />
                <h1 className="home-but">About</h1>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)
export default Header
