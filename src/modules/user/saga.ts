import UserModel from "@common/model/user";
import {
  getUserInfoAsync,
  GET_USER_INFO,
  updateUserNicknameAsync,
  UPDATE_USER_INFO,
} from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";
import userAPI from "@/common/lib/api/user";

function* getUserInfoSaga(action: ReturnType<typeof getUserInfoAsync.request>) {
  try {
    const userProfile: UserModel = yield call(userAPI.getUserInfo);
    yield put(getUserInfoAsync.success(userProfile));
  } catch (e) {
    yield put(getUserInfoAsync.failure(e));
  }
}
function* updateUserNicknameSaga(
  action: ReturnType<typeof updateUserNicknameAsync.request>
) {
  try {
    const updatedUserProfile: UserModel = yield call(
      userAPI.updateUserNickname,
      action.payload
    );
    yield put(updateUserNicknameAsync.success(updatedUserProfile));
  } catch (e) {
    yield put(updateUserNicknameAsync.failure(e));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USER_INFO, getUserInfoSaga);
  yield takeEvery(UPDATE_USER_INFO, updateUserNicknameSaga);
}
