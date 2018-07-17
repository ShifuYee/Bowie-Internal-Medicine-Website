// React + Gatsby
import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'

// Images
import logo from '../../images/BowieM_logo.png'

// Components
import Slider from '../components/slider'

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
          <Slider openSlideMenu={this.openSlideMenu} />
          <div className="logo">
            <Link to="/">
              <img alt="Bowie Internal Medicine home" src={logo} className="img-responsive" />
            </Link>
          </div>
          <div className="navbar-nav">
            <Link to="/about/">About Us</Link>
            <div className="dropdown">
              <button className="dropbtn">
                Services <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className="dropdown-content">
                <Link to="/services/upperendoscopy/">Upper Endoscopy</Link>
                <Link to="/services/capsuleendoscopy/">Capsule Endoscopy</Link>
                <Link to="/services/colonoscopy/">Colonoscopy</Link>
                <Link to="/services/hemorrhoidbanding/">Hemorrhoid Banding</Link>
              </div>
            </div>
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
          <div className="dropdown">
            <button className="dropbtn">
              Services <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="dropdown-content">
              <Link to="/services/upperendoscopy/">Upper Endoscopy</Link>
              <Link to="/services/capsuleendoscopy/">Capsule Endoscopy</Link>
              <Link to="/services/colonoscopy/">Colonoscopy</Link>
              <Link to="/services/hemorrhoidbanding/">Hemorrhoid Banding</Link>
            </div>
          </div>
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
