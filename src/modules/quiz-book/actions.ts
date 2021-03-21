import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import {
  PatchQuizBookAPIPayload,
  QuizBookAPIPayload,
  SearchAPIPayload,
} from "./types";
import QuizBookwithLikedModel from "@common/model/quiz-book-with-liked";
import { QuizBookwithQuizModel } from "@common/model/quiz-book";

export const GET_QUIZBOOK_LIST = "quizbook/GET_QUIZBOOK_LIST" as const;
export const GET_QUIZBOOK_LIST_SUCCESS = "quizbook/GET_QUIZBOOK_LIST_SUCCESS" as const;
export const GET_QUIZBOOK_LIST_ERROR = "quizbook/GET_QUIZBOOK_LIST_ERROR" as const;

export const GET_UNSOLVED_QUIZBOOK_LIST = "quizbook/GET_UNSOVLED_QUIZBOOK_LIST" as const;
export const GET_UNSOLVED_QUIZBOOK_LIST_SUCCESS = "quizbook/GET_UNSOLVED_QUIZBOOK_LIST_SUCCESS" as const;
export const GET_UNSOLVED_QUIZBOOK_LIST_ERROR = "quizbook/GET_UNSOLVED_QUIZBOOK_LIST_ERROR" as const;

export const POST_QUIZBOOK_LIKE = "quizbook/POST_QUIZBOOK_LIKE" as const;
export const POST_QUIZBOOK_LIKE_SUCCESS = "quizbook/POST_QUIZBOOK_LIKE_SUCCESS" as const;
export const POST_QUIZBOOK_LIKE_ERROR = "quizbook/POST_QUIZBOOK_LIKE_ERROR" as const;

export const SEARCH_QUIZBOOK_LIST = "quizbook/SEARCH_QUIZBOOK_LIST" as const;
export const SEARCH_QUIZBOOK_LIST_SUCCESS = "quizbook/SEARCH_QUIZBOOK_LIST_SUCCESS" as const;
export const SEARCH_QUIZBOOK_LIST_ERROR = "quizbook/SEARCH_QUIZBOOK_LIST_ERROR" as const;

export const RESET_ERROR_BY_MODAL = "quizbook/RESET_ERROR_BY_MODAL" as const;
export const INIT_QUIZBOOK_REDUCER = "quizbook/INIT_QUIZBOOK_REDUCER" as const;

export const GET_AUTH_QUIZBOOK = "quizbook/GET_QUIZBOOK" as const;
export const GET_AUTH_QUIZBOOK_SUCCESS = "quizbook/GET_QUIZBOOK_SUCCESS" as const;
export const GET_AUTH_QUIZBOOK_ERROR = "quizbook/GET_QUIZBOOK_ERROR" as const;

export const EDIT_QUIZBOOK = "quizbook/EDIT_QUIZBOOK" as const;
export const EDIT_QUIZBOOK_SUCCESS = "quizbook/EDIT_QUIZBOOK_SUCCESS" as const;
export const EDIT_QUIZBOOK_ERROR = "quizbook/GET_QUIZBOOK_ERROR" as const;

export const DELETE_QUIZBOOK_QUIZ = "quizbook/DELETE_QUIZBOOK_QUIZ" as const;
export const DELETE_QUIZBOOK_QUIZ_SUCCESS = "quizbook/DELETE_QUIZBOOK_QUIZ_SUCCESS" as const;
export const DELETE_QUIZBOOK_QUIZ_ERROR = "quizbook/DELETE_QUIZBOOK_QUIZ_ERROR" as const;

export const getQuizBookListAsync = createAsyncAction(
  GET_QUIZBOOK_LIST,
  GET_QUIZBOOK_LIST_SUCCESS,
  GET_QUIZBOOK_LIST_ERROR
)<QuizBookAPIPayload, QuizBookwithLikedModel[], AxiosError>();

export const getUnsolvedQuizBookListAsync = createAsyncAction(
  GET_UNSOLVED_QUIZBOOK_LIST,
  GET_UNSOLVED_QUIZBOOK_LIST_SUCCESS,
  GET_UNSOLVED_QUIZBOOK_LIST_ERROR
)<QuizBookAPIPayload, QuizBookwithLikedModel[], AxiosError>();

export const postQuizBookLikeAsync = createAsyncAction(
  POST_QUIZBOOK_LIKE,
  POST_QUIZBOOK_LIKE_SUCCESS,
  POST_QUIZBOOK_LIKE_ERROR
)<number, QuizBookwithLikedModel, AxiosError>();

export const searchQuizBookListAsync = createAsyncAction(
  SEARCH_QUIZBOOK_LIST,
  SEARCH_QUIZBOOK_LIST_SUCCESS,
  SEARCH_QUIZBOOK_LIST_ERROR
)<SearchAPIPayload, QuizBookwithLikedModel[], AxiosError>();

export const resetErrorByModal = () => ({
  type: RESET_ERROR_BY_MODAL,
});

export const initQuizBookReducer = () => ({
  type: INIT_QUIZBOOK_REDUCER,
});

export const getQuizBookwithQuizAsync = createAsyncAction(
  GET_AUTH_QUIZBOOK,
  GET_AUTH_QUIZBOOK_SUCCESS,
  GET_AUTH_QUIZBOOK_ERROR
)<{ quizBookId: number }, QuizBookwithQuizModel, AxiosError>();

export const editQuizBookAsync = createAsyncAction(
  EDIT_QUIZBOOK,
  EDIT_QUIZBOOK_SUCCESS,
  EDIT_QUIZBOOK_ERROR
)<PatchQuizBookAPIPayload, QuizBookwithQuizModel, AxiosError>();

export const deleteQuizBookQuizAsync = createAsyncAction(
  DELETE_QUIZBOOK_QUIZ,
  DELETE_QUIZBOOK_QUIZ_SUCCESS,
  DELETE_QUIZBOOK_QUIZ_ERROR
)<{ quizId: number }, number, AxiosError>();
