import './index.css'

// React + Gatsby
import React from 'react'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

// Components
import NavBar from '../pages/components/navbar'
import Footer from '../pages/components/footer'
import Popup from '../pages/components/popup'

// Images
import favicon from '../images/favicon.jpg'

class Layout extends React.Component {

  constructor(props){
    super(props)
    this.togglePopup = this.togglePopup.bind(this)
  }

  togglePopup (event) {
    event.preventDefault()
    let popup = document.getElementById('popup')
    popup.classList.toggle('show')
  }

  render () {
    return (
      <div id="main">
        <Helmet>
          <title>Bowie Internal Medicine Associates</title>
          <link rel='shortcut icon' href={favicon} sizes='16x16' />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,600" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Welcome to Bowie Internal Medicine Associates Website." />
        </Helmet>
        <NavBar />
        <div className="main-body">
          <div className="main-wrapper">
            {this.props.children()}
          </div>
          <div className="icon-bar">
            <a href="#" className="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="google">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
          <div className="popup-button" onClick={this.togglePopup}>
            <a href="#" className="question-circle">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </a>
          </div>
          <Popup />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
