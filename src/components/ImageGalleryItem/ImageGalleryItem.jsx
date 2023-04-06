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
