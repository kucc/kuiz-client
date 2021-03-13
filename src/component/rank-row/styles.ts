import styled from "styled-components";
import { spin } from "@common/keyframe";
import { UserRankContainerProps } from "./types";
import { THEME_COLOR } from "@/asset/constant";

export const UserRankContainer = styled.div<UserRankContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: absolute;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.isSelfRank ? "#ffee93" : `${THEME_COLOR.GRAY}`)};
  width: 38rem;
  height: ${(props) => (props.isSelfRank ? "7.6rem" : "7rem")};
  padding: 0.8rem 2.5rem 0.8rem 1.5rem;
  border-bottom: 0.5px ${THEME_COLOR.GRAY} groove;
  box-shadow: 0px 0px 5px -2px gray;

`;

export const RankNumberColumn = styled.div`
  display: flex;
  align-items: center;
  width: 5%;
  margin-left: 0.5rem;
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
  margin-left: 2.6rem;
  height: 3.7rem;
  width: 3.7rem;
`;

export const RankUserNameColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5rem;
  width: 57.5%;
`;

export const UserName = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const RankPointColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 10%;
  margin-right: 0.9rem;
`;
export const UserPoint = styled.div`
  font-size: 1.5rem;
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
