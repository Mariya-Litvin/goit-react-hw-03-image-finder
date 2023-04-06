import PropTypes from 'prop-types';
import { ImageGalleryEl, ImageGalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ article, handleClick }) => {
  return (
    <ImageGalleryEl>
      <ImageGalleryImg
        src={article.webformatURL}
        alt={article.tags}
        onClick={() => handleClick(article.largeImageURL)}
      />
    </ImageGalleryEl>
  );
};

ImageGalleryItem.propTypes = {
  article: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};
