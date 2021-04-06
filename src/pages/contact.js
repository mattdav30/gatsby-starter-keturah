import React, { Component } from "react"
import SEO from "../components/seo"

import Nav from "../components/Nav"
import Main from "../components/Main"

class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      navToggle: false
    }
  }
  
  componentDidMount() {
    if(window.screen.availWidth < 800) {
      this.setState({ navToggle: true })
    }
    else {
      this.setState({ navToggle: false })
    }
  }
  
  render() {
    const toggler = () => {
      if(this.state.navToggle === true) {
        return(
          <div className="contact-page">
            <SEO title="Contact" />
            <Main />
          </div>
        );
      }
      else {
        return(
          <div className="contact-page">
            <SEO title="Contact" />
            <Nav />
            <Main />
          </div>
        );
      }
    }
    
    return (
      <div className="contact-page-container">
        {toggler()}
      </div>
    )
  }
}


export default ContactPage;