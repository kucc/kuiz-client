import quizbookAPI from "@/common/lib/api/quizbook";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getQuizBookLikeAsync,
  GET_QUIZBOOK_LIKE,
  postQuizBookLikeAsync,
  POST_QUIZBOOK_LIKE,
} from "./actions";
import LikeResultModel from "@/common/model/like-result";

function* postQuizBookLikeSaga(
  action: ReturnType<typeof postQuizBookLikeAsync.request>
) {
  try {
    const quizBookId = action.payload;
    const likedCount: LikeResultModel = yield call(
      quizbookAPI.postQuizBookLike,
      quizBookId
    );
    yield put(postQuizBookLikeAsync.success(likedCount));
  } catch (e) {
    yield put(postQuizBookLikeAsync.failure(e));
  }
}

function* getQuizBookLikeSaga(
  action: ReturnType<typeof getQuizBookLikeAsync.request>
) {
  try {
    const quizBookId = action.payload;
    const likedCount: LikeResultModel = yield call(
      quizbookAPI.getQuizBookLike,
      quizBookId
    );
    yield put(getQuizBookLikeAsync.success(likedCount));
  } catch (e) {
    yield put(getQuizBookLikeAsync.failure(e));
  }
}

export function* quizBookLikeSaga() {
  yield takeEvery(POST_QUIZBOOK_LIKE, postQuizBookLikeSaga);
  yield takeEvery(GET_QUIZBOOK_LIKE, getQuizBookLikeSaga);
}
