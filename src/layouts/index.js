import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Bowie-Internal-Medicine-Website"
    />
    <div className="main-wrapper">
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
