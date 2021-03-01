import QuizBookModel from "@common/model/quiz-book";
import { getUserQuizBookAsync, GET_USER_QUIZBOOK } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import quizbookAPI from "@/common/lib/api/quizbook";

function* getUserQuizBookSaga(
  action: ReturnType<typeof getUserQuizBookAsync.request>
) {
  try {
    const { path, isDone } = action.payload;
    const userQuizBook: QuizBookModel[] = yield call(
      quizbookAPI.getUserQuizBook,
      path,
      isDone
    );
    yield put(getUserQuizBookAsync.success(userQuizBook));
  } catch (e) {
    yield put(getUserQuizBookAsync.failure(e));
  }
}

export function* userQuizBookSaga() {
  yield takeEvery(GET_USER_QUIZBOOK, getUserQuizBookSaga);
}
