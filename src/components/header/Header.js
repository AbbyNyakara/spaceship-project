import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

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
      <div className="navbar">
        <p className='nav-link'><Link className='links' to='/'>Rockets</Link></p>
        <p className='nav-link'><Link className='links' to='/missions'>Missions</Link></p>
        <p className='nav-link'><Link className='links' to='/profile'>My Profile</Link></p>
      </div>
    </div>  
  )
}

export default Header