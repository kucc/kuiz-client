/* eslint-disable */
import QuizModel from "@/common/model/quiz";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

export type QuizAction = ActionType<typeof actions>;

export type QuizState = {
  loading: boolean;
  error: Error | null;
  data: QuizModel[] | null;
};

export type PostQuizAPIPayload = {
  history: any;
  quizBookId: number;
  body: FormData;
};

export type PatchQuizAPIPayload = {
  history: any;
  quizId: number;
  body: FormData;
};
