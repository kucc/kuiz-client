import quizbookAPI from "@/common/lib/api/quizbook";
import QuizBookModel from "@/common/model/quiz-book";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getQuizBookListAsync,
  GET_QUIZBOOK_LIST,
  postQuizBookLikstAsync,
  POST_QUIZBOOK_LIKE,
} from "./actions";

function* getQuizBookListSaga(
  action: ReturnType<typeof getQuizBookListAsync.request>
) {
  try {
    const { categoryId, page } = action.payload;
    const quizBookList: QuizBookModel[] = yield call(
      quizbookAPI.getQuizBookList,
      categoryId,
      page
    );
    yield put(getQuizBookListAsync.success(quizBookList));
  } catch (e) {
    yield put(getQuizBookListAsync.failure(e));
  }
}

function* postQuizBookLikeSaga(
  action: ReturnType<typeof postQuizBookLikstAsync.request>
) {
  try {
    const quizBookId = action.payload;
    const updatedQuizBook = yield call(
      quizbookAPI.postQuizBookLike,
      quizBookId
    );
    yield put(postQuizBookLikstAsync.success(updatedQuizBook));
  } catch (e) {
    yield put(postQuizBookLikstAsync.failure(e));
  }
}

export function* quizBookSaga() {
  yield takeEvery(GET_QUIZBOOK_LIST, getQuizBookListSaga);
  yield takeEvery(POST_QUIZBOOK_LIKE, postQuizBookLikeSaga);
}
