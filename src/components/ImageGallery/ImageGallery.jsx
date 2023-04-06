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
