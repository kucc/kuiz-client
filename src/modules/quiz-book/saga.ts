import quizbookAPI from "@/common/lib/api/quizbook";
import { call, put, takeEvery } from "redux-saga/effects";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import {
  getQuizBookListAsync,
  GET_QUIZBOOK_LIST,
  postQuizBookLikeAsync,
  POST_QUIZBOOK_LIKE,
  searchQuizBookListAsync,
  SEARCH_QUIZBOOK_LIST,
} from "./actions";

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
    const { categoryId, page, keyword } = action.payload;
    const quizbookList: QuizBookwithLikedModel[] = yield call(
      quizbookAPI.searchQuizBookList,
      categoryId,
      page,
      keyword
    );
    yield put(searchQuizBookListAsync.success(quizbookList));
  } catch (e) {
    yield put(searchQuizBookListAsync.failure(e));
  }
}

export function* quizBookSaga() {
  yield takeEvery(GET_QUIZBOOK_LIST, getQuizBookListSaga);
  yield takeEvery(POST_QUIZBOOK_LIKE, postQuizBookLikeSaga);
  yield takeEvery(SEARCH_QUIZBOOK_LIST, searchQuizBookListSaga);
}
