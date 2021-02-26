import quizAPI from "@/common/lib/api/quiz";
import InputBox from "@/component/input-box";
import RadioButton from "@/component/radio-button";
import quizbookAPI from "@/common/lib/api/quizbook";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import * as S from "./styles";

export interface QuizProps {
    quizbookId: string;
}

const MakeQuizContainer: React.FC<RouteComponentProps<QuizProps>> = ({
    match,
    history,
}) => {
    const quizbookId = Number(match.params.quizbookId);
    
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [isChoice, setIsChoice] = useState(true);
    const [isText, setIsText] = useState(true);

    const postQuiz = async () => {
        const quiz = await quizAPI.postQuiz(
            quizbookId,
            question,
            answer,
            isChoice,
            option1,
            option2,
            option3,
            option4,
            imageURL,
            description
        );
        return quiz;
    }

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
            <InputBox
              placeholder="문제를 입력해 주세요."
              setData={setQuestion}
            />
            <S.InputWarning>
              문제에서 답을 노출하는 경우 퀴즈가 삭제될 수 있어요.
            </S.InputWarning>
          </S.ProblemContainer>
        ) : (
          <S.ProblemContainer>
            <InputBox
              placeholder="문제를 입력해 주세요."
              setData={setQuestion}
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
            <InputBox
              placeholder="입력해 주세요."
              setData={setOption1}
            />
            <RadioButton
                num="1"
                answer={answer}
                setAnswer={setAnswer}
            />
            </S.InputContainer>
            <S.InputContainer>
            <InputBox
              placeholder="입력해 주세요."
              setData={setOption2}
            />
            <RadioButton
                num="2"
                answer={answer}
                setAnswer={setAnswer}
            />
            </S.InputContainer>
            <S.InputContainer>
            <InputBox
              placeholder="입력해 주세요."
              setData={setOption3}
            />
            <RadioButton
                num="3"
                answer={answer}
                setAnswer={setAnswer}
            />
            </S.InputContainer>
            <S.InputContainer>
            <InputBox
              placeholder="입력해 주세요."
              setData={setOption4}
            />
            <RadioButton
                num="4"
                answer={answer}
                setAnswer={setAnswer}
            />
            </S.InputContainer>
            <S.InputWarning>
              답안의 내용이 모두 같거나, 정당한 풀이 행위 외 답을 암시하는
              답안은 삭제될 수 있어요.
            </S.InputWarning>
          </S.AnswerContainer>
        ) : (
            <InputBox
              placeholder="답을 입력해 주세요."
              setData={setAnswer}
            />      
        )}
      </S.Container>

      <S.Container>
        <S.TitleContainer>
          <S.SubTitle>설명</S.SubTitle>
        </S.TitleContainer>
        <InputBox
              placeholder="퀴즈에 대한 설명을 입력해 주세요."
              setData={setDescription}
            />    
      </S.Container>
      <S.ButtonContainer>
        <S.SubmitButton onClick={postQuiz}>퀴즈 만들기</S.SubmitButton>
      </S.ButtonContainer>
    </S.Wrapper>
    )
}

export default MakeQuizContainer;