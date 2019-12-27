import React from 'react';

import { ContainerModal, ModalMain, ModalButton } from './styles';

const Modal = ({ handleClose, show, children }) => {
  return (
    <ContainerModal show={show}>
      <ModalMain>
        {children}
        <ModalButton name="fechar" type="button" onClick={handleClose}>
          Fechar
        </ModalButton>
      </ModalMain>
    </ContainerModal>
  );
};

export default Modal;
