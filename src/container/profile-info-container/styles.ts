import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "../../asset/constant";
import { PointBarProps } from "./types";

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  padding: 1rem 2rem 1rem 2rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const UserBasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-right: 1rem;
  padding: 1rem 2rem 0rem 0rem;
`;

export const UserName = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
  }
`;

export const UserEmail = styled.div`
  font-size: 1.6rem;
  margin-top: 0.5rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
  }
`;

export const UserPoint = styled.div`
  font-size: 2.5rem;
  color: ${THEME_COLOR.PRIMARY};
  margin: 0.5rem 0rem 0.5rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2.4rem;
  }
`;

export const UserLevelWrapper = styled.div`
  margin-left: 1rem;
  padding: 1rem 2rem 1rem 0rem;
`;

export const LevelLogo = styled.img`
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
    width: 10rem;
  }
`;

export const ProfilePointBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 50%;
  padding: 1rem 2rem 1rem 0rem;
`;
export const PointBarWrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem 1rem 0rem;
`;
export const BackgroundBar = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${THEME_COLOR.GRAYER};
  text-align: center;
  line-height: 50px;
`;

export const PointBar = styled.div<PointBarProps>`
  width: ${(props) => props.width}%;
  height: 1rem;
  background-color: ${THEME_COLOR.PRIMARY};
  text-align: center;
  line-height: 50px;
`;

export const Point = styled.div`
  align-self: flex-end;
  font-size: 1.6rem;
`;
