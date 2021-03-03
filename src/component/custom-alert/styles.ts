import styled from "styled-components";
import { THEME_COLOR } from "@asset/constant";

export const ModalHeader = styled.div`
  display: flex;
  background-color: ${THEME_COLOR.PRIMARY};
  width: 100%;
  height: 0.8rem;
`;

export const ModalBody = styled.div`
  display: flex;
  margin: 2rem 0rem;
  align-itmes: center;
`;

export const ModalText = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export const ModalConfirmButton = styled.button`
  width: 6rem;
  height: 4rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  border: none;
  background-color: ##fafafa;
  color: ${THEME_COLOR.PRIMARY};
  align-items: center;
  font-size: 1.4rem;
  border-radius: 5px;
`;
