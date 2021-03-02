import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const ModalHeader = styled.div`
  background-color: ${THEME_COLOR.PRIMARY};
  width: 100%;
  height: 3rem;
`;

export const ModalText = styled.div`
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ModalConfirmButton = styled.button`
  width: 6rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  color: ${THEME_COLOR.PRIMARY};
  font-size: 1.4rem;
`;
