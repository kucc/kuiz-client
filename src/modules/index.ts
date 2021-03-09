import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { userSaga } from "./user";
import user from "./user/reducer";
import quizbook from "./quiz-book/reducer";
import category from "./category/reducer";
import quiz from "./quiz/reducer";
import userQuizBook from "./user-quizbook/reducer";
import modal from "./modal/reducer";
import { quizBookSaga } from "./quiz-book";
import { categorySaga } from "./category";
import { userQuizBookSaga } from "./user-quizbook";
import { quizSaga } from "./quiz";

const rootReducer = combineReducers({
  user,
  quiz,
  quizbook,
  category,
  userQuizBook,
  modal,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([
    userSaga(),
    quizBookSaga(),
    categorySaga(),
    userQuizBookSaga(),
    quizSaga(),
  ]);
}
