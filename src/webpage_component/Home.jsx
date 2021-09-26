import React from "react";
import "./style.css";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div id="webpage">
        <div id="webpage_body">
          <Container className="home_container">
            <p>Hi, my name is</p>
            <h1>Sayaib Sarkar</h1>
            <h1>I build things for the web.</h1>
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
              Check out my course!
            </p>

            <Button className="mt-4" variant="outline-danger">
              Check out my resume
            </Button>
          </Container>
        </div>
        <div>
          <div class="icon-bar">
            <a href="#" data-aos="fade-right">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="#" data-aos="fade-right">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="#" data-aos="fade-right">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
