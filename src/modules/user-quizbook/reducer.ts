import { createReducer } from "typesafe-actions";
import {
  GET_USER_QUIZBOOK,
  GET_USER_QUIZBOOK_SUCCESS,
  GET_USER_QUIZBOOK_ERROR,
  DELETE_QUIZBOOK,
  DELETE_QUIZBOOK_SUCCESS,
  DELETE_QUIZBOOK_ERROR,
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

  [DELETE_QUIZBOOK]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),

  [DELETE_QUIZBOOK_SUCCESS]: (state, action) => {
    if (!state.data) {
      return { ...state };
    }

    const quizBookList = state.data.filter((quizBook) => {
      return quizBook.id !== action.payload;
    });

    return {
      ...state,
      loading: false,
      data: quizBookList,
    };
  },

  [DELETE_QUIZBOOK_ERROR]: (state, action) => ({
    ...state,
    loading: true,
    error: action.payload,
  }),
});

export default userQuizBookReducer;
