import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faPen,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

const Manu = () => {
  return (
    <>
      <div className="rc_nav" id="centered_nav">
        <h1 id="title" data-aos="fade-down" className="pt-1">
          Sayaib Sarkar
        </h1>

        <NavLink
          data-aos="zoom-in"
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} />
          <h6>Home</h6>
        </NavLink>
        <NavLink
          data-aos="zoom-in"
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} />
          <h6>Portfolio</h6>
        </NavLink>
        <NavLink
          data-aos="zoom-in"
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/Articles"
        >
          <FontAwesomeIcon icon={faPen} />
          <h6> Articles</h6>
        </NavLink>
        <NavLink
          data-aos="zoom-in"
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faPhone} />
          <h6>Contact</h6>
        </NavLink>
      </div>
    </>
  );
};

export default Manu;
