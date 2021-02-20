import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";
import { FilterColumnProps } from "./types";

export const QuizBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const SearchColumn = styled.div`
  display: flex;
  width: 30rem;
  margin-bottom: 1rem;
`;

export const CommonButtonWrapper = styled.div`
  width: 7rem;
  margin-left: 1rem;
`;

export const FilterColumn = styled.div<FilterColumnProps>`
  display: flex;
  width: 30rem;
  justify-content: ${(props) => props.align};
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  & + & {
    border-top: 0.7px solid ${THEME_COLOR.BLACK};
  }
`;

export const ButtonFilter = styled.div`
  width: auto;
  padding: 0.5rem 1rem;
  height: 3rem;
  background-color: #ffa18c;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${THEME_COLOR.GRAY};
  cursor: pointer;
`;

export const Filter = styled.div`
  font-size: large;
  font-weight: bold;
  cursor: pointer;
`;

export const FilterText = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;
