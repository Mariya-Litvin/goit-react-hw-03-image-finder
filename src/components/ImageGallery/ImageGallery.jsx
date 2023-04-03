// import axios from 'axios';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { resultSearch } from '../api/api';
import { ImageGalleryEl, ImageGalleryList } from './ImageGallery.styled';
import { Modal } from '../Modal/Modal';
export class ImageGallery extends Component {
  state = {
    articles: [],
    page: 1,
    per_page: 12,
    isOpen: false,
    bigImage: '',
  };

  async componentDidUpdate(prevProps) {
    const search = this.props.searchWord.trim();
    if (prevProps.searchWord !== search && search) {
      const page = this.state.page;
      const per_page = this.state.per_page;
      try {
        const response = await resultSearch(search, page, per_page);
        this.setState({
          articles: response.hits,
        });
      } catch (error) {
        console.log(error.message);
      }

      // console.log(search);
    }
  }

  handleBigImg = img => {
    this.setState({
      bigImage: img,
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <ImageGalleryList>
        {articles.map(article => (
          <ImageGalleryEl key={article.id}>
            <ImageGalleryItem
              article={article}
              handleClick={this.handleBigImg}
            />
          </ImageGalleryEl>
        ))}
        {this.state.isOpen && (
          <Modal bigImage={this.state.bigImage} closeModal={this.closeModal} />
        )}
      </ImageGalleryList>
    );
  }
}
