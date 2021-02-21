import CategoryModel from "@/common/model/category";
import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const GET_CATEGORY = "category/GET_CATEGORY" as const;
export const GET_CATEGORY_SUCCESS = "category/GET_CATEGORY_SUCCESS" as const;
export const GET_CATEGORY_ERROR = "category/GET_CATEGORY_ERROR" as const;

export const getCategoryAsync = createAsyncAction(
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR
)<undefined, CategoryModel[], AxiosError>();
