import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import CategoryPage from "@view/category/index";
import LoginPage from "@view/login";
import MainPage from "@view/main/index";
import ProfilePage from "@view/profile/index";
import RankPage from "@view/rank/index";
import MakeQuizPage from "./view/make-quiz/index";
import QuizPage from "./view/quiz/index";
import Layout from "./component/common/layout";
import QuizBookListPage from "./view/quizbook-list";
import Auth from "./component/common/auth";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/category/:categoryId" component={QuizBookListPage} />
        <Route path="/category" exact component={CategoryPage} />
        <Route path="/profile" component={Auth(ProfilePage)} />
        <Route
          path="/quiz-book/:quizbookId/makequiz"
          component={MakeQuizPage}
        />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/rank" component={RankPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
