import { ActionType } from "typesafe-actions";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";

import * as actions from "./actions";
import { AxiosError } from "axios";
import {
  QuizBookwithQuizModel,
  QuizBookPatchBody,
} from "@/common/model/quiz-book";

export type QuizBookAction = ActionType<typeof actions>;

export type QuizBookState = {
  loading: boolean;
  error: AxiosError | null;
  data: QuizBookwithLikedModel[] | null;
  type: "all" | "unSolved" | "search" | "search-unsolved";
  keyword: string | null;
  isSameCondition: boolean;
};

export type QuizBookAPIPayload = {
  categoryId: number;
  page: number;
  isSortByDate: boolean;
};

export type SearchAPIPayload = {
  categoryId: number;
  page: number;
  keyword: string;
  isSortByDate: boolean;
};

export type QuizBookwithQuizState = {
  loading: boolean;
  error: AxiosError | null;
  data: QuizBookwithQuizModel | null;
};

export type PatchQuizBookAPIPayload = {
  quizBookId: number;
  body: QuizBookPatchBody;
  history?: any;
};
