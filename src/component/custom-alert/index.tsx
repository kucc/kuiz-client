import React from "react";
import Modal from "@component/common/modal";
import * as S from "./styles";

interface CustomAlertProps {
  text: string;
  show: boolean;
  toggleModal: any;
}

const CustomAlert = ({ text, show, toggleModal }: CustomAlertProps) => {
  return (
    <Modal show={show} toggleModal={toggleModal}>
      <S.ModalHeader />
      <S.ModalText>{text}</S.ModalText>
      <S.ModalConfirmButton
        onClick={() => {
          toggleModal(!show);
        }}
      >
        확인
      </S.ModalConfirmButton>
    </Modal>
  );
};

export default CustomAlert;
