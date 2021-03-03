import QuizModel from "@/common/model/quiz";
import QuizRequestBody from "@/common/model/quiz-request-body";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

export type QuizAction = ActionType<typeof actions>;

export type QuizState = {
  loading: boolean;
  error: Error | null;
  data: QuizModel | null;
};

export type GetQuizAPIPayload = {
  quizId: number;
};

export type PostQuizAPIPayload = {
  quizBookId: number;
  body: QuizRequestBody | FormData;
};

export type PatchQuizAPIPayload = {
  quizId: number;
  body: QuizRequestBody | FormData | undefined;
};
