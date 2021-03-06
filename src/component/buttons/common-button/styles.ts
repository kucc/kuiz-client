import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const StyledCommonButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${THEME_COLOR.PRIMARY};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }
`;

export const ButtonText = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fbfffb;
  font-weight: 500;
`;
