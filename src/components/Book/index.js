import React, {Component} from "react";
import BookSelect from "../BookSelect";
import PropTypes from "prop-types";
import {Container, BookTitle, BookAuthors, BookTop, BookCover} from "./styles";

class Book extends Component {
  render() {
    const {book, onUpdateBook} = this.props;
    return (
      <Container>
        <BookTop>
          <BookCover url={book.imageLinks.thumbnail} />
          <BookSelect book={book} onOptionSelected={onUpdateBook} />
        </BookTop>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthors>{book.authors ? book.authors.join(", ") : ""}</BookAuthors>
      </Container>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Book;
