// React + Gatsby
import React from 'react'
import Link from 'gatsby-link'

// Images
import logo from '../../images/BowieM_logo.png'

const NavBar = () => (
  <div style={{ margin: '0 0 25px 0', 
                width: '100%', 
                padding: '5px 0',
                background: '#9ec3ff'}}>
    <div>
      <a href="/">
        <img alt="Bowie Internal Medicine home" src={logo} />
      </a>
    </div>
    <Link to="/about/">About</Link>
  </div>
);

export default NavBar;
