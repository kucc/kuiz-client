import quizAPI from "@/common/lib/api/quiz";
import QuizModel from "@/common/model/quiz";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getQuizAsync,
  editQuizAsync,
  postQuizAsync,
  EDIT_QUIZ,
  GET_QUIZ,
  POST_QUIZ,
} from "./actions";

function* getQuizSaga(action: ReturnType<typeof getQuizAsync.request>) {
  try {
    const { quizId } = action.payload;
    const quiz: QuizModel = yield call(quizAPI.getQuiz, quizId);
    yield put(getQuizAsync.success(quiz));
  } catch (e) {
    yield put(getQuizAsync.failure(e));
  }
}

function* editQuizSaga(action: ReturnType<typeof editQuizAsync.request>) {
  try {
    const { quizId, body } = action.payload;
    const quiz: QuizModel = yield call(quizAPI.editQuiz, quizId, body);
    yield put(editQuizAsync.success(quiz));
  } catch (e) {
    yield put(editQuizAsync.failure(e));
  }
}

function* postQuizSaga(action: ReturnType<typeof postQuizAsync.request>) {
  try {
    const { quizBookId, body } = action.payload;
    const quiz: QuizModel = yield call(quizAPI.postQuiz, quizBookId, body);
    yield put(editQuizAsync.success(quiz));
  } catch (e) {
    yield put(editQuizAsync.failure(e));
  }
}

export function* quizSaga() {
  yield takeEvery(GET_QUIZ, getQuizSaga);
  yield takeEvery(EDIT_QUIZ, editQuizSaga);
  yield takeEvery(POST_QUIZ, postQuizSaga);
}
