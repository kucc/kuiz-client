import QuizBookModel from "@/common/model/quiz-book";
import UserSolveQuizBookModel from "@/common/model/user-solve-quiz-book";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type UserQuizBookAction = ActionType<typeof actions>;

export type UserQuizBookState = {
  loading: boolean;
  error: Error | null;
  data: QuizBookModel[] | null;
};

export type UserQuizBookAPIPayload = {
  isDone: boolean;
  path: string;
};
