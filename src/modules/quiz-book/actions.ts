import { createAsyncAction } from "typesafe-actions";
import QuizBookModel from "@common/model/quiz-book";
import { AxiosError } from "axios";
import { QuizBookAPIPayload, SearchAPIPayload } from "./types";

export const GET_QUIZBOOK_LIST = "quizbook/GET_QUIZBOOK_LIST" as const;
export const GET_QUIZBOOK_LIST_SUCCESS = "quizbook/GET_QUIZBOOK_LIST_SUCCESS" as const;
export const GET_QUIZBOOK_LIST_ERROR = "quizbook/GET_QUIZBOOK_LIST_ERROR" as const;

export const POST_QUIZBOOK_LIKE = "quizbook/POST_QUIZBOOK_LIKE" as const;
export const POST_QUIZBOOK_LIKE_SUCCESS = "quizbook/POST_QUIZBOOK_LIKE_SUCCESS" as const;
export const POST_QUIZBOOK_LIKe_ERROR = "quizbook/POST_QUIZBOOK_LIKE_ERROR" as const;

export const SEARCH_QUIZBOOK_LIST = "quizbook/SEARCH_QUIZBOOK_LIST" as const;
export const SEARCH_QUIZBOOK_LIST_SUCCESS = "quizbook/SEARCH_QUIZBOOK_LIST_SUCCESS" as const;
export const SEARCH_QUIZBOOK_LIST_ERROR = "quizbook/SEARCH_QUIZBOOK_LIST_ERROR" as const;

export const getQuizBookListAsync = createAsyncAction(
  GET_QUIZBOOK_LIST,
  GET_QUIZBOOK_LIST_SUCCESS,
  GET_QUIZBOOK_LIST_ERROR
)<QuizBookAPIPayload, QuizBookModel[], AxiosError>();

export const postQuizBookLikstAsync = createAsyncAction(
  POST_QUIZBOOK_LIKE,
  POST_QUIZBOOK_LIKE_SUCCESS,
  POST_QUIZBOOK_LIKe_ERROR
)<number, QuizBookModel, AxiosError>();

export const searchQuizBookListAsync = createAsyncAction(
  SEARCH_QUIZBOOK_LIST,
  SEARCH_QUIZBOOK_LIST_SUCCESS,
  SEARCH_QUIZBOOK_LIST_ERROR
)<SearchAPIPayload, QuizBookModel[], AxiosError>();
