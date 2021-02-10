import UserModel from "@/common/model/user";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  loading: boolean;
  error: Error | null;
  data: UserModel | null;
};
