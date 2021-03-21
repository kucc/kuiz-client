import { createReducer } from "typesafe-actions";
import {
  EDIT_QUIZ,
  EDIT_QUIZ_SUCCESS,
  EDIT_QUIZ_ERROR,
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
  [EDIT_QUIZ]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),

  [EDIT_QUIZ_SUCCESS]: (state, action) => {
    if (!state.data) {
      return { ...state };
    }
    const updatedQuizList = state.data.map((quiz) => {
      if (quiz.id === action.payload.id) {
        return action.payload;
      } else {
        return quiz;
      }
    });

    return {
      ...state,
      loading: false,
      data: updatedQuizList,
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
    const updatedQuizList = [...state.data, action.payload];

    return {
      ...state,
      loading: false,
      data: updatedQuizList,
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
