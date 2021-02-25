import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { userSaga } from "./user";
import user from "./user/reducer";
import quizbook from "./quiz-book/reducer";
import category from "./category/reducer";
import userQuizBook from "./user-quizbook/reducer";
import { quizBookSaga } from "./quiz-book";
import { categorySaga } from "./category";
import { userQuizBookSaga } from "./user-quizbook";

const rootReducer = combineReducers({
  user,
  quizbook,
  category,
  userQuizBook,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga(), quizBookSaga(), categorySaga(), userQuizBookSaga()]);
}
