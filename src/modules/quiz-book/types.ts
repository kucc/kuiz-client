import QuizBookModel from "@/common/model/quiz-book";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

export type QuizBookAction = ActionType<typeof actions>;

export type QuizBookState = {
  loading: boolean;
  error: Error | null;
  data: QuizBookModel[] | null;
};

export type QuizBookAPIPayload = {
  categoryId: number;
  page: number;
  isSortByDate: boolean;
};
