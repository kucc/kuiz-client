import styled from "styled-components";
import { THEME_COLOR, BREAKPOINT } from "@asset/constant";
import { QuizProgressBarProps } from "./types";

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 35%;
  }
`;

export const ProgressBarIcon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: ${(props: QuizProgressBarProps) => props.completed}%;
`;

export const ProgressBarMan = styled.img`
  padding: 0.2rem;
  margin-top: 5rem;
  width: 4rem;
  height: 4rem;
`;

export const ProgressBarFlag = styled.img`
  padding: 0.2rem;
  margin-top: 5rem;
  width: 4rem;
  height: 4rem;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 2rem;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5rem;
`;

export const ProgressBarFiller = styled.div`
  height: 100%;
  background-color: ${THEME_COLOR.SECONDARY};
  border-radius: inherit;
  text-align: right;
  width: ${(props: QuizProgressBarProps) => props.completed}%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  transition: width 1s;
`;

export const ProgressBarLabel = styled.span`
  color: white;
  font-weight: bold;
`;
