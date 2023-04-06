import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SeachField,
  SeachForm,
  SearchButton,
  SearchInput,
  SearchLabel,
} from './Seachbar.styled';
import { IoSearchSharp } from 'react-icons/io5';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChange = evt => {
    this.setState({ name: evt.target.value.trim() });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <SeachField>
        <SeachForm onSubmit={this.onFormSubmit}>
          <SearchButton type="submit">
            <IoSearchSharp size="27px" />
            <SearchLabel>Search</SearchLabel>
          </SearchButton>

          <SearchInput
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </SeachForm>
      </SeachField>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
