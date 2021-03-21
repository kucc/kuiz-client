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
  type: "all",
  keyword: null,
  isSameCondition: false,
};

const quizBookReducer = createReducer<QuizBookState, QuizBookAction>(
  initialState,
  {
    [INIT_QUIZBOOK_REDUCER]: () => initialState,
    [GET_QUIZBOOK_LIST]: (state) => {
      const { type: previousState } = state;
      return {
        ...state,
        loading: true,
        error: null,
        type: "all",
        keyword: null,
        isSameCondition: previousState === "all",
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
        isSameCondition: false,
      };
    },
    [GET_UNSOLVED_QUIZBOOK_LIST]: (state) => {
      const { type: previousState } = state;
      return {
        ...state,
        loading: true,
        error: null,
        type: "unSolved",
        keyword: null,
        isSameCondition: previousState === "unSolved",
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
      isSameCondition: false,
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
    [SEARCH_QUIZBOOK_LIST]: (state, action) => {
      const { type: previousState, keyword: previousKeyword } = state;

      return {
        ...state,
        loading: true,
        error: null,
        type: "search",
        keyword: action.payload.keyword,
        isSameCondition:
          previousState === "search" &&
          previousKeyword === action.payload.keyword,
      };
    },
    [SEARCH_QUIZBOOK_LIST_SUCCESS]: (state, action) => {
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
    [SEARCH_QUIZBOOK_LIST_ERROR]: (state, action) => ({
      ...state,
      loading: true,
      error: action.payload,
    }),
    [RESET_ERROR_BY_MODAL]: (state) => ({
      ...state,
      loading: false,
      error: null,
    }),
  }
);

export default quizBookReducer;
