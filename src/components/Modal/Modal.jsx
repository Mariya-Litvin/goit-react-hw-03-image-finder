import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalElement, ModalOverlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressESC);
  }

  handlePressESC = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  render() {
    const { bigImage, closeModal } = this.props;
    return (
      <ModalOverlay onClick={closeModal}>
        <ModalElement>
          <img src={bigImage} alt="Modal" width="960px" />
        </ModalElement>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  bigImage: PropTypes.string.isRequired,
};
