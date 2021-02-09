import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import CategoryPage from "@view/category/index";
import LoginPage from "@view/login";
import MainPage from "@view/main/index";
import ProfilePage from "@view/profile/index";
import RankPage from "@view/rank/index";
import MakeQuizPage from "./view/make-quiz/index";
import QuizPage from "./view/quiz/index";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/category" component={CategoryPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/rank" component={RankPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/makequiz" component={MakeQuizPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default App;
