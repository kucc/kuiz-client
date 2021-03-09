import quizbookAPI from "@/common/lib/api/quizbook";
import QuizBookModel from "@/common/model/quiz-book";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getQuizBookListAsync,
  getUnsolvedQuizBookListAsync,
  GET_QUIZBOOK_LIST,
  GET_UNSOLVED_QUIZBOOK_LIST,
  postQuizBookLikstAsync,
  POST_QUIZBOOK_LIKE,
  searchQuizBookListAsync,
  SEARCH_QUIZBOOK_LIST,
} from "./actions";

function* getQuizBookListSaga(
  action: ReturnType<typeof getQuizBookListAsync.request>
) {
  try {
    const { categoryId, page, isSortByDate } = action.payload;
    const quizBookList: QuizBookModel[] = yield call(
      quizbookAPI.getQuizBookList,
      categoryId,
      page,
      isSortByDate
    );
    yield put(getQuizBookListAsync.success(quizBookList));
  } catch (e) {
    yield put(getQuizBookListAsync.failure(e));
  }
}

function* getUnSolvedQuizBookListSaga(
  action: ReturnType<typeof getUnsolvedQuizBookListAsync.request>
) {
  try {
    const { categoryId, page, isSortByDate } = action.payload;
    const quizBookList: QuizBookModel[] = yield call(
      quizbookAPI.getUnsolvedQuizBookList,
      categoryId,
      page,
      isSortByDate
    );
    yield put(getUnsolvedQuizBookListAsync.success(quizBookList));
  } catch (e) {
    yield put(getUnsolvedQuizBookListAsync.failure(e));
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

function* searchQuizBookListSaga(
  action: ReturnType<typeof searchQuizBookListAsync.request>
) {
  try {
    const { categoryId, keyword } = action.payload;
    const quizbookList: QuizBookModel[] = yield call(
      quizbookAPI.searchQuizBookList,
      categoryId,
      keyword
    );
    yield put(searchQuizBookListAsync.success(quizbookList));
  } catch (e) {
    yield put(searchQuizBookListAsync.failure(e));
  }
}

export function* quizBookSaga() {
  yield takeEvery(GET_QUIZBOOK_LIST, getQuizBookListSaga);
  yield takeEvery(GET_UNSOLVED_QUIZBOOK_LIST, getUnSolvedQuizBookListSaga);
  yield takeEvery(POST_QUIZBOOK_LIKE, postQuizBookLikeSaga);
  yield takeEvery(SEARCH_QUIZBOOK_LIST, searchQuizBookListSaga);
}
