import React from 'react'
import Link from 'gatsby-link'

import homeimage from '../../images/home-page-image.jpg'

const ClearLiquidDiet = () => (
  <div className="service-content">
    <img alt="Home Page Image" src={homeimage} className="img-responsive" />
    <h1 className="main-subject">Clear Liquid Diet</h1>
    <h2 className="sub-topic">Purpose</h2>	
    <p>
      A diet of clear liquids gives some energy and maintains vital body 
      fluids, salts, and minerals when normal food intake is interrupted. 
      Clear liquids are easily absorbed by the body. They reduce stimulation 
      of the digestive system, and leave no residue in the intestinal tract. 
      This is why a clear liquid diet is often recommended in preparation 
      for surgery, and is generally the first diet given by mouth after 
      surgery. Clear liquids are given when a person has been without food 
      by mouth (NPO) for a long time. This diet is also used in preparation 
      for medical procedures such as sigmoidoscopy, colonoscopy, or certain 
      x-rays.
    </p>
    <h2 className="sub-topic">Nutrition Facts</h2>
  </div>
)

export default ClearLiquidDiet
