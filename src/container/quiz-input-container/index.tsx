import React, { useState, useEffect, useRef, useMemo } from "react";
import { RootState } from "@/modules";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { QuizInputContainerProps } from "./types";
import { editQuizAsync, getQuizAsync, postQuizAsync } from "@/modules/quiz";
import { useFetchQuiz, useMakeQuiz, useQuizTypeRef } from "./hooks";
import QuizInputOption from "@/component/quiz-input/quiz-input-option";

const QuizInputContainer = ({
  quizBookId,
  quizId,
}: QuizInputContainerProps) => {
  const { data, body, setBody } = useFetchQuiz(quizId);
  const { isChoiceContainer, isTextContainer } = useQuizTypeRef(data);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (quizId) dispatch(editQuizAsync.request({ quizId, body }));
    if (quizBookId) dispatch(postQuizAsync.request({ quizBookId, body }));
  };

  const handleQuizType = (event) => {
    const isText = parseInt(event.target.value);
    let imageURL = "/";
    if (data?.imageURL) {
      imageURL = data.imageURL;
    }

    if (isText) {
      setBody({ ...body, imageURL: "" });
      return;
    }
    setBody({ ...body, imageURL });
  };

  const handleIsChoice = (isChoice: number) => {
    if (isChoice) {
      //객관식
      setBody({
        ...body,
        isChoice: 1,
        answer: (data && data.isChoice && data.answer) || "",
        ["option" + data?.answer]: body?.answer,
      });
    } else {
      // 주관식
      setBody({
        ...body,
        isChoice: 0,
        answer:
          (data && !data.isChoice && data.answer) ||
          (data && data.isChoice && data["option" + data?.answer]) ||
          "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      });
    }
  };

  const handleInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    if (key === "isChoice") {
      handleIsChoice(parseInt(value));
      return;
    }
    setBody({ ...body, [key]: value });
  };

  console.log(body);

  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <S.SubTitle>퀴즈 유형</S.SubTitle>
        </S.TitleContainer>
        <S.SubContainer>
          <S.TypeContainer>
            <S.SubText>문제 유형</S.SubText>
            <S.TypeOptions
              onChange={(e) => handleQuizType(e)}
              ref={isTextContainer}
            >
              <S.Option value={1}>텍스트</S.Option>
              <S.Option value={0}>이미지</S.Option>
            </S.TypeOptions>
          </S.TypeContainer>
          <S.TypeContainer>
            <S.SubText>답안 유형</S.SubText>
            <S.TypeOptions
              name="isChoice"
              onChange={(e) => handleInput(e)}
              ref={isChoiceContainer}
            >
              <S.Option value={1}>객관식</S.Option>
              <S.Option value={0}>주관식</S.Option>
            </S.TypeOptions>
          </S.TypeContainer>
        </S.SubContainer>
      </S.Container>

      <S.Container>
        <S.TitleContainer>
          <S.SubTitle>문제</S.SubTitle>
        </S.TitleContainer>
        <S.ProblemContainer>
          <S.InputBox
            name="question"
            placeholder="문제를 입력해 주세요."
            onChange={(e) => handleInput(e)}
            defaultValue={data?.question}
          />
          {body?.imageURL && (
            <S.ImageBox>
              <S.ImageButton>이미지 등록</S.ImageButton>
              <S.ImageWarning>파일형식: JPG,PNG,GIF</S.ImageWarning>
              <S.ImageWarning>
                권장사이즈: 가로 335px, 세로 188px
              </S.ImageWarning>
            </S.ImageBox>
          )}
          <S.InputWarning>
            문제에서 답을 노출하는 경우 퀴즈가 삭제될 수 있어요.
          </S.InputWarning>
        </S.ProblemContainer>
      </S.Container>

      <S.Container>
        <S.TitleContainer>
          <S.SubTitle>답안</S.SubTitle>
        </S.TitleContainer>
        {body?.isChoice ? (
          <S.AnswerContainer>
            {["1", "2", "3", "4"].map((index) => {
              return (
                <QuizInputOption
                  key={index}
                  quiz={data}
                  index={index}
                  handleInput={handleInput}
                />
              );
            })}
            <S.InputWarning>
              답안의 내용이 모두 같거나, 정당한 풀이 행위 외 답을 암시하는
              답안은 삭제될 수 있어요.
            </S.InputWarning>
          </S.AnswerContainer>
        ) : (
          <S.InputBox
            placeholder="답을 입력해 주세요."
            name="answer"
            onChange={(e) => handleInput(e)}
            defaultValue={
              data?.isChoice ? data["option" + data?.answer] : data?.answer
            }
          />
        )}
      </S.Container>

      <S.Container>
        <S.TitleContainer>
          <S.SubTitle>설명</S.SubTitle>
        </S.TitleContainer>
        <S.InputBox
          placeholder="퀴즈에 대한 설명을 입력해 주세요."
          name="description"
          onChange={(e) => handleInput(e)}
          defaultValue={data?.description}
        />
      </S.Container>
      <S.ButtonContainer>
        <S.SubmitButton onClick={handleSubmit}>퀴즈 만들기</S.SubmitButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default QuizInputContainer;
