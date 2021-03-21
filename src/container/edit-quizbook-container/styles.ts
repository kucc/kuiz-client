import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const QuizBook = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 900px) {
    width: 70%;
  }
`;

export const QuizBookRow = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 5%;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;

  font-size: 1.3rem;
  color: #525151;
`;

export const QuizBookPage = styled.div`
  width: 25%;
  height: 3.4rem;

  display: flex;
  align-items: center;

  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2rem;
  }
`;

export const TitleInputContainer = styled.div`
  height: 4rem;
  width: 100%;

  margin-bottom: 1.5rem;
  padding-left: 1rem;
  font-size: 1.6rem;

  display: grid;
  grid-template-columns: 90% 10%;

  border: 1px solid ${THEME_COLOR.PRIMARY};
  border-radius: 0.7rem;

  opacity: 0.8;
`;

export const TitleInput = styled.input`
  height: 95%;

  margin-bottom: 1.5rem;
  border: transparent;
  border-radius: 0.7rem;

  color: ${THEME_COLOR.PRIMARY};
`;

export const editButton = styled.img`
  margin-top: 0.8rem;
  height: 2rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  margin-top: 3rem;
`;

export const SaveButton = styled.button`
  width: 9rem;
  height: 3.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1.5px transparent;
  border-color: ${THEME_COLOR.PRIMARY};
  border-radius: 0.7rem;

  background-color: white;
  color: ${THEME_COLOR.PRIMARY};

  font-size: 1.4rem;
`;

export const SubmitButton = styled.button`
  width: 9rem;
  height: 3.8rem;
  margin-left: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: solid 1.5px transparent;
  border-radius: 0.7rem;

  background-color: ${THEME_COLOR.PRIMARY};
  color: white;

  font-size: 1.4rem;
`;

export const Title = styled.div`
  width: 55rem;
  height: 3.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem 0;
  padding-left: 0.2rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2rem;
  }
`;
