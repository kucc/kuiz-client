import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const ProgressBarIcon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ProgressBarMan = styled.img`
  padding: 0.2rem;
  margin-top: 5rem;
  width: 4rem;
  height: 4rem;
`;

export const ProgressBarFlag = styled.img`
  padding: 0.2rem;
  margin-top: 5rem;
  width: 4rem;
  height: 4rem;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 2rem;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5rem;
`;

export const ProgressBarFiller = styled.div`
  height: 100%;
  background-color: ${THEME_COLOR.SECONDARY};
  border-radius: inherit;
  text-align: right;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;

export const ProgressBarLabel = styled.span`
  color: white;
  font-weight: bold;
`;
