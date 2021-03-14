import React from "react";
import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "@modules/index";
import { Provider } from "react-redux";
import GlobalStyle from "@component/common/global-style/index";

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
import EditQuizPage from "./view/edit-quiz";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            path="/quiz-book/:quizBookId/quiz/"
            component={Auth(QuizPage, false)}
          />
          <Route
            path="/quiz-book/:quizBookId/makequiz"
            component={Auth(MakeQuizPage, true)}
          />
          <Route path="/quiz/:quizId" component={Auth(EditQuizPage, true)} />
          <Route path="/category/:categoryId" component={QuizBookListPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/category" exact component={CategoryPage} />
          <Route path="/profile" exact component={Auth(ProfilePage, false)} />
          <Route path="/quiz-book" exact component={Auth(QuizBookPage, true)} />
          <Route
            path="/quiz-book/user/"
            component={Auth(UserQuizBookListPage, false)}
          />
          <Route
            path="/quiz-book/:quizBookId"
            component={Auth(AddQuizPage, true)}
          />
          <Route path="/result" exact component={QuizResultPage} />
          <Route path="/rank" exact component={RankPage} />
          <Route path="/" exact component={MainPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
