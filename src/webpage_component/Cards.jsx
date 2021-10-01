import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <>
      <div className="portfolio_card" data-aos="fade-up">
        <h1 className="card_folder">
          <FontAwesomeIcon icon={faFolder} />
        </h1>
        <h3>
          <a
            className="card_links"
            target="_blank"
            rel="noreferrer"
            href={props.githubLink}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="card_links"
            target="_blank"
            rel="noreferrer"
            href={props.websiteLink}
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </h3>

        <div>
          <Card.Title>{props.name}</Card.Title>
          <p style={{fontSize:"0.9rem"}}>{props.subtitle}</p>
          <Card.Text style={{fontSize:"0.9rem"}}>{props.about}</Card.Text>
        </div>
      </div>
    </>
  );
};

export default Cards;
