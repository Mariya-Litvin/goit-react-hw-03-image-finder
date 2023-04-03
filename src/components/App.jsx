import { Component } from 'react';
import { Searchbar } from './Seachbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppWrapper } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = ({ name }) => {
    this.setState({
      searchQuery: name,
    });
  };

  render() {
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchWord={this.state.searchQuery} />
      </AppWrapper>
    );
  }
}
