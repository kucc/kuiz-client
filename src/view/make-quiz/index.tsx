import React, { useCallback, useState } from "react";
import { STATIC_URL } from "@/asset/constant";
import { RouteComponentProps } from "react-router-dom";

import * as S from "./styles";
import { useMakeQuiz } from './hooks';


const MakeQuizPage = ({history, match}: RouteComponentProps) => {
  const quizBookId = match.params["quizbookId"];
  if (!parseInt(quizBookId)) throw new Error("잘못된 URL");
  
  const {
    question,
    setQuestion,
    answer,
    setAnswer,
    option1,
    setOption1,
    option2,
    setOption2,
    option3,
    setOption3,
    option4,
    setOption4,
    description,
    setDescription,
    isChoice,
    setIsChoice,
    isText,
    setIsText,
    handleUpload,
  } = useMakeQuiz(quizBookId);


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
              onChange={() => {
                setIsText(!isText);
              }}
            >
              <S.Option>텍스트</S.Option>
              <S.Option>이미지</S.Option>
            </S.TypeOptions>
          </S.TypeContainer>
          <S.TypeContainer>
            <S.SubText>답안 유형</S.SubText>
            <S.TypeOptions
              onChange={() => {
                setIsChoice(!isChoice);
              }}
            >
              <S.Option>객관식</S.Option>
              <S.Option>주관식</S.Option>
            </S.TypeOptions>
          </S.TypeContainer>
        </S.SubContainer>
      </S.Container>

      <S.Container>
        <S.TitleContainer>
          <S.SubTitle>문제</S.SubTitle>
        </S.TitleContainer>
        {isText ? (
          <S.ProblemContainer>
            <S.InputBox
              placeholder="문제를 입력해 주세요."
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
            <S.InputWarning>
              문제에서 답을 노출하는 경우 퀴즈가 삭제될 수 있어요.
            </S.InputWarning>
          </S.ProblemContainer>
        ) : (
          <S.ProblemContainer>
            <S.InputBox
              placeholder="문제를 입력해 주세요."
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />

            <S.ImageBox>
              <S.ImageButton>이미지 등록</S.ImageButton>
              <S.ImageWarning>파일형식: JPG,PNG,GIF</S.ImageWarning>
              <S.ImageWarning>
                권장사이즈: 가로 335px, 세로 188px
              </S.ImageWarning>
            </S.ImageBox>

            <S.InputWarning>
              문제에서 답을 노출하는 경우 퀴즈가 삭제될 수 있어요.
            </S.InputWarning>
          </S.ProblemContainer>
        )}
      </S.Container>

      <S.Container>
        <S.TitleContainer>
          <S.SubTitle>답안</S.SubTitle>
        </S.TitleContainer>
        {isChoice ? (
          <S.AnswerContainer>
            <S.InputContainer>
              <S.MultipleChoiceInputBox
                placeholder="입력해 주세요."
                onChange={(e) => {
                  setOption1(e.target.value);
                }}
              />
              <S.CheckBox
                type="radio"
                value="1"
                checked= {answer === "1"}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.MultipleChoiceInputBox
                placeholder="입력해 주세요."
                onChange={(e) => {
                  setOption2(e.target.value);
                }}
              />
              <S.CheckBox
                type="radio"
                value="2"
                checked= {answer === "2"}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.MultipleChoiceInputBox
                placeholder="입력해 주세요."
                onChange={(e) => {
                  setOption3(e.target.value);
                }}
              />
              <S.CheckBox
                type="radio"
                value="3"
                checked= {answer === "3"}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.MultipleChoiceInputBox
                placeholder="입력해 주세요."
                onChange={(e) => {
                  setOption4(e.target.value);
                }}
              />
              <S.CheckBox
                type="radio"
                value="4"
                checked= {answer === "4"}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </S.InputContainer>
            <S.InputWarning>
              답안의 내용이 모두 같거나, 정당한 풀이 행위 외 답을 암시하는
              답안은 삭제될 수 있어요.
            </S.InputWarning>
          </S.AnswerContainer>
        ) : (
          <S.InputBox
            placeholder="답을 입력해 주세요."
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
        )}
      </S.Container>

      <S.Container>
        <S.TitleContainer>
          <S.SubTitle>설명</S.SubTitle>
        </S.TitleContainer>
        <S.InputBox
          placeholder="퀴즈에 대한 설명을 입력해 주세요."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </S.Container>
      <S.ButtonContainer>
        <S.SubmitButton onClick={handleUpload}>퀴즈 만들기</S.SubmitButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default MakeQuizPage;
