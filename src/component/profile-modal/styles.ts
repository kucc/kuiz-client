import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "../../asset/constant";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 1.5rem 2rem;
`;


export const LevelIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const CancelIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.7;

  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalTitle = styled.div`
  width: 100%;

  font-size: 2rem;
  font-weight: bold;

  margin: 1rem 0rem 1.5rem 0rem;
`;

export const LevelContainer = styled.div`
  display: flex;
  width: 100%;

  padding: 0.8rem;
  margin-bottom: 1.5rem;

  box-shadow: 0px 0px 5px -2px gray;
  border-radius: 0.5rem;
`;

export const LevelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-left: 2rem;
`;

export const Level = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

export const LevelDescription = styled.div`
  font-size: 1.3rem;
`;