import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "../../asset/constant";

export const RankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
`;

export const SelfRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0rem 2rem 0rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin: 1rem 0rem 3rem 0rem;  
  }
`;

export const TotalRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TopThreeContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  background-color: white;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
