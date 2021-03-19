import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "../../asset/constant";

export const RankWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelfRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0rem 3rem 0rem;
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 1px solid ${THEME_COLOR.GRAYER}; */
  border-radius: 0.5rem;
  background-color: white;
  padding: 1.4rem;
  /* box-shadow: 0px 0px 5px -2px gray; */
`;
