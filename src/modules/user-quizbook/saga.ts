import QuizBookModel from "@common/model/quiz-book";
import {
  getUserQuizBookAsync,
  GET_USER_QUIZBOOK,
  deleteQuizBookAsync,
  DELETE_QUIZBOOK,
} from "./actions";
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

function* deleteQuizBookSaga(
  action: ReturnType<typeof deleteQuizBookAsync.request>
) {
  try {
    const { quizBookId } = action.payload;
    const deletedQuizBookId: number = yield call(
      quizbookAPI.deleteQuizBook,
      quizBookId
    );

    yield put(deleteQuizBookAsync.success(deletedQuizBookId));
  } catch (e) {
    yield put(deleteQuizBookAsync.failure(e));
  }
}

export function* userQuizBookSaga() {
  yield takeEvery(GET_USER_QUIZBOOK, getUserQuizBookSaga);
  yield takeEvery(DELETE_QUIZBOOK, deleteQuizBookSaga);
}
