import React, { useEffect, useState } from "react";
import CategoryModel from "../../common/model/category";
import QuizCategoryItem from "../../component/quiz-category-item/index";
import QuizCategoryTitle from "../../component/quiz-category-title/index";
import { getMokdata } from "./mok-data";
import { CategoryListType } from "./types";
import * as S from "./styles";

const CategoryContainer = () => {
  const categoryList = {} as CategoryListType;
  const [categoryData, setCategoryData] = useState([] as CategoryModel[]);

  const getCategoryList = async () => {
    const mokData = await getMokdata();
    setCategoryData(mokData);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  categoryData.forEach((category) => {
    const categoryArray = categoryList[category.classification];
    if (Array.isArray(categoryArray)) {
      categoryList[category.classification] = [...categoryArray, category];
    } else {
      categoryList[category.classification] = [category];
    }
  });
  const titles = Object.keys(categoryList);

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
    <h1>로딩중</h1>
  );
};

export default CategoryContainer;
