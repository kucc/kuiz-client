import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 0rem 2rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 50%;
    padding: 0rem 5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2rem;
  }
`;

export const SaveButton = styled.button`
  width: 10rem;
  height: 4rem;

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
  width: 10rem;
  height: 4rem;

  margin-left: 3rem;

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
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 2rem;
  margin-left: 30rem;
`;
