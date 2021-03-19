import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";

export type UserQuizBookAction = ActionType<typeof actions>;

export type UserQuizBookState = {
  loading: boolean;
  error: Error | null;
  data: QuizBookwithLikedModel[] | null;
};

export type UserQuizBookAPIPayload = {
  isDone: boolean;
  path: string;
  page: number;
};

export type DeleteQuizBookAPIPayload = {
  quizBookId: number;
};
