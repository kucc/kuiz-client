import styled from "styled-components";
import { THEME_COLOR } from "../../asset/constant";

export const SelfRankContainer = styled.div`
  margin: 1rem 0rem 3rem 0rem;
`;

export const TotalRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TopThreeContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction: row;
  border: 1px solid ${THEME_COLOR.GRAYER};
  border-radius: 0.5rem;
  background-color: ${THEME_COLOR.GRAY};
  padding: 1.4rem;
  box-shadow: 0px 0px 5px -2px gray;
`;
