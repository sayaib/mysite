import React from "react";
import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
const Portfolio = () => {
  return (
    <>
      <div id="portfolio_webpage">
        <h1 data-aos="fade-down" style={{ paddingBottom: "1rem", textAlign: "center" }}>
          Some Things I've Built
        </h1>
        <div className="portfolio_body">{CData.map(data)}</div>
      </div>
    </>
  );
};
export default Portfolio;
