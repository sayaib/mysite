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
      <Card className="portfolio_card">
        <h1
          style={{ fontSize: "5rem", textAlign: "left", paddingLeft: "1rem" }}
        >
          <FontAwesomeIcon icon={faFolder} />
        </h1>
        <h3>
          <a
            style={{ padding: "0.5rem" }}
            target="_blank"
            rel="noreferrer"
            href={props.githubLink}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            style={{ padding: "0.5rem" }}
            target="_blank"
            rel="noreferrer"
            href={props.websiteLink}
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </h3>

        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <p>{props.subtitle}</p>
          <Card.Text>{props.about}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
