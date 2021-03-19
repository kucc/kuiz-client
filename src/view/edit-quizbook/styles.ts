import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 1rem 2rem;
  background-color: white;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 50%;
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
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem 0;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2rem;
  }
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

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  margin-top: 3rem;
`;
