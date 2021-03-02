import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import { editQuizAsync, postQuizAsync } from "@/modules/quiz";
import {
  defaultQuizOption,
  saveAnswer,
  useFetchQuiz,
  useQuizTypeRef,
} from "./hooks";
import QuizInputOption from "@/component/quiz-input/quiz-input-option";
import {
  IS_CHOICE_KEY,
  NULL_STRING,
  optionIndexArray,
} from "@/common/lib/quiz-constants";

import { useHistory } from "react-router-dom";
import parseBool from "@/common/lib/parse-bool";
import checkQuizInput from "@/common/lib/check-quiz-input";
export interface QuizInputProps {
  quizBookId: number | null;
  quizId: number | null;
}

const QuizInputContainer: React.FC<QuizInputProps> = ({
  quizBookId,
  quizId,
}) => {
  const history = useHistory();
  const { data, body, setBody } = useFetchQuiz(quizId);
  const { isChoiceContainer, isTextContainer } = useQuizTypeRef(data);
  const { shortAnswer, choiceAnswer } = useMemo(() => saveAnswer(data), [data]);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    try {
      checkQuizInput(body);
    } catch {
      return;
    }
    if (quizId) dispatch(editQuizAsync.request({ quizId, body }));
    if (quizBookId) dispatch(postQuizAsync.request({ quizBookId, body }));
    history.push("/addquiz");
  };

  const handleQuizType = (event) => {
    const isText = parseInt(event.target.value);
    if (isText) {
      setBody({ ...body, imageURL: NULL_STRING });
      return;
    }
    setBody({ ...body, imageURL: data?.imageURL || "/" });
  };

  const handleIsChoice = (isChoice: boolean) => {
    if (!data) {
      setBody({ ...body, ...defaultQuizOption, isChoice, answer: NULL_STRING });
      return;
    }
    if (data && isChoice) {
      setBody({ ...data, isChoice });
      return;
    }
    if (data && !isChoice) {
      setBody({
        ...data,
        ...defaultQuizOption,
        isChoice,
        answer: shortAnswer || choiceAnswer || NULL_STRING,
      });
      return;
    }
  };

  const handleInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    if (key === IS_CHOICE_KEY) {
      handleIsChoice(parseBool(value));
      return;
    }
    setBody({ ...body, [key]: value });
  };

  let fileInput;
  const [previewURL, setPreviewURL] = useState("");
  const fileHandler = (e) => {
    const file = e.target.files[0];
    let preview = URL.createObjectURL(file);
    setPreviewURL(preview);
  };

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
          {body?.imageURL &&
            (!previewURL ? (
              <S.ImageBox>
                <label>
                  <S.ImageInput
                    type="file"
                    accept="image/jpeg, image/jpg"
                    onChange={fileHandler}
                    ref={(f) => {
                      fileInput = f;
                    }}
                  />
                  <S.ImageButton onClick={() => fileInput.click()}>
                    이미지 등록
                  </S.ImageButton>
                </label>
                <S.ImageWarning>파일형식: JPG,PNG,GIF</S.ImageWarning>
                <S.ImageWarning>
                  권장사이즈: 가로 335px, 세로 188px
                </S.ImageWarning>
              </S.ImageBox>
            ) : (
              <S.ImageBox>
                <S.PreviewImg src={previewURL} />
                <label>
                  <S.ImageInput
                    type="file"
                    accept="image/jpeg, image/jpg"
                    onChange={fileHandler}
                    ref={(f) => {
                      fileInput = f;
                    }}
                  />
                  <S.ImageButton onClick={() => fileInput.click()}>
                    이미지 등록
                  </S.ImageButton>
                </label>
              </S.ImageBox>
            ))}
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
            {optionIndexArray.map((index) => {
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
            defaultValue={data?.isChoice ? choiceAnswer : shortAnswer}
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
