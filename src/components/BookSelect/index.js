import React, {Component} from "react";
import PropTypes from "prop-types";
import {Container, BookSelectInput} from "./styles";

class BookSelect extends Component {
  state = {
    book: this.props.book
  };
  onOptionSelected = ev => {
    this.props.onOptionSelected(ev.target.value);
  };

  render() {
    const {book} = this.state;
    return (
      <Container>
        <BookSelectInput
          onChange={this.onOptionSelected}
          value={book.shelf ? book.shelf : "none"}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </BookSelectInput>
      </Container>
    );
  }
}

BookSelect.propTypes = {
  book: PropTypes.object.isRequired,
  onOptionSelected: PropTypes.func.isRequired
};

export default BookSelect;
