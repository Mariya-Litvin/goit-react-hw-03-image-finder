import { ModalElement, ModalOverlay } from './Modal.styled';

export const Modal = ({ bigImage, closeModal }) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalElement>
        <img src={bigImage} alt="Modal" />
      </ModalElement>
    </ModalOverlay>
  );
};
