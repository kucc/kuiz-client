import { createAsyncAction } from "typesafe-actions";
import QuizModel from "@common/model/quiz";
import { AxiosError } from "axios";
import { PostQuizAPIPayload, PatchQuizAPIPayload } from "./types";

export const GET_QUIZ = "quiz/GET_QUIZ" as const;
export const GET_QUIZ_SUCCESS = "quiz/GET_QUIZ_SUCCESS" as const;
export const GET_QUIZ_ERROR = "quiz/GET_QUIZ_ERROR" as const;

export const EDIT_QUIZ = "quiz/EDIT_QUIZ" as const;
export const EDIT_QUIZ_SUCCESS = "quiz/EDIT_QUIZ_SUCCESS" as const;
export const EDIT_QUIZ_ERROR = "quiz/EDIT_QUIZ_ERROR" as const;

export const POST_QUIZ = "quiz/POST_QUIZ" as const;
export const POST_QUIZ_SUCCESS = "quiz/POST_QUIZ_SUCCESS" as const;
export const POST_QUIZ_ERROR = "quiz/POST_QUIZ_ERROR" as const;

export const GET_QUIZ_LIST = "quiz/GET_QUIZ_LIST" as const;
export const GET_QUIZ_LIST_SUCCESS = "quiz/GET_QUIZ_LIST_SUCCESS" as const;
export const GET_QUIZ_LIST_ERROR = "quiz/GET_QUIZ_LIST_ERROR" as const;

export const DELETE_QUIZ = "quiz/DELETE_QUIZ" as const;
export const DELETE_QUIZ_SUCCESS = "quiz/DELETE_QUIZ_SUCCESS" as const;
export const DELETE_QUIZ_ERROR = "quiz/DELETE_QUIZ_ERROR" as const;

export const editQuizAsync = createAsyncAction(
  EDIT_QUIZ,
  EDIT_QUIZ_SUCCESS,
  EDIT_QUIZ_ERROR
)<PatchQuizAPIPayload, QuizModel, AxiosError>();

export const postQuizAsync = createAsyncAction(
  POST_QUIZ,
  POST_QUIZ_SUCCESS,
  POST_QUIZ_ERROR
)<PostQuizAPIPayload, QuizModel, AxiosError>();
