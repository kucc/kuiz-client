import { ActionType } from "typesafe-actions";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";

import * as actions from "./actions";

export type QuizBookAction = ActionType<typeof actions>;

export type DeleteResult = {
  result: boolean;
};

export type QuizBookState = {
  loading: boolean;
  error: Error | null;
  data: QuizBookwithLikedModel[] | null;
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
