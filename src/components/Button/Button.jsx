import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onClickButton }) => {
  return (
    <ButtonLoadMore type="button" onClick={() => onClickButton()}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
