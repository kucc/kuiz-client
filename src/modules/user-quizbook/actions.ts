import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import { UserQuizBookAPIPayload, DeleteQuizBookAPIPayload } from "./types";

export const GET_USER_QUIZBOOK = "user/GET_USER_QUIZBOOK" as const;
export const GET_USER_QUIZBOOK_SUCCESS = "user/ GET_USER_QUIZBOOK_SUCCESS" as const;
export const GET_USER_QUIZBOOK_ERROR = "user/GET_USER_QUIZBOOK_ERROR" as const;

export const DELETE_QUIZBOOK = "quizbook/DELETE_QUIZBOOK" as const;
export const DELETE_QUIZBOOK_SUCCESS = "quizbook/DELETE_QUIZBOOK_SUCCESS" as const;
export const DELETE_QUIZBOOK_ERROR = "quizbook/DELETE_QUIZBOOK_ERROR" as const;

export const getUserQuizBookAsync = createAsyncAction(
  GET_USER_QUIZBOOK,
  GET_USER_QUIZBOOK_SUCCESS,
  GET_USER_QUIZBOOK_ERROR
)<UserQuizBookAPIPayload, QuizBookwithLikedModel[], AxiosError>();

export const deleteQuizBookAsync = createAsyncAction(
  DELETE_QUIZBOOK,
  DELETE_QUIZBOOK_SUCCESS,
  DELETE_QUIZBOOK_ERROR
)<DeleteQuizBookAPIPayload, number, AxiosError>();
