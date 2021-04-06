import React from "react"
import picture from "../images/about-picture.jpeg"

class Bio extends React.Component  {
  render(){
    return(
      <div>

        <div className="line-numbers">
          <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34</p>
        </div>
        <div className="divider">
        </div>

        <div className="about-content-container">

          <div className="comments">
              <p>// This is a comment.</p>
              <p>// This is a comment.</p>
              <p>// This is a comment.</p> 
          </div>

            <div className="about-main-section">
             
              <ul className="about-list">
                <li>
                  <p><span style={{ color: "#FF97FF"}}>.name</span> &#123; </p>
                    <p className="tag-info">Matthew Davenport</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#86FFF8"}}>.bio</span> &#123; </p>
                    <p className="tag-info"> I am currently attending the University of Queensland studying a Bachelor's Degree in IT (BInfTech) Majoring in User Experience Design. </p>
                    <p>My expertise lies in User Experience Design, this includes prototyping, wireframes, front-end design, research and general design. Apart from technical digital work, I have a keen interest working with others. I have experience in customer service, administration and general office duties. </p>
                    <p>I am proficient in using Wordpress and Squarespace, the Adobe Suite, filming, video editing, designing and creating graphics, and creating digital content. </p>
                    <p>I also have experience growing large social media audiences and executing digital campaign strategies. I have experience in creating and sending email campaigns to over 1 Million individuals, and serving digital ads and content to similar audiences. </p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#94D381"}}>.skills</span> &#123; </p>
                    <p className="tag-info">Web: HTML;</p>
                    <p className="tag-info">Web: CSS;</p>
                    <p className="tag-info">Web: Javascript;</p>
                    <p className="tag-info">Framework: React;</p>
                    <p className="tag-info">Framework: Nodejs;</p>
                    <p className="tag-info">Design: Adobe Suite;</p>
                    <p className="tag-info">Other: Social Media;</p>
                    <p className="tag-info">Other: SEO and web analytics</p>
                    <p className="tag-info">Other: Email campaigns and audience growth</p>
                  <p>&#125;</p>
                </li>
              </ul>

              <div className="about-image-container">
                <img src={picture} /> 
              </div>

            </div>  
                     

        </div>
      </div>
  
    )
    
  }
}

export default Bio
