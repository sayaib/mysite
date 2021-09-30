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
            <h1 className="home_page_text" data-aos="fade-left">
              Hi,
            </h1>
            <h1 className="home_page_text" data-aos="fade-left">
              I'm Sayaib
            </h1>
            <h1 className="home_page_text" data-aos="fade-left">
              web developer
            </h1>

            <Button
              className="mt-4"
              variant="outline-danger"
              data-aos="fade-left"
            >
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
