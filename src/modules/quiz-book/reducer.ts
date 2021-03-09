import { action, createReducer } from "typesafe-actions";
import {
  GET_QUIZBOOK_LIST,
  GET_QUIZBOOK_LIST_ERROR,
  GET_QUIZBOOK_LIST_SUCCESS,
  POST_QUIZBOOK_LIKE,
  POST_QUIZBOOK_LIKE_ERROR,
  POST_QUIZBOOK_LIKE_SUCCESS,
  RESET_ERROR_BY_MODAL,
  SEARCH_QUIZBOOK_LIST,
  SEARCH_QUIZBOOK_LIST_ERROR,
  SEARCH_QUIZBOOK_LIST_SUCCESS,
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
    [POST_QUIZBOOK_LIKE]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [POST_QUIZBOOK_LIKE_SUCCESS]: (state, action) => {
      if (!state.data) {
        return { ...state };
      }
      const updatedQuizBookList = state.data.map((quizBook) => {
        if (quizBook.id === action.payload.id) {
          return action.payload;
        } else {
          return quizBook;
        }
      });
      return {
        ...state,
        loading: false,
        data: updatedQuizBookList,
        error: null,
      };
    },
    [POST_QUIZBOOK_LIKE_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    [SEARCH_QUIZBOOK_LIST]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [SEARCH_QUIZBOOK_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    [SEARCH_QUIZBOOK_LIST_ERROR]: (state, action) => ({
      ...state,
      loading: true,
      error: action.payload,
      data: null,
    }),
    [RESET_ERROR_BY_MODAL]: (state) => ({
      ...state,
      loading: false,
      error: null,
    }),
  }
);

export default quizBookReducer;
