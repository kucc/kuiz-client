import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "../../asset/constant";
import { PointBarProps } from "./types";

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem 4rem 2rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30rem;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 50%;
  }
`;


export const UserNameRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 22rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
  }
`;

export const UserBasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-right: 1rem;
`;

export const UserNameContainer = styled.div``;

export const UserName = styled.div`
  font-size: 1.6rem;
  margin-right: 1.2rem;
`;

export const UserEmail = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 0.5rem;
  @media only screen {
    font-size: 1.5rem;
  }
`;

export const UserPoint = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${THEME_COLOR.PRIMARY};
  margin: 0.5rem 0rem 0.5rem;
  @media only screen {
    font-size: 2.4rem;
  }
`;

export const IconContainer = styled.div`
  margin-left: 1rem;
`;

export const LevelIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 7rem;
    height: 7rem;
  }
`;

export const PointBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 30rem;
`;
export const PointBarWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
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
  font-size: 1.4rem;
  font-weight: bold;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const UpdateButtonContainer = styled.div`
  display: flex;
  height: 1.2rem;
  width: 13%;
  align-items: center;
  justify-content: flex-end;
  img {
    height: 100%;
  }
  cursor: pointer;
`;
