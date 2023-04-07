import { Component } from 'react';
import { Searchbar } from './Seachbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppWrapper } from './App.styled';
import Notiflix from 'notiflix';
import { resultSearch } from './api/api';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    articles: [],
    page: 1,
    per_page: 12,
    isOpen: false,
    bigImage: '',
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const options = {
      searchQuery: this.state.searchQuery,
      page: this.state.page,
    };
    if (
      prevState.searchQuery !== this.state.searchQuery &&
      this.state.searchQuery
    ) {
      try {
        const response = await resultSearch(options);
        const arr = response.hits.map(el => ({
          tags: el.tags,
          webformatURL: el.webformatURL,
          largeImageURL: el.largeImageURL,
          id: el.id,
        }));

        if (arr && arr.length > 0) {
          this.setState({
            articles: arr,
            isLoading: false,
          });
        }
        if (arr.length === 0) {
          this.setState({
            isLoading: false,
          });
          return Notiflix.Notify.info(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        this.setState({
          isLoading: false,
        });
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later',
          error
        );
      }
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      try {
        const response = await resultSearch(options);
        const arr = response.hits.map(el => ({
          tags: el.tags,
          webformatURL: el.webformatURL,
          largeImageURL: el.largeImageURL,
          id: el.id,
        }));
        this.setState({
          articles: [...this.state.articles, ...arr],
          isLoading: false,
        });
      } catch (error) {
        this.setState({
          isLoading: false,
        });
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later',
          error
        );
      }
    }
  }

  handleSubmit = ({ name }) => {
    if (name !== this.state.searchQuery && name) {
      this.setState({
        searchQuery: name,
        page: 1,
        articles: [],
        isLoading: true,
      });
    }
  };

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

  loadMoreCards = () => {
    this.setState(prev => ({
      page: prev.page + 1,
      isLoading: true,
    }));
  };

  onButtonVisible = () => {
    if (
      this.state.articles &&
      this.state.articles.length < Number(this.state.page * this.state.per_page)
    ) {
      return false;
    } else return true;
  };

  render() {
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          articles={this.state.articles}
          onBigImg={this.handleBigImg}
        />
        {this.state.isOpen && (
          <Modal bigImage={this.state.bigImage} closeModal={this.closeModal} />
        )}
        {this.onButtonVisible() && (
          <Button onClickButton={this.loadMoreCards} />
        )}
        {this.state.isLoading && <Loader />}
      </AppWrapper>
    );
  }
}
