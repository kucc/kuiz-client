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

interface QuizBookProps {
  active?: boolean;
}

export const ButtonFilter = styled.div<QuizBookProps>`
  width: auto;
  height: 3rem;
  background-color: ${(props) => (props.active ? "#d77e6a" : "#ffa18c")};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${THEME_COLOR.GRAY};
  cursor: pointer;
`;

export const DropDownFilterContainer = styled.div`
  align-items: center;
  justify-content: flex-end;
`;

export const Filter = styled.div`
  font-size: large;
  font-weight: bold;
  cursor: pointer;
`;

export const FilterText = styled.option`
  padding: 0.5rem 1rem;

  text-align: center;
  font-size: 1.5rem;
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
