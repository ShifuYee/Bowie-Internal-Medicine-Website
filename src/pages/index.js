// React + Gatsby
import React from 'react'
import Link from 'gatsby-link'

// Components

// Images
import homeimage from '../images/home-page-image.jpg'

const HomePage = () => (
  <div>
    <div>
      <h1>Latest News</h1>
    </div>
    <div>
      <img alt="Home Page Image" src={homeimage} />
    </div>
    <h1>Bowie Internal Medicine Associates</h1>
  </div>
);

export default HomePage;
