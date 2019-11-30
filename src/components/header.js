import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import InstagramSVG from "../Icons/InstagramSVG"
import LinkedInSVG from "../Icons/LinkedInSVG"
import MailSVG from "../Icons/MailSVG"
import GithubSVG from "../Icons/GithubSVG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
    <div className="header-container">
      <div className="user-info-container">
        <div className="user-info">
          <p>Morgan Matthews</p>
          <p>Front-End Developer</p>
        </div>
        <div className="user-info">
          <FontAwesomeIcon icon={ faTimes } style={{ color: '#C4C4C4', fontSize:'20px', fontWeight:'1px', display:'inline-block'}}/>  
        </div>
      </div>
      
      
      
      <div className="icons-container">
            <a href="https://medium.com/">
              <MailSVG />
            </a>

            <a href="https://www.instagram.com/">
              <InstagramSVG />
            </a>

            <a href="https://www.linkedin.com/">
              <LinkedInSVG />
            </a>

            <a href="https://github.com/">
              <GithubSVG />
            </a>
      </div>
    </div>
   
  // </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header