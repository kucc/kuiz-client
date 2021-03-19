import { QuizBookModel } from "@/common/model/quiz-book";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  editQuizBookAsync,
  getQuizBookwithQuizAsync,
  initQuizBookReducer,
} from "@/modules/quiz-book";
import { getCategoryAsync } from "@/modules/category";
import { showAlertModal } from "@/modules/modal";

export const useToggleEditing = (): { isEditing; toggleIsEditing } => {
  const [isEditing, setIsEditing] = useState<boolean>();
  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return { isEditing, toggleIsEditing };
};

export const useSetQuizBook = (
  quizBook: QuizBookModel | null
): {
  categoryId;
  titleContainer;
  selectCategory;
  setQuizBookInfo;
  handleTitleContainer;
} => {
  const dispatch = useDispatch();
  const titleContainer = useRef<HTMLInputElement>(null);
  const [categoryId, setCategoryId] = useState<number>();

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(parseInt(e.target.value));
  };

  const setQuizBookInfo = () => {
    return {
      categoryId: categoryId ? categoryId : quizBook?.categoryId,
      title: titleContainer.current
        ? titleContainer.current.value
        : quizBook?.title,
    };
  };

  const handleTitleContainer = () => {
    if (!titleContainer.current) {
      return;
    }

    titleContainer.current.disabled = !titleContainer.current.disabled;
    titleContainer.current.focus();

    if (titleContainer.current.value.length > 30) {
      dispatch(showAlertModal("제목은 30글자 이하로 작성해주세요."));
      titleContainer.current.value = quizBook?.title || "";
      return;
    }
  };

  return {
    categoryId,
    titleContainer,
    selectCategory,
    setQuizBookInfo,
    handleTitleContainer,
  };
};

export const useUpdateQuizBook = (
  quizBook: QuizBookModel | null,
  quizBookId: number
): {
  categoryId;
  titleContainer;
  selectCategory;
  handleTitleContainer;
  getQuizBook;
  editQuizBook;
} => {
  const dispatch = useDispatch();
  const {
    categoryId,
    titleContainer,
    setQuizBookInfo,
    selectCategory,
    handleTitleContainer,
  } = useSetQuizBook(quizBook);

  const getQuizBook = () => {
    dispatch(initQuizBookReducer());
    dispatch(getCategoryAsync.request());
    dispatch(getQuizBookwithQuizAsync.request({ quizBookId }));
  };

  const editQuizBook = (isCompleted: boolean, history) => {
    if (!quizBook) return;

    const newInfo = setQuizBookInfo();
    console.log(newInfo);
    dispatch(
      editQuizBookAsync.request({
        quizBookId,
        body: { ...quizBook, ...newInfo, completed: isCompleted },
        history,
      })
    );
  };

  return {
    categoryId,
    titleContainer,
    selectCategory,
    handleTitleContainer,
    getQuizBook,
    editQuizBook,
  };
};
