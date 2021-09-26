import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Manu = () => {
  return (
    <>
      <div className="rc_nav" id="centered_nav">
        <h1
          id="title"
          data-aos="zoom-in"
        >
          SAYAIB SARKAR
        </h1>

        <NavLink
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink
          exact
          activeClassName="active_class"
          className="nav_link"
          to="/codes"
        >
          Codes
        </NavLink>
        <NavLink
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
