import quizAPI from "@/common/lib/api/quiz";
import quizbookAPI from "@/common/lib/api/quizbook";
import QuizModel from "@/common/model/quiz";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  editQuizAsync,
  postQuizAsync,
  getQuizListAsync,
  deleteQuizAsync,
  EDIT_QUIZ,
  POST_QUIZ,
  GET_QUIZ_LIST,
  DELETE_QUIZ,
} from "./actions";

function* editQuizSaga(action: ReturnType<typeof editQuizAsync.request>) {
  try {
    const { quizId, body, history } = action.payload;
    const quiz: QuizModel = yield call(quizAPI.editQuiz, quizId, body);
    yield put(editQuizAsync.success(quiz));
    history.goBack();
  } catch (e) {
    yield put(editQuizAsync.failure(e));
  }
}

function* postQuizSaga(action: ReturnType<typeof postQuizAsync.request>) {
  try {
    const { quizBookId, body, history } = action.payload;
    const quiz: QuizModel = yield call(quizAPI.postQuiz, quizBookId, body);
    yield put(postQuizAsync.success(quiz));
    history.goBack();
  } catch (e) {
    yield put(postQuizAsync.failure(e));
  }
}

function* getQuizListSaga(action: ReturnType<typeof getQuizListAsync.request>) {
  try {
    const { quizBookId, checkAuth } = action.payload;
    if (checkAuth) yield call(quizbookAPI.checkAuth, quizBookId);
    const quizList: QuizModel[] = yield call(quizAPI.getAllQuiz, quizBookId);
    yield put(getQuizListAsync.success(quizList));
  } catch (e) {
    yield put(getQuizListAsync.failure(e));
  }
}

function* deleteQuizSaga(action: ReturnType<typeof deleteQuizAsync.request>) {
  try {
    const { quizId } = action.payload;
    const deletedQuizId: number = yield call(quizAPI.deleteQuiz, quizId);
    yield put(deleteQuizAsync.success(deletedQuizId));
  } catch (e) {
    yield put(deleteQuizAsync.failure(e));
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* quizSaga() {
  yield takeEvery(EDIT_QUIZ, editQuizSaga);
  yield takeEvery(POST_QUIZ, postQuizSaga);
  yield takeEvery(GET_QUIZ_LIST, getQuizListSaga);
  yield takeEvery(DELETE_QUIZ, deleteQuizSaga);
}
