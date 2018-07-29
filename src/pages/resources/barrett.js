import React from 'react'
import Link from 'gatsby-link'

import SideNav from '../components/sidenav'
import homeimage from '../../images/home-page-image.jpg'

const Barrett = () => (
  <div className="service-content-resources">
    <SideNav />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Barrett's Esophagus</h1>		
      <p>
        Heartburn is a burning sensation felt behind the breastbone and 
        sometimes in the neck and throat. It is caused by stomach acid 
        refluxing or splashing up into the esophagus (the muscular tube 
        that connects the throat to the stomach).
        <br />
        <br />
        At the lower end of the esophagus where it enters the stomach, 
        there is a strong muscular ring called the Lower Esophageal Sphincter 
        (LES). The LES should remain tightly closed, except to allow food and 
        liquid to pass into the stomach. Heartburn occurs when the LES opens 
        at the wrong time. Almost everyone has this occasionally, and it is 
        nothing to be concerned about. However, heartburn that is severe or 
        that occurs over a long period of time can be harmful. This is known 
        as Gastroesophageal Reflux Disease (GERD). If GERD is untreated, there 
        is constant acid irritation to the lining of the esophagus, and 
        complications can occur. About 1 in 10 patients with GERD are also 
        found to have a condition called Barrett's esophagus. It can be serious 
        and may lead to cancer of the esophagus.
      </p>
      <h2 className="sub-topic">What is Barrett's Esophagus ?</h2>
    </div>
  </div>
)

export default Barrett
