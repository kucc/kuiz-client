import quizbookAPI from "@/common/lib/api/quizbook";
import QuizBookModel from "@/common/model/quiz-book";
import { call, put, takeEvery } from "redux-saga/effects";
import { getQuizBookListAsync, GET_QUIZBOOK_LIST } from "./actions";

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

export function* quizBookSaga() {
  yield takeEvery(GET_QUIZBOOK_LIST, getQuizBookListSaga);
}
