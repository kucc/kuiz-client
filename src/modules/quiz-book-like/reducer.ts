import { createReducer } from "typesafe-actions";
import {
  GET_QUIZBOOK_LIKE,
  GET_QUIZBOOK_LIKE_ERROR,
  GET_QUIZBOOK_LIKE_SUCCESS,
  POST_QUIZBOOK_LIKE,
  POST_QUIZBOOK_LIKe_ERROR,
  POST_QUIZBOOK_LIKE_SUCCESS,
} from "./actions";
import { QuizBookLikeAction, QuizBookLikeState } from "./types";

const initialState: QuizBookLikeState = {
  loading: false,
  error: null,
  data: null,
};

const quizBookLikeReducer = createReducer<
  QuizBookLikeState,
  QuizBookLikeAction
>(initialState, {
  [POST_QUIZBOOK_LIKE]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),

  [POST_QUIZBOOK_LIKE_SUCCESS]: (state, action) => {
    if (!state.data) {
      return { ...state };
    }
    const updatedQuizBook =
      state.data.id === action.payload.id ? action.payload : state.data;
    return {
      ...state,
      loading: false,
      data: updatedQuizBook,
      error: null,
    };
  },
  [POST_QUIZBOOK_LIKe_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),

  [GET_QUIZBOOK_LIKE]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_QUIZBOOK_LIKE_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
  }),
  [GET_QUIZBOOK_LIKE_ERROR]: (state, action) => ({
    ...state,
    loading: true,
    error: action.payload,
    data: null,
  }),
});

export default quizBookLikeReducer;
