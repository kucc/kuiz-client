import styled from "styled-components";
import { spin } from "@common/keyframe";
import { UserRankContainerProps } from "./types";
import { BREAKPOINT, THEME_COLOR } from "@/asset/constant";

export const UserRankContainer = styled.div<UserRankContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: absolute;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.isSelfRank ? "#ffee93" : `${THEME_COLOR.GRAY}`)};
  width: 35rem;
  height: ${(props) => (props.isSelfRank ? "7.6rem" : "7rem")};
  padding: 0.8rem 1.5rem 0.8rem 1.5rem;
  border-bottom: 0.5px ${THEME_COLOR.GRAY} groove;
  margin-bottom: 0.2rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 45rem;
    padding: 0.8rem 2.5rem 0.8rem 1.5rem;
  }

`;

export const RankNumberColumn = styled.div`
  display: flex;
  align-items: center;
  width: 5%;
  /* margin-left: 0.5rem; */
`;

export const RankText = styled.div`
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const RankIconColumn = styled.div`
  display: flex;
  align-items: center;
  width: 7%;
  margin-left: 0.3rem;
  margin-right: 3rem;
`;

export const RankIcon = styled.img`
  margin-top: 0.3rem;
  margin-left: 1.5rem;
  height: 3.7rem;
  width: 3.7rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-left: 2.6rem;
  }
`;

export const RankUserNameColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;
  width: 57.5%;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-left: 5rem;
  }
`;

export const UserName = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
  }
`;

export const RankPointColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 10%;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-right: 0.9rem;
  }
`;
export const UserPoint = styled.div`
  font-size: 1.3rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
  }
`;
export const RankCoinColumn = styled.div`
  display: flex;
  align-items: center;
  width: 5%;
`;

export const PointImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  animation: ${spin} 1.5s linear infinite;
`;
