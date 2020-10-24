import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
};

export default App;
