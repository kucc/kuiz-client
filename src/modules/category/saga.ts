import categoryAPI from "@/common/lib/api/category";
import CategoryModel from "@/common/model/category";
import { call, put, takeEvery } from "redux-saga/effects";
import { getCategoryAsync, GET_CATEGORY } from "./actions";

function* getCategorySaga(action: ReturnType<typeof getCategoryAsync.request>) {
  try {
    const categoryList: CategoryModel[] = yield call(
      categoryAPI.getCategoryList
    );
    yield put(getCategoryAsync.success(categoryList));
  } catch (e) {
    yield put(getCategoryAsync.failure(e));
  }
}

export function* categorySaga() {
  yield takeEvery(GET_CATEGORY, getCategorySaga);
}
