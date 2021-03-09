import React from "react";
import CategoryModel from "@/common/model/category";

export interface QuizCategorySelectProps {
  options: CategoryModel[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
