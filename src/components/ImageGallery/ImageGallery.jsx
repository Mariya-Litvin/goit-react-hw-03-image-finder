import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ articles, onBigImg }) => {
  return (
    <ImageGalleryList>
      {articles.map(article => (
        <ImageGalleryItem
          key={article.id}
          article={article}
          handleClick={onBigImg}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onBigImg: PropTypes.func.isRequired,
};
