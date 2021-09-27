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
            <p>Hi, my name is</p>
            <h1 className="pb-3" style={{ color: "#64FFDA" }}>
              Sayaib Sarkar
            </h1>
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
