import { createReducer } from "typesafe-actions";
import { HIDE_ALERT_MODAL, SHOW_ALERT_MODAL } from "./actions";
import { ModalAction, ModalState } from "./types";

const initialState: ModalState = {
  show: false,
  message: null,
};

const modalReducer = createReducer<ModalState, ModalAction>(initialState, {
  [SHOW_ALERT_MODAL]: (state, action) => ({
    ...state,
    show: true,
    message: action.payload,
  }),
  [HIDE_ALERT_MODAL]: (state) => ({
    ...state,
    show: false,
    message: null,
  }),
});

export default modalReducer;
