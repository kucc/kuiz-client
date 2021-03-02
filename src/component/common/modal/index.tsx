import React from "react";
import { ModalProps } from "./types";
import * as S from "./styles";

const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  show,
  toggleModal,
}) => (
  <S.Modal show={show} onClick={toggleModal}>
    <S.Container onClick={(e) => e.stopPropagation()}>{children}</S.Container>
  </S.Modal>
);

export default Modal;
