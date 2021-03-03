import React from "react";
import Modal from "@component/common/modal";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { hideAlertModal } from "@/modules/modal";
import { RootState } from "@/modules";
import { useHistory } from "react-router-dom";

const CustomAlert = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { show, message } = useSelector((state: RootState) => state.modal);
  const hideModal = () => {
    dispatch(hideAlertModal());
    history.push("/");
  };

  return (
    <Modal show={show} onToggle={hideModal}>
      <S.ModalHeader />
      <S.ModalBody>
        <S.ModalText>{message}</S.ModalText>
      </S.ModalBody>
      <S.ModalConfirmButton onClick={hideModal}>확인</S.ModalConfirmButton>
    </Modal>
  );
};

export default CustomAlert;
