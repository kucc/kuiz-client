import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type ModalAction = ActionType<typeof actions>;

export type ModalState = {
  show: boolean;
  message: string | null;
};
