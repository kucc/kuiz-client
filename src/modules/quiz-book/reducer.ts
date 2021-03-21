import QuizBookwithLikedModel from "@/common/model/quiz-book-with-liked";
import { createReducer } from "typesafe-actions";
import {
  GET_AUTH_QUIZBOOK,
  GET_AUTH_QUIZBOOK_ERROR,
  GET_AUTH_QUIZBOOK_SUCCESS,
  EDIT_QUIZBOOK,
  EDIT_QUIZBOOK_ERROR,
  EDIT_QUIZBOOK_SUCCESS,
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
  DELETE_QUIZBOOK_QUIZ,
  DELETE_QUIZBOOK_QUIZ_ERROR,
  DELETE_QUIZBOOK_QUIZ_SUCCESS,
  SEARCH_UNSOLVED_QUIZBOOK_LIST,
  SEARCH_UNSOLVED_QUIZBOOK_LIST_SUCCESS,
  SEARCH_UNSOLVED_QUIZBOOK_LIST_ERROR,
} from "./actions";
import { QuizBookAction, QuizBookState, QuizBookwithQuizState } from "./types";

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
      isSameCondition: false,
    }),
    [SEARCH_UNSOLVED_QUIZBOOK_LIST]: (state, action) => {
      const { type: previousState, keyword: previousKeyword } = state;
      return {
        ...state,
        loading: true,
        error: null,
        type: "search-unsolved",
        keyword: action.payload.keyword,
        isSameCondition:
          previousState === "search-unsolved" &&
          previousKeyword === action.payload.keyword,
      };
    },
    [SEARCH_UNSOLVED_QUIZBOOK_LIST_SUCCESS]: (state, action) => {
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
    [SEARCH_UNSOLVED_QUIZBOOK_LIST_ERROR]: (state, action) => ({
      ...state,
      loading: true,
      error: action.payload,
      isSameCondition: false,
    }),

    [RESET_ERROR_BY_MODAL]: (state) => ({
      ...state,
      loading: false,
      error: null,
    }),
  }
);

export const quizBookwithQuizReducer = createReducer<
  QuizBookwithQuizState,
  QuizBookAction
>(
  { loading: false, error: null, data: null },
  {
    [INIT_QUIZBOOK_REDUCER]: () => {
      return { loading: false, error: null, data: null };
    },
    [GET_AUTH_QUIZBOOK]: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [GET_AUTH_QUIZBOOK_SUCCESS]: (state, action) => {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    },
    [GET_AUTH_QUIZBOOK_ERROR]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    [EDIT_QUIZBOOK]: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [EDIT_QUIZBOOK_SUCCESS]: (state, action) => {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    },
    [EDIT_QUIZBOOK_ERROR]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    [DELETE_QUIZBOOK_QUIZ]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [DELETE_QUIZBOOK_QUIZ_SUCCESS]: (state, action) => {
      if (!state.data) {
        return { ...state };
      }

      const quizList = state.data.quiz.filter((quiz) => {
        return quiz.id !== action.payload;
      });

      return {
        ...state,
        loading: false,
        data: { ...state.data, quiz: quizList },
      };
    },
    [DELETE_QUIZBOOK_QUIZ_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  }
);

export default { quizBookReducer, quizBookwithQuizReducer };
