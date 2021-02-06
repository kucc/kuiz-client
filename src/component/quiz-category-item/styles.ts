import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "../../asset/constant";

export const QuizCategoryItem = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const QuizCategoryItemContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 20rem;
  height: 4.3rem;
  background-color: #5a5a66;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: ${THEME_COLOR.PRIMARY};
    transform: scale(1.2) perspective(0.7rem);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const QuizCategoryIcon = styled.img``;

export const QuizCategoryTitle = styled.div`
  text-decoration: none;
  color: #fbfffb;
  font-weight: 500;
  font-size: 2rem;
  border: none;
  border-radius: 5px;
`;
