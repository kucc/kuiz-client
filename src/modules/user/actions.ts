import UserModel from "@/common/model/user";
import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const GET_USER_INFO = "user/GET_USER_INFO" as const;
export const GET_USER_INFO_SUCCESS = "user/GET_USER_INFO_SUCCESS" as const;
export const GET_USER_INFO_ERROR = "user/GET_USER_INFO_ERROR" as const;

export const UPDATE_USER_INFO = "user/UPDATE_USER_INFO" as const;
export const UPDATE_USER_INFO_SUCCESS = "user/UPDATE_USER_INFO_SUCCESS" as const;
export const UPDATE_USER_INFO_ERROR = "user/UPDATE_USER_INFO_ERROR" as const;

export const getUserInfoAsync = createAsyncAction(
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR
)<undefined, UserModel, AxiosError>();

export const updateUserNicknameAsync = createAsyncAction(
  UPDATE_USER_INFO,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_ERROR
)<string, UserModel, AxiosError>();

export const insetUserInfo = (userInfo: UserModel) => ({
  type: GET_USER_INFO_SUCCESS,
  payload: userInfo,
});
