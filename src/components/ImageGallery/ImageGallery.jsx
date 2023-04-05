// import Notiflix from 'notiflix';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { Component } from 'react';
// import { resultSearch } from '../api/api';
import { ImageGalleryList } from './ImageGallery.styled';
// import { Modal } from '../Modal/Modal';
// import { Button } from 'components/Button/Button';

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
