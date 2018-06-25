// React + Gatsby
import React from 'react'
import Link from 'gatsby-link'

// Images
import logo from '../../images/BowieM_logo.png'

// const NavBar = () => (
//   <div style={{ margin: '0 0 25px 0', 
//                 width: '100%', 
//                 padding: '5px 0',
//                 background: '#9ec3ff'}}>
//     <div className="logo">
//       <a href="/">
//         <img className="logo-img" alt="Bowie Internal Medicine home" src={logo} />
//       </a>
//     </div>
//     <div className="utility-links">
//       <ul className="menu-items">
//         <li>
//           <Link to="/about/">About Us</Link>
//         </li>
//         <li>
//           <Link to="/about/">For Patients</Link>
//         </li>
//         <li>
//           <Link to="/about/">Providers & Staff</Link>
//         </li>
//         <li>
//           <Link to="/about/">Resources</Link>
//         </li>
//         <li>
//           <Link to="/about/">Pay</Link>
//         </li>
//         <li>
//           <Link to="/about/">Portal</Link>
//         </li>
//         <li>
//           <Link to="/about/">Contact Us</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// );

const NavBar = () => (
  <div>
    <nav className="navbar">
      <span className="open-slide">
        <a href="#">
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
            <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
            <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
          </svg>
        </a>
      </span>

      <ul className="menu-items">
          <li>
            <Link to="/about/">About Us</Link>
          </li>
          <li>
            <Link to="/about/">For Patients</Link>
          </li>
          <li>
            <Link to="/about/">Providers & Staff</Link>
          </li>
          <li>
            <Link to="/about/">Resources</Link>
          </li>
          <li>
            <Link to="/about/">Pay</Link>
          </li>
          <li>
            <Link to="/about/">Portal</Link>
          </li>
          <li>
            <Link to="/about/">Contact Us</Link>
          </li>
        </ul>
    </nav>

    <div id="side-menu" className="side-nav">
      <a href="#" className="btn-close">&times;</a>
      <Link to="/about/">About Us</Link>
      <Link to="/about/">For Patients</Link>
      <Link to="/about/">Providers & Staff</Link>
      <Link to="/about/">Resources</Link>
      <Link to="/about/">Pay</Link>
      <Link to="/about/">Portal</Link>
      <Link to="/about/">Contact Us</Link>
    </div>
  </div>
);

export default NavBar;
