// React + Gatsby
import React from 'react'


const Slider = ({openSlideMenu}) => (
  <div className="nav-drawer">
    <span className="open-slide">
      <a href="#" onClick={openSlideMenu}>
        <svg width="30" height="30">
          <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
          <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
          <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
        </svg>
      </a>
    </span>
  </div>
)

export default Slider
