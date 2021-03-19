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
  isUnsolved: boolean;
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
