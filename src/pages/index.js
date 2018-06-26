// React + Gatsby
import React from 'react'
import Link from 'gatsby-link'

// Components

// Images
import homeimage from '../images/home-page-image.jpg'

const HomePage = () => (
  <div>
    <div className="home-body">
      <h1>Latest News</h1>
    </div>
    <img alt="Home Page Image" src={homeimage} />
    <div className="home-body">
      <h1>Bowie Internal Medicine Associates</h1>
      <p>
        Bowie Internal Medicine is a group of four physicians 
        and two certified nurse practitioners specializing in 
        gastrointestinal, adolescent, adult, and geriatric medicine. 
        We have been serving the community for over 40 years for 
        all general medical and many minor surgical and 
        gynecological problems.
      </p>
    </div>
  </div>
);

export default HomePage;
