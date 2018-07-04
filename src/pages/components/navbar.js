// React + Gatsby
import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Images
import logo from '../../images/BowieM_logo.png'

class NavBar extends React.Component {

  constructor(props){
    super(props)
    this.openSlideMenu = this.openSlideMenu.bind(this)
    this.closeSlideMenu = this.closeSlideMenu.bind(this)
  }

  openSlideMenu (e) {
    e.preventDefault()
    document.getElementById('side-menu').style.width = '250px'
    document.getElementById('main').style.marginLeft = '250px'
  }

  closeSlideMenu (e) {
    e.preventDefault()
    document.getElementById('side-menu').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
  }

  render () {
    return (
      <div className="main-nav">
        <nav className="navbar">
          <div className="nav-drawer">
            <span className="open-slide">
              <Link href="#" onClick={this.openSlideMenu}>
                <svg width="30" height="30">
                  <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
                  <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
                  <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
                </svg>
              </Link>
            </span>
          </div>
          <div className="logo">
            <Link to="/">
              <img alt="Bowie Internal Medicine home" src={logo} className="img-responsive" />
            </Link>
          </div>
          <div className="navbar-nav">
            <Link to="/about/">About Us</Link>
            <Link to="/patients/">For Patients</Link>
            <Link to="/providersandstaff/">Providers & Staff</Link>
            <Link to="/resources/">Resources</Link>
            <Link to="/pay/">Pay</Link>
            <Link to="/portal/">Portal</Link>
            <Link to="/contactus/">Contact Us</Link>
          </div>
          <div className="search-container">
            <form action="#">
              <input type="text" placeholder="Search..." name="search" />
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </nav>

        <div id="side-menu" className="side-nav">
          <a href="#" className="btn-close" onClick={this.closeSlideMenu}>
            &times;
          </a>
          <Link to="/">Home</Link>
          <Link to="/about/">About Us</Link>
          <Link to="/patients/">For Patients</Link>
          <Link to="/providersandstaff/">Providers & Staff</Link>
          <Link to="/resources/">Resources</Link>
          <Link to="/pay/">Pay</Link>
          <Link to="/portal/">Portal</Link>
          <Link to="/contactus/">Contact Us</Link>
        </div>
      </div>
    )
  }
}

export default NavBar
