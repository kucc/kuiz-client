import React from "react";
import { ModalProps } from "./types";
import * as S from "./styles";

const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  show,
  onToggle,
}) => (
  <S.Modal show={show} onClick={onToggle}>
    <S.Container onClick={(e) => e.stopPropagation()}>{children}</S.Container>
  </S.Modal>
);

export default Modal;
