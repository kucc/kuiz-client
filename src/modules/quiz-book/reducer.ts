import { createReducer } from "typesafe-actions";
import {
  GET_QUIZBOOK_LIST,
  GET_QUIZBOOK_LIST_ERROR,
  GET_QUIZBOOK_LIST_SUCCESS,
} from "./actions";
import { QuizBookAction, QuizBookState } from "./types";

const initialState: QuizBookState = {
  loading: false,
  error: null,
  data: null,
};

const quizBookReducer = createReducer<QuizBookState, QuizBookAction>(
  initialState,
  {
    [GET_QUIZBOOK_LIST]: (state) => ({
      ...state,
      loading: true,
      error: null,
      data: null,
    }),
    [GET_QUIZBOOK_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    [GET_QUIZBOOK_LIST_ERROR]: (state, action) => ({
      ...state,
      loading: true,
      error: action.payload,
      data: null,
    }),
  }
);

export default quizBookReducer;
