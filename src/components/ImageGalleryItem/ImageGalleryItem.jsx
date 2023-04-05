import { ImageGalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ article, handleClick }) => {
  return (
    <li>
      <ImageGalleryImg
        src={article.webformatURL}
        alt={article.tags}
        onClick={() => handleClick(article.largeImageURL)}
      />
    </li>
  );
};
