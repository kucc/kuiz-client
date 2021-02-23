import React, { useCallback, useEffect, useMemo, useState } from "react";
import QuizCategoryItem from "@component/quiz-category-item/index";
import QuizCategoryTitle from "@component/quiz-category-title/index";
import { CategoryListType } from "./types";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import { getCategoryAsync } from "@/modules/category";

const CategoryContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.category
  );
  const [titles, setTitles] = useState([] as string[]);
  const dispatch = useDispatch();
  const getCategoryList = () => {
    if (data) return;
    dispatch(getCategoryAsync.request());
  };

  const categoryList = useMemo(() => ({} as CategoryListType), []);

  const makeCategoryList = useCallback(() => {
    if (!data) return;
    data.forEach((category) => {
      const categoryArray = categoryList[category.topic];
      if (Array.isArray(categoryArray)) {
        categoryList[category.topic] = [...categoryArray, category];
      } else {
        categoryList[category.topic] = [category];
      }
    });
    setTitles(Object.keys(categoryList));
  }, [data]);

  useEffect(() => {
    getCategoryList();
  }, [dispatch]);

  useEffect(() => {
    makeCategoryList();
  }, [data]);

  return titles.length !== 0 ? (
    <S.CategoryContainer>
      {titles.map((title, idx) => (
        <S.CategoryWrapper key={idx}>
          <QuizCategoryTitle key={idx} title={title}></QuizCategoryTitle>
          {categoryList[title].map((category) => (
            <QuizCategoryItem key={category.id} category={category} />
          ))}
        </S.CategoryWrapper>
      ))}
    </S.CategoryContainer>
  ) : (
    <></>
  );
};

export default CategoryContainer;
