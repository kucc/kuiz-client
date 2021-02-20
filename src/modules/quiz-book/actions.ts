import { createAsyncAction } from "typesafe-actions";
import { GET_USER_INFO_ERROR, GET_USER_INFO_SUCCESS } from "../user";
import QuizBookModel from "@common/model/quiz-book";
import { AxiosError } from "axios";
import { QuizBookAPIPayload } from "./types";

export const GET_QUIZBOOK_LIST = "quizbook/GET_QUIZBOOK_LIST" as const;
export const GET_QUIZBOOK_LIST_SUCCESS = "quizbook/GET_QUIZBOOK_LIST_SUCCESS" as const;
export const GET_QUIZBOOK_LIST_ERROR = "quizbook/GET_QUIZBOOK_LIST_ERROR" as const;

export const getQuizBookListAsync = createAsyncAction(
  GET_QUIZBOOK_LIST,
  GET_QUIZBOOK_LIST_SUCCESS,
  GET_QUIZBOOK_LIST_ERROR
)<QuizBookAPIPayload, QuizBookModel[], AxiosError>();
