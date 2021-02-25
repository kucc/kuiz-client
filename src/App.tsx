import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import CategoryPage from "@view/category/index";
import LoginPage from "@view/login";
import MainPage from "@view/main/index";
import ProfilePage from "@view/profile/index";
import RankPage from "@view/rank/index";
import MakeQuizPage from "@view/make-quiz/index";
import QuizPage from "@view/quiz/index";
import QuizResultPage from "@view/quiz-result/index";
import Layout from "@component/common/layout";
import QuizBookListPage from "@view/quizbook-list";
import QuizBookPage from "@view/quiz-book/index";
import Auth from "@component/common/auth";
import AddQuizPage from "@view/add-quiz/index";
import UserQuizBookListPage from "./view/user-quizbook";

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
        <Route path="/quiz-book/:quizbookId/quiz/" component={QuizPage} />
        <Route exact path="/quiz-book" component={QuizBookPage} />
        <Route path="/quiz-book/" component={Auth(UserQuizBookListPage)} />
        <Route path="/result" component={QuizResultPage} />
        <Route path="/rank" component={RankPage} />
        <Route path="/addquiz" component={AddQuizPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
