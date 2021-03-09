import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  min-width: 400px;
  height: 100%;

  background-color: white;
  border-radius: 0.5rem;

  margin: 2rem 0rem;
  padding: 2rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 50%;
    margin: 2rem 0rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;

  margin: 1rem 0rem 0.7rem 0rem;
`;

export const SubTitle = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: 0rem 0.4rem;
`;

export const SubText = styled.div`
  width: 100%;
  font-size: 1.3rem;
  margin-bottom: 0.3rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
  }
`;

export const TypeOptions = styled.select`
  width: 100%;
  height: 4rem;

  font-size: 1.4rem;
  color: ${THEME_COLOR.PRIMARY};

  border: 1px solid ${THEME_COLOR.PRIMARY};
  border-radius: 0.7rem;

  padding: 0.8rem 0.8rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.6rem;
  }
`;

export const Option = styled.option`
  width: 100%;
  border: 1px solid ${THEME_COLOR.GRAYER};
`;

export const InputBox = styled.input`
  width: 100%;
  font-size: 1.4rem;
  height: 4rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  border-radius: 0.7rem;

  padding: 0.8rem 1rem;
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  font-size: 1.4rem;
  height: 30rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};
  background-color: white;

  border-radius: 0.7rem;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
`;

export const AnswerContainer = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputWarning = styled.div`
  width: 100%;
  font-size: 1.2rem;
  height: 3rem;

  outline: none;
  background-color: ${THEME_COLOR.GRAY};

  border-radius: 0.7rem;

  margin-top: 1rem;
  padding: 0.8rem 1rem;
`;

export const ProblemContainer = styled.div`
  width: 100%;
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImageButton = styled.button`
  width: 8rem;
  height: 3.5rem;
  margin: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  border-radius: 0.5rem;

  background-color: ${THEME_COLOR.PRIMARY};
  color: white;
  box-shadow: 3px 3px 3px 3px ${THEME_COLOR.GRAYER};

  font-size: 1.4rem;
  cursor: pointer;
`;

export const ImageWarning = styled.div`
  margin: 0.3rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MultipleChoiceInputBox = styled.input`
  width: 100%;
  font-size: 1.4rem;
  height: 4rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};

  border-radius: 0.7rem;

  padding: 0.8rem 1rem;
  margin: 0.4rem;
`;

export const CheckBox = styled.input`
  width: 2rem;
  height: 2rem;

  outline: none;
  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 1rem;
  background-color: ${(props) =>
    props.checked ? THEME_COLOR.PRIMARY : "white"};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: flex-end;

  margin: 2rem 0rem;
`;

export const SubmitButton = styled.button`
  width: 10rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  border-radius: 0.7rem;

  background-color: ${THEME_COLOR.PRIMARY};
  color: white;

  font-size: 1.4rem;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const PreviewImg = styled.img`
  width: 25rem;
  height: 20rem;
  margin: 1rem;
`;
