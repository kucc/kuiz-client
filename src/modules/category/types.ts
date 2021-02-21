import CategoryModel from "@/common/model/category";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type CategoryAction = ActionType<typeof actions>;

export type CategoryState = {
  loading: boolean;
  error: Error | null;
  data: CategoryModel[] | null;
};
