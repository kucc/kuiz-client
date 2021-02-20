import styled from "styled-components";
import { QuizBookRowProps, QuizTextProps } from "./types";

export const QuizBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 8rem;
  border-radius: 10px;
  background-color: #f2f2f2;
  border: 0.5px solid #969696;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);
  padding: 0.5rem 1.2rem 0rem 1.2rem;
`;

export const QuizBookRow = styled.div<QuizBookRowProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${(props) => props.height}rem;
  justify-content: space-between;
`;

export const QuizBookName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuizBookLike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuizCount = styled.div`
  display: flex;
  width: 15%;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0.5rem;
`;

export const SolvedCount = styled.div`
  display: flex;
  width: 40%;
  padding-left: 0.2rem;
  justify-content: flex-start;
  align-items: center;
`;

export const QuizBookOwner = styled.div`
  display: flex;
  vertical-align: middle;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
`;

export const QuizText = styled.div<QuizTextProps>`
  text-align: center;
  vertical-align: middle;
  font-size: 1.2rem;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

export const QuizBoldText = styled.div`
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 1.6rem;
`;
