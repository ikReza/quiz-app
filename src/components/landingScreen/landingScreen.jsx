import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/bee.svg";

import "./landingScreen.scss";

const LandingScreen = () => {
  return (
    <div className="screen">
      <Logo className="screen-logo" />
      <p className="screen-title">QuizBee</p>
      <Link to="/home" className="play-game">
        Play Game
      </Link>
      <div className="auth">
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/register" className="register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingScreen;
