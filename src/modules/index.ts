import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { userSaga } from "./user";
import user from "./user/reducer";
import quizbook from "./quiz-book/reducer";
import { quizBookSaga } from "./quiz-book";

const rootReducer = combineReducers({ user, quizbook });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga(), quizBookSaga()]);
}
