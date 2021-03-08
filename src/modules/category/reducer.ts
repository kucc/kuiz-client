import { createReducer } from "typesafe-actions";
import {
  GET_CATEGORY,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
} from "./actions";
import { CategoryAction, CategoryState } from "./types";

const initialState: CategoryState = {
  loading: false,
  error: null,
  data: null,
};

const categoryReducer = createReducer<CategoryState, CategoryAction>(
  initialState,
  {
    [GET_CATEGORY]: (state) => ({
      ...state,
      loading: true,
      error: null,
      data: null,
    }),
    [GET_CATEGORY_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    [GET_CATEGORY_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      data: null,
    }),
  }
);

export default categoryReducer;
