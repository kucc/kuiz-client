import { createReducer } from "typesafe-actions";
import {
  GET_USER_QUIZBOOK,
  GET_USER_QUIZBOOK_SUCCESS,
  GET_USER_QUIZBOOK_ERROR,
} from "./actions";
import { UserQuizBookAction, UserQuizBookState } from "./types";

const initialState: UserQuizBookState = {
  loading: false,
  error: null,
  data: null,
};

const userQuizBookReducer = createReducer<
  UserQuizBookState,
  UserQuizBookAction
>(initialState, {
  [GET_USER_QUIZBOOK]: (state, isDone) => ({
    ...state,
    // payload: isDone,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_USER_QUIZBOOK_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
  }),
  [GET_USER_QUIZBOOK_ERROR]: (state, action) => ({
    ...state,
    loading: true,
    error: action.payload,
    data: null,
  }),
});

export default userQuizBookReducer;
