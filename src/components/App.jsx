import { Component } from 'react';
import { Searchbar } from './Seachbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppWrapper } from './App.styled';
import Notiflix from 'notiflix';
import { resultSearch } from './api/api';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    articles: [],
    page: 1,
    per_page: 12,
    isOpen: false,
    bigImage: '',
  };

  async componentDidUpdate(prevState) {
    const options = {
      searchQuery: this.state.searchQuery,
      page: this.state.page,
    };
    if (
      prevState.searchQuery !== this.state.searchQuery &&
      this.state.searchQuery
    ) {
      const response = await resultSearch(options);

      if (response.hits && response.hits.length > 0) {
        this.setState({
          articles: response.hits,
        });
      }
      if (response.hits.length === 0) {
        return Notiflix.Notify.info(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      const response = await resultSearch(options);
      this.setState({
        articles: [...this.state.articles, ...response.hits],
      });
    }
  }

  handleSubmit = ({ name }) => {
    if (name !== this.state.searchQuery) {
      this.setState({
        searchQuery: name,
        page: 1,
        articles: [],
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
    }));
    // console.log(this.state.page);
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
      </AppWrapper>
    );
  }
}
