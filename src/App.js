import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import LandingPage from "./pages/landingPage/landingPage";
import HomePage from "./pages/homePage/homePage";

import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <>
          <Navbar />
          <Route exact path="/home" component={HomePage} />
        </>
      </Switch>
    </div>
  );
};

export default App;
