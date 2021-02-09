import React, { useCallback, useState } from "react";
import Layout from "@component/common/layout/index";
import { STATIC_URL } from "@/asset/constant";

import * as S from "./styles";

const MakeQuizPage = () => {
  const [isText, setIsText] = useState(true);
  const [isChoice, setIsChoice] = useState(true);
  const [quiz, setQuiz] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [checked, setChecked] = useState(true);
  const [description, setDescription] = useState("");

  return (
    <Layout>
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
                <S.Option >객관식</S.Option>
                <S.Option >주관식</S.Option>
                </S.TypeOptions>
            </S.TypeContainer>
          </S.SubContainer>
        </S.Container>

        <S.Container>
          <S.TitleContainer>
            <S.SubTitle>문제</S.SubTitle>
          </S.TitleContainer>
          {isText? (
            <S.InputBox
            placeholder="문제를 입력해 주세요."
            onChange={(e) => {
              setQuiz(e.target.value);
            }}
          />            
          ):(<h1>이미지 문제 넣기!</h1>)}

        </S.Container>

        <S.Container>
          <S.TitleContainer>
            <S.SubTitle>답안</S.SubTitle>
          </S.TitleContainer>
          {isChoice? (
            <S.AnswerContainer>
              <S.InputContainer>
                <S.MultipleChoiceInputBox
                      placeholder="입력해 주세요."
                      onChange={(e) => {
                        setOption1(e.target.value);
                      }}
                    />
                <S.CheckBox 
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => setChecked(!checked)}/>              
              </S.InputContainer>
              <S.InputContainer>
                <S.MultipleChoiceInputBox
                      placeholder="입력해 주세요."
                      onChange={(e) => {
                        setOption2(e.target.value);
                      }}
                    />
                <S.CheckBox 
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => setChecked(!checked)}/>
              </S.InputContainer>
              <S.InputContainer>
                <S.MultipleChoiceInputBox
                      placeholder="입력해 주세요."
                      onChange={(e) => {
                        setOption3(e.target.value);
                      }}
                    />
                <S.CheckBox 
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => setChecked(!checked)}/>
              </S.InputContainer>
              <S.InputContainer>
                <S.MultipleChoiceInputBox
                      placeholder="입력해 주세요."
                      onChange={(e) => {
                        setOption4(e.target.value);
                      }}
                    />
                <S.CheckBox 
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => setChecked(!checked)}/>
              </S.InputContainer>
            </S.AnswerContainer>
          ):(
            <S.InputBox
            placeholder="답을 입력해 주세요."
            onChange={(e) => {
              setDescription(e.target.value);
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
        <S.SubmitButton>퀴즈 만들기</S.SubmitButton>        
        </S.ButtonContainer>
      </S.Wrapper>
    </Layout>
  );
};

export default MakeQuizPage;
