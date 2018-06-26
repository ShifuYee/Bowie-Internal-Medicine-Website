import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

// Components
import NavBar from '../pages/components/navbar'
import Footer from '../pages/components/footer'

// Images
import favicon from '../images/favicon.jpg'

const Layout = ({ children }) => (
  <div id="main">
    <Helmet>
      <title>Bowie Internal Medicine Website</title>
      <script src="https://maps.googleapis.com/maps/api/js?callback=myMap" />
      <link rel='shortcut icon' href={favicon} sizes='16x16' />
    </Helmet>
    <div>
      <NavBar />
      <div className="main-wrapper">
        {children()}
      </div>
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
