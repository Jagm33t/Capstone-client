import { NavLink  } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Hamburger } from "../../assets/icons/menu-hamburger.svg"
import { Link } from "react-router-dom";

import './Navhead.scss'

function Navhead (){

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return(
    <nav className="navbar-body">
    <div className="navbar-container">
    {/* <h3>hello</h3> */}
      <div className="logo">
      <Link className='logonav' to="/">CardMute</Link>
      </div>
      <div>
        <button className='loginmobile'  >Login</button>
        <button className='signupmobile'>Signup</button>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
          <li>
            <NavLink to="/Signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navhead;