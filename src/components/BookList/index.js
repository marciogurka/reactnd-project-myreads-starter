import React, {Component} from "react";
import PropTypes from "prop-types";
import Book from "../Book";
import {Container, BooksGrid, BooksGridItem} from "./styles";

class BookList extends Component {
  onUpdateBook = (book, newShelf) => {
    this.props.onUpdateBook(book, newShelf);
  };

  render() {
    const {books} = this.props;
    return (
      <Container>
        <BooksGrid>
          {books.map((book, index) => (
            <BooksGridItem key={index}>
              <Book
                book={book}
                onUpdateBook={newShelf => this.onUpdateBook(book, newShelf)}
              />
            </BooksGridItem>
          ))}
        </BooksGrid>
      </Container>
    );
  }
}

BookList.propTypes = {
  onUpdateBook: PropTypes.func.isRequired
};

export default BookList;
