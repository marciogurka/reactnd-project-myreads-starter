import React, {Component} from "react";
import PropTypes from "prop-types";
import {debounce} from "lodash";

import {
  Container,
  BackHomeLink,
  SearchInputContainer,
  SearchInput
} from "./styles";

class SearchBox extends Component {
  handleInputChange = debounce(text => {
    this.props.handleSearch(text);
  }, 1000);

  componentWillUmount() {
    this.handleInputChange.cancel();
  }

  render() {
    return (
      <Container>
        <BackHomeLink to="/">Close</BackHomeLink>
        <SearchInputContainer>
          <SearchInput
            type="text"
            placeholder="Search by title or author"
            onChange={ev => this.handleInputChange(ev.target.value)}
          />
        </SearchInputContainer>
      </Container>
    );
  }
}

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchBox;
