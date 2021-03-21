import { ActionType } from "typesafe-actions";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";

import * as actions from "./actions";
import { AxiosError } from "axios";

export type QuizBookAction = ActionType<typeof actions>;

export type QuizBookState = {
  loading: boolean;
  error: AxiosError | null;
  data: QuizBookwithLikedModel[] | null;
  type: "all" | "unSolved" | "search";
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
