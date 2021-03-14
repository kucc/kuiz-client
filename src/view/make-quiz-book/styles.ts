import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@asset/constant";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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

  border-radius: 0.8rem;
`;

export const AgreementContainer = styled.div`
  display: flex;
  align-items: center;

  height: 5rem;
`;

export const Agree = styled.div`
  width: 100%;
  font-size: 1.3rem;
`;

export const CategoryContainer = styled.div`
  width: 60%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameContainer = styled.div`
  width: 60%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Warning = styled.div`
  padding: 3rem 2rem;
  height: 10rem;
  font-size: 1.5rem;
  font-weight: bold;
  width: 35rem;
  background-color: ${THEME_COLOR.GRAY};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  outline: none;
  text-align: center;
  border-radius: 0.7rem;
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  margin-left: 30rem;
`;
