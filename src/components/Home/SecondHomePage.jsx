import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import '../../styles/secondHome.css'

import Linkedin from '../../Assets/linkedin-480.png'
import Github from '../../Assets/github-480.png'
import Instagram from '../../Assets/instagram-384.png'


export default function SecondHomePage() {
  return (
    <div className="home-about-section" id="about">
      <div className="content">
        <div className="home-about">
          <div className="heading">
            <h1> LET ME <span className="purple"> INTRODUCE </span> MYSELF </h1>
          </div>
          <div className="wrapper">
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </div>
        </div>
        <div className="Avtar">
          <Tilt>
            <img src={myImg} className="img-avatar" alt="avatar" />
          </Tilt>
        </div>
      </div>



      <div className="icons">
        <span className="home-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <div className="social-links">
            <a className='social-icon' href="https://github.com/Abhishekkumar021?tab=repositories" target="_blank" rel="noreferrer">
              <img src={Github} alt="GitHub" />
            </a>

            <a className='social-icon' href="https://www.linkedin.com/in/abhishek-kumar021" target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="Linkedin" />
            </a>

            <a className='social-icon' href="https://www.instagram.com/abhishekkumar021_" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </span>
      </div>
    </div>
  );
}
