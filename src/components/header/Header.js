import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import Navigation from '../Navigation';

function Header() {
  return (
    <div className="header-section">

      {/* logo section */}
      <div className="logo">
        <Link to="/" className='logo-section'>
          <img src="./images/planet.png" alt="" />
        </Link>
        
        <div className="logo-text">
          <h2>Space Travellers' Hub</h2>
        </div>
      </div>

      {/* Nav section  */}
      <div>
        <Navigation />     
      </div>
    </div>  
  )
}

export default Header