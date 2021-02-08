import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import CategoryPage from "./view/category/index";
import MainPage from "./view/main/index";
import ProfilePage from "./view/profile/index";
import RankPage from "./view/rank/index";
import QuizPage from "./view/quiz/index";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/category" component={CategoryPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/rank" component={RankPage} />
      <Route path="/quiz" component={QuizPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default App;
