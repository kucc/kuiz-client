import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import LikeResultModel from "@common/model/like-result";

export const POST_QUIZBOOK_LIKE = "quizbook/POST_QUIZBOOK_LIKE" as const;
export const POST_QUIZBOOK_LIKE_SUCCESS = "quizbook/POST_QUIZBOOK_LIKE_SUCCESS" as const;
export const POST_QUIZBOOK_LIKe_ERROR = "quizbook/POST_QUIZBOOK_LIKE_ERROR" as const;

export const GET_QUIZBOOK_LIKE = "quizbook/GET_QUIZBOOK_LIKE" as const;
export const GET_QUIZBOOK_LIKE_SUCCESS = "quizbook/GET_QUIZBOOK_LIKE_SUCCESS" as const;
export const GET_QUIZBOOK_LIKE_ERROR = "quizbook/GET_QUIZBOOK_LIKE_ERROR" as const;

export const postQuizBookLikeAsync = createAsyncAction(
  POST_QUIZBOOK_LIKE,
  POST_QUIZBOOK_LIKE_SUCCESS,
  POST_QUIZBOOK_LIKe_ERROR
)<number, LikeResultModel, AxiosError>();

export const getQuizBookLikeAsync = createAsyncAction(
  GET_QUIZBOOK_LIKE,
  GET_QUIZBOOK_LIKE_SUCCESS,
  GET_QUIZBOOK_LIKE_ERROR
)<number, LikeResultModel, AxiosError>();
