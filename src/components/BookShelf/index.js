import React, {Component} from "react";
import PropTypes from "prop-types";
import {Container, BookshelfTitle} from "./styles";
import BookList from "../BookList";

class BookShelf extends Component {
  render() {
    const {books, shelfName, onUpdateBook} = this.props;

    return (
      <Container>
        <BookshelfTitle>{shelfName}</BookshelfTitle>
        <BookList books={books} onUpdateBook={onUpdateBook} />
      </Container>
    );
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default BookShelf;
