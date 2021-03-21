import styled from "styled-components";
import { BREAKPOINT } from "@/asset/constant";

export const MedalColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MedalLog = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  margin: 0rem 1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 6rem;
    height: 6rem;
    margin: 0rem 3rem;
  }
`;

export const TopUserNameContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 10rem;
  height: 100%;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const TopUserName = styled.div`
  font-size: 1.4rem;
  font-weight: 700;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.6rem;
  }
`;
