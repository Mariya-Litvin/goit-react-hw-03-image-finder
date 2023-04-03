import { ImageGalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ article, handleClick }) => {
  return (
    <>
      <ImageGalleryImg
        src={article.webformatURL}
        alt={article.tags}
        onClick={() => handleClick(article.largeImageURL)}
      />
    </>
  );
};
