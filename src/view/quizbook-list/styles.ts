import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { THEME_COLOR } from "@asset/constant";

export const QuizBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const QuizBookButton = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 20rem;
  height: 4.5rem;
  background-color: ${THEME_COLOR.GRAYER};
  margin-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
