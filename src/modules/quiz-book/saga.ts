import quizbookAPI from "@/common/lib/api/quizbook";
import { call, put, takeEvery } from "redux-saga/effects";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import {
  GET_AUTH_QUIZBOOK,
  getQuizBookwithQuizAsync,
  EDIT_QUIZBOOK,
  editQuizBookAsync,
  getQuizBookListAsync,
  GET_QUIZBOOK_LIST,
  postQuizBookLikeAsync,
  GET_UNSOLVED_QUIZBOOK_LIST,
  POST_QUIZBOOK_LIKE,
  searchQuizBookListAsync,
  SEARCH_QUIZBOOK_LIST,
  getUnsolvedQuizBookListAsync,
  DELETE_QUIZBOOK_QUIZ,
  deleteQuizBookQuizAsync,
  serachUnSolvedQuizBookListAsync,
  SEARCH_UNSOLVED_QUIZBOOK_LIST,
} from "./actions";
import { QuizBookwithQuizModel } from "@/common/model/quiz-book";
import quizAPI from "@/common/lib/api/quiz";

function* getQuizBookListSaga(
  action: ReturnType<typeof getQuizBookListAsync.request>
) {
  try {
    const { categoryId, page, isSortByDate } = action.payload;
    const quizBookList: QuizBookwithLikedModel[] = yield call(
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
    const quizBookList: QuizBookwithLikedModel[] = yield call(
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
  action: ReturnType<typeof postQuizBookLikeAsync.request>
) {
  try {
    const quizBookId = action.payload;
    const updatedQuizBookLike: QuizBookwithLikedModel = yield call(
      quizbookAPI.postQuizBookLike,
      quizBookId
    );
    yield put(postQuizBookLikeAsync.success(updatedQuizBookLike));
  } catch (e) {
    yield put(postQuizBookLikeAsync.failure(e));
  }
}

function* searchQuizBookListSaga(
  action: ReturnType<typeof searchQuizBookListAsync.request>
) {
  try {
    const { categoryId, page, keyword, isSortByDate } = action.payload;
    const quizbookList: QuizBookwithLikedModel[] = yield call(
      quizbookAPI.searchQuizBookList,
      categoryId,
      page,
      keyword,
      isSortByDate,
      false
    );
    yield put(searchQuizBookListAsync.success(quizbookList));
  } catch (e) {
    yield put(searchQuizBookListAsync.failure(e));
  }
}

function* searchUnSolvedQuizBookListSaga(
  action: ReturnType<typeof serachUnSolvedQuizBookListAsync.request>
) {
  try {
    const { categoryId, page, keyword, isSortByDate } = action.payload;
    const quizbookList: QuizBookwithLikedModel[] = yield call(
      quizbookAPI.searchQuizBookList,
      categoryId,
      page,
      keyword,
      isSortByDate,
      true
    );
    yield put(searchQuizBookListAsync.success(quizbookList));
  } catch (e) {
    yield put(searchQuizBookListAsync.failure(e));
  }
}

function* getQuizBookSaga(
  action: ReturnType<typeof getQuizBookwithQuizAsync.request>
) {
  try {
    const { quizBookId } = action.payload;
    const quizbook: QuizBookwithQuizModel = yield call(
      quizbookAPI.getAuthQuizBookwithQuiz,
      quizBookId
    );
    yield put(getQuizBookwithQuizAsync.success(quizbook));
  } catch (e) {
    yield put(getQuizBookwithQuizAsync.failure(e));
  }
}

function* editQuizBookSaga(
  action: ReturnType<typeof editQuizBookAsync.request>
) {
  try {
    const { quizBookId, body, history } = action.payload;
    const quizbook: QuizBookwithQuizModel = yield call(
      quizbookAPI.editQuizBook,
      quizBookId,
      body
    );
    yield put(editQuizBookAsync.success(quizbook));
    if (!history) return;
    if (body.completed) {
      history.push(`/quiz-book/user/owner?isDone=true`);
    } else {
      history.push(`/quiz-book/user/owner?isDone=false`);
    }
  } catch (e) {
    yield put(editQuizBookAsync.failure(e));
  }
}

function* deleteQuizBookQuizSaga(
  action: ReturnType<typeof deleteQuizBookQuizAsync.request>
) {
  try {
    const { quizId } = action.payload;
    const deletedQuizId: number = yield call(quizAPI.deleteQuiz, quizId);
    yield put(deleteQuizBookQuizAsync.success(deletedQuizId));
  } catch (e) {
    yield put(deleteQuizBookQuizAsync.failure(e));
  }
}

// eslint-disable-next-line
export function* quizBookSaga() {
  yield takeEvery(GET_QUIZBOOK_LIST, getQuizBookListSaga);
  yield takeEvery(GET_UNSOLVED_QUIZBOOK_LIST, getUnSolvedQuizBookListSaga);
  yield takeEvery(POST_QUIZBOOK_LIKE, postQuizBookLikeSaga);
  yield takeEvery(SEARCH_QUIZBOOK_LIST, searchQuizBookListSaga);
  yield takeEvery(
    SEARCH_UNSOLVED_QUIZBOOK_LIST,
    searchUnSolvedQuizBookListSaga
  );
  yield takeEvery(GET_AUTH_QUIZBOOK, getQuizBookSaga);
  yield takeEvery(EDIT_QUIZBOOK, editQuizBookSaga);
  yield takeEvery(DELETE_QUIZBOOK_QUIZ, deleteQuizBookQuizSaga);
}
