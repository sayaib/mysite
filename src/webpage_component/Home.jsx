import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div id="webpage">
        <div id="webpage_body">
          <Container className="home_container">
            <h1 className="home_page_text" data-aos="fade-down">
              Hi,
            </h1>
            <h1 className="home_page_text" data-aos="fade-down">
              I'm Sayaib
            </h1>
            <h1 className="home_page_text" data-aos="fade-down">
              web developer
            </h1>
            <h5 data-aos="fade-up" >I build things for the web.</h5>

         <a href="" >
           <button data-aos="fade-up" className="homepage_btn mt-3">Check out my resume!</button>
         </a>
          </Container>
        </div>
        <div>
          <div className="icon-bar">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/SarkarSayaib"
              data-aos="fade-right"
            >
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sayaib"
              data-aos="fade-right"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sayaib-sarkar-847b3b169/"
              data-aos="fade-right"
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
