// React + Gatsby
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFax, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-row">
        <div className="col-md-6">
          <div className="contact-info">
            <h3><FontAwesomeIcon icon={faPhone} /> Phone: (301) 262-8188</h3>
            <h3><FontAwesomeIcon icon={faFax} /> Fax: (301) 464-8233</h3>
            <h3><FontAwesomeIcon icon={faLocationArrow} /> 14999 Health Center Drive, Suite 201 Bowie, Maryland 20716</h3>
          </div>
        </div>
        <div className="col-md-6">
          <iframe width="80%"
            height="400"
            src="https://maps.google.com/maps?q=bowie%20medicine&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;
