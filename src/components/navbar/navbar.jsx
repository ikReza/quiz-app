import React from "react";
import { ReactComponent as Logo } from "../../assets/bee.svg";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar-brand">
        <Logo width="30" height="30" className="navbar-logo" />
        <p className="navbar-text">QuizBee</p>
      </span>
    </nav>
  );
};

export default Navbar;
