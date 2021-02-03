import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import MainPage from "./view/main/index";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />

      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default App;
