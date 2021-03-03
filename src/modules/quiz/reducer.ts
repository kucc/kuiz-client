import { createReducer } from "typesafe-actions";
import {
  EDIT_QUIZ,
  EDIT_QUIZ_SUCCESS,
  EDIT_QUIZ_ERROR,
  GET_QUIZ,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_ERROR,
  POST_QUIZ,
  POST_QUIZ_SUCCESS,
  POST_QUIZ_ERROR,
} from "./actions";
import { QuizAction, QuizState } from "./types";

const initialState: QuizState = {
  loading: false,
  error: null,
  data: null,
};

const quizReducer = createReducer<QuizState, QuizAction>(initialState, {
  [GET_QUIZ]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),

  [GET_QUIZ_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
  }),

  [GET_QUIZ_ERROR]: (state, action) => ({
    ...state,
    loading: true,
    error: action.payload,
    data: null,
  }),

  [EDIT_QUIZ]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),

  [EDIT_QUIZ_SUCCESS]: (state, action) => {
    if (!state.data || state.data.id !== action.payload.id) {
      return { ...state };
    }

    return {
      ...state,
      loading: false,
      data: state.data,
      error: null,
    };
  },

  [EDIT_QUIZ_ERROR]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },

  [POST_QUIZ]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [POST_QUIZ_SUCCESS]: (state, action) => {
    if (!state.data) {
      return { ...state };
    }
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    };
  },
  [POST_QUIZ_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default quizReducer;
