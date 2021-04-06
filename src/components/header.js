
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
          <p>Matthew Davenport</p>
          <p>Developer and Designer</p>
        </div>
      </div>
      
      
      
      <div className="icons-container">
            <a href="mailto:matt@matthewdavenport.com.au">
              <MailSVG />
            </a>

            <a href="https://www.linkedin.com/in/matthew-davenport-b536a210b/">
              <LinkedInSVG />
            </a>

            <a href="https://github.com/mattdav30">
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
