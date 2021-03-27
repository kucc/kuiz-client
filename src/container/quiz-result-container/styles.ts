import styled from "styled-components";
import { BREAKPOINT } from "@asset/constant";
import { THEME_COLOR } from "@asset/constant";
import { Link } from "react-router-dom";

export const QuizResultContainer = styled.div`
  width: 100%;
  height: calc(100vh - 12rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: calc(100vh - 20rem);
  }
`;

export const QuizResultWrapper = styled.div`
  width: 80%;
  padding: 3rem;
  height: 60%;
  border-radius: 5rem;
  background-color: #eaeaea;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 40%;
    height: 85%;
    padding: 7rem;
  }
`;

export const QuizResultScore = styled.div`
  font-size: 3rem;
  font-weight: 800;
`;

export const MainPageButton = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  width: 10rem;
  height: 3.5rem;
  background-color: ${THEME_COLOR.PRIMARY};
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;
