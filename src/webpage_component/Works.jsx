import React from "react";
import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Cards from "./Cards";
import CData from "./CData";

const data = (val) => {
  return (
    <Cards
      key={val.id}
      name={val.name}
      subtitle={val.subtitle}
      about={val.about}
      githubLink={val.githubLink}
      websiteLink={val.websiteLink}
    />
  );
};
const Works = () => {
  return (
    <>
      <div id="portfolio_webpage">
        <h1
          data-aos="fade-down"
          style={{ paddingBottom: "1rem", textAlign: "center", color: "#fff" }}
        >
          Some Things I've Built
        </h1>
        <div className="portfolio_body">{CData.map(data)}</div>
      </div>
      <div className="footer_section">
        <a className="footer_icon" href="https://www.geeksforgeeks.org/about/"><FontAwesomeIcon icon={faGithub} /></a>|
        <a className="footer_icon" href="https://www.geeksforgeeks.org/privacy-policy/">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        |<a className="footer_icon" href="https://www.geeksforgeeks.org/careers/"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </>
  );
};
export default Works;
