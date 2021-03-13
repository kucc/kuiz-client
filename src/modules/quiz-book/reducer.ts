import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import { createReducer } from "typesafe-actions";
import {
  GET_QUIZBOOK_LIST,
  GET_QUIZBOOK_LIST_ERROR,
  GET_QUIZBOOK_LIST_SUCCESS,
  GET_UNSOLVED_QUIZBOOK_LIST,
  GET_UNSOLVED_QUIZBOOK_LIST_ERROR,
  GET_UNSOLVED_QUIZBOOK_LIST_SUCCESS,
  INIT_QUIZBOOK_REDUCER,
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
  isUnsolved: false,
  isSameCondition: false,
};

const quizBookReducer = createReducer<QuizBookState, QuizBookAction>(
  initialState,
  {
    [INIT_QUIZBOOK_REDUCER]: () => initialState,
    [GET_QUIZBOOK_LIST]: (state) => {
      const { isUnsolved: previousState } = state;
      return {
        ...state,
        loading: true,
        error: null,
        isUnsolved: false,
        isSameCondition: previousState === false,
      };
    },
    [GET_QUIZBOOK_LIST_SUCCESS]: (state, action) => {
      const { isSameCondition, data: previousData } = state;
      let mergedQuizBookList = [] as QuizBookwithLikedModel[];

      if (isSameCondition && previousData) {
        mergedQuizBookList = [...previousData.concat(action.payload)];
        return {
          ...state,
          loading: false,
          data: mergedQuizBookList,
          isSameCondition: false,
        };
      } else {
        return {
          ...state,
          loading: false,
          data: action.payload,
          isSameCondition: false,
        };
      }
    },
    [GET_QUIZBOOK_LIST_ERROR]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    [GET_UNSOLVED_QUIZBOOK_LIST]: (state) => {
      const { isUnsolved: previousState } = state;
      return {
        ...state,
        loading: true,
        error: null,
        isUnsolved: true,
        isSameCondition: previousState === true,
      };
    },
    [GET_UNSOLVED_QUIZBOOK_LIST_SUCCESS]: (state, action) => {
      const { isSameCondition, data: previousData } = state;
      let mergedQuizBookList = [] as QuizBookwithLikedModel[];

      if (isSameCondition && previousData) {
        mergedQuizBookList = [...previousData.concat(action.payload)];
        return {
          ...state,
          loading: false,
          data: mergedQuizBookList,
          isSameCondition: false,
        };
      } else {
        return {
          ...state,
          loading: false,
          data: action.payload,
          isSameCondition: false,
        };
      }
    },
    [GET_UNSOLVED_QUIZBOOK_LIST_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
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
