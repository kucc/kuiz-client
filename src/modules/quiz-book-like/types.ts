import * as actions from "./actions";
import { ActionType } from "typesafe-actions";

import LikeResultModel from "@/common/model/like-result";

export type QuizBookLikeAction = ActionType<typeof actions>;

export type QuizBookLikeState = {
  loading: boolean;
  error: Error | null;
  data: LikeResultModel | null;
};

export type QuizBookLikeAPIPayload = {
  quizBookId: number;
};
