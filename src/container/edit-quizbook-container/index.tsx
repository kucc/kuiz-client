import React, { ReactElement, useState } from "react";
import * as S from "./styles";
import AddQuizContainer from "@/container/add-quiz-container/index";
import { useSelector } from "react-redux";
import { RootState } from "@/modules";
import CustomAlert from "@/component/custom-alert";
import QuizCategorySelect from "@/component/option";
import { useUpdateQuizBook } from "./hooks";
import { QuizBookwithQuizModel } from "@/common/model/quiz-book";
import { useHistory } from "react-router";

interface EditQuizBookProps {
  quizBook: QuizBookwithQuizModel;
  quizBookId: number;
}

const EditQuizBookContainer = ({
  quizBook,
  quizBookId,
}: EditQuizBookProps): ReactElement => {
  const history = useHistory();
  const [isEditing, setIsEditing] = useState<boolean>();
  const { data: category } = useSelector((state: RootState) => state.category);

  const {
    categoryId,
    titleContainer,
    handleTitleContainer,
    selectCategory,
    editQuizBook,
  } = useUpdateQuizBook(quizBook, quizBookId);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
    handleTitleContainer();

    if (isEditing && quizBook) {
      editQuizBook(quizBook.completed, null);
    }
  };

  const submitQuizBook = () => {
    editQuizBook(true, history);
    alert("제출되었습니다.");
  };

  const saveQuizBook = () => {
    editQuizBook(false, history);
    alert("임시저장되었습니다.");
  };

  return (
    <>
      {quizBook && (
        <S.QuizBook>
          <S.QuizBookRow>
            <S.Label>카테고리</S.Label>
            {category && (
              <QuizCategorySelect
                defaultOption={categoryId ? categoryId : quizBook.categoryId}
                options={category}
                onChange={selectCategory}
              />
            )}
          </S.QuizBookRow>

          <S.QuizBookRow>
            <S.Label>제목</S.Label>
            <S.TitleInputContainer>
              <S.TitleInput
                defaultValue={quizBook.title}
                ref={titleContainer}
                disabled
              />
              {isEditing ? (
                <S.editButton
                  src={"/src/asset/check.png"}
                  onClick={toggleIsEditing}
                />
              ) : (
                <S.editButton
                  src={"/src/asset/pencil.svg"}
                  onClick={toggleIsEditing}
                />
              )}
            </S.TitleInputContainer>
          </S.QuizBookRow>

          <S.QuizBookRow>
            <S.Label>문제</S.Label>
            <AddQuizContainer
              quizList={quizBook.quiz}
              quizBookId={quizBookId}
            />
          </S.QuizBookRow>

          <S.ButtonContainer>
            {!quizBook.completed && (
              <S.SaveButton onClick={saveQuizBook}>임시저장</S.SaveButton>
            )}
            <S.SubmitButton onClick={submitQuizBook}>제출</S.SubmitButton>
          </S.ButtonContainer>
        </S.QuizBook>
      )}
      <CustomAlert redirect="" />
    </>
  );
};

export default EditQuizBookContainer;
