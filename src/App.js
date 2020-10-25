import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import LandingPage from "./pages/landingPage/landingPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;
