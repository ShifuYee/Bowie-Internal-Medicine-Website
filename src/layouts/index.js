import './index.css'

// React + Gatsby
import React from 'react'
import Helmet from 'react-helmet'

// Components
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Popup from '../components/popup'

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
              <i className="fab fa-facebook" />
            </a>
            <a href="#" className="twitter">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="google">
              <i className="fab fa-google" />
            </a>
          </div>
          <div className="popup-button" onClick={this.togglePopup}>
            <a href="#" className="question-circle">
              <i className="fas fa-question-circle" />
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
