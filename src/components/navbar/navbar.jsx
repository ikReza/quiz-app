import React from "react";
import { ReactComponent as Logo } from "../../assets/bee.svg";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        <Logo width="30" height="30" className="d-inline-block align-top" />
        <p>QuizBee</p>
      </span>
    </nav>
  );
};

export default Navbar;
