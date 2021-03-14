import quizAPI from "@/common/lib/api/quiz";
import QuizModel from "@/common/model/quiz";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getQuizAsync,
  editQuizAsync,
  postQuizAsync,
  getQuizListAsync,
  deleteQuizAsync,
  EDIT_QUIZ,
  GET_QUIZ,
  POST_QUIZ,
  GET_QUIZ_LIST,
  DELETE_QUIZ,
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

function* getQuizListSaga(action: ReturnType<typeof getQuizListAsync.request>) {
  try {
    const { quizBookId } = action.payload;
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
  yield takeEvery(GET_QUIZ, getQuizSaga);
  yield takeEvery(EDIT_QUIZ, editQuizSaga);
  yield takeEvery(POST_QUIZ, postQuizSaga);
  yield takeEvery(GET_QUIZ_LIST, getQuizListSaga);
  yield takeEvery(DELETE_QUIZ, deleteQuizSaga);
}
