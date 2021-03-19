import quizAPI from "@/common/lib/api/quiz";
import QuizModel from "@/common/model/quiz";
import { call, put, takeEvery } from "redux-saga/effects";
import { editQuizAsync, postQuizAsync, EDIT_QUIZ, POST_QUIZ } from "./actions";

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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* quizSaga() {
  yield takeEvery(EDIT_QUIZ, editQuizSaga);
  yield takeEvery(POST_QUIZ, postQuizSaga);
}
