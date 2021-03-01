import QuizBookModel from "@/common/model/quiz-book";
import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { UserQuizBookAPIPayload } from "./types";

export const GET_USER_QUIZBOOK = "user/GET_USER_QUIZBOOK" as const;
export const GET_USER_QUIZBOOK_SUCCESS = "user/ GET_USER_QUIZBOOK_SUCCESS" as const;
export const GET_USER_QUIZBOOK_ERROR = "user/GET_USER_QUIZBOOK_ERROR" as const;

export const getUserQuizBookAsync = createAsyncAction(
  GET_USER_QUIZBOOK,
  GET_USER_QUIZBOOK_SUCCESS,
  GET_USER_QUIZBOOK_ERROR
)<UserQuizBookAPIPayload, QuizBookModel[], AxiosError>();
