// React + Gatsby
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFax, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer>
    <div className="contact-info">
      <h3><FontAwesomeIcon icon={faPhone} /> Phone: (301) 262-8188</h3>
      <h3><FontAwesomeIcon icon={faFax} /> Fax: (301) 464-8233</h3>
      <h3>
        <FontAwesomeIcon icon={faLocationArrow} /> 14999 Health Center Drive, Suite 201 Bowie, Maryland 20716
      </h3>
    </div>
    <div className="contact-info">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe width="400" 
            height="400" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=bowie%20medicine&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
