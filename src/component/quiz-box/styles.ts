import styled from "styled-components";
import { QuizColumnProps } from "./types";

export const QuizWrapper = styled.div`
  display: flex;
  width: 30rem;
  height: 7rem;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  cursor: pointer;
  & + & {
    margin-top: 1.5rem;
  }
  text-decoration: none;
  color: black;
`;

export const QuizColumn = styled.div<QuizColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width}%;
`;

export const QuizInfo = styled.div`
  margin: auto;
  display: inline-block;
`;

export const QuizOption = styled.div`
  margin: auto;
  display: inline-block;

  color: #295ac2;
  border: 1px solid #295ac2;
  border-radius: 20%;
  padding: 2px 2px;
`;

export const QuizQuestion = styled.div`
  margin: auto;
  display: inline-block;
  padding-left: 10px;

  font-weight: 600;
  font-size: 1.6rem;

  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const QuizSetButton = styled.img`
  z-index: 1;
  padding: 10% 2% 0 10%;
  width: 50%;
  margin-left: auto;
`;

export const QuizDeleteButton = styled.img`
  padding: 10% 2% 0 10%;
  width: 50%;
  margin-left: auto;
`;
