import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

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
          Home
        </NavLink>
        <NavLink
          data-aos="zoom-in"
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink
          data-aos="zoom-in"
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/Articles"
        >
          Articles
        </NavLink>
        <NavLink
          data-aos="zoom-in"
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Manu;
