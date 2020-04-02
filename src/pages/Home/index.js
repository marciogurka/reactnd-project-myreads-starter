import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import BookShelf from "../../components/BookShelf";
import {
  Container,
  ListBooksContent,
  OpenSearch,
  OpenSearchLink
} from "./styles";

class Home extends Component {
  /**
   * @description Filters the array of books by some status
   * @param books [Array] - Array of books that will be filtered
   * @param status [string] - The status that will filter the array
   * @returns Array of books that have the state provided
   * @memberof Home
   */
  filterBooksByStatus = (books, status) => {
    if (books) return books.filter(book => book.shelf === status);
    else return [];
  };

  render() {
    const {books, onUpdateBook} = this.props;

    return (
      <Container>
        <Header />
        <ListBooksContent>
          <BookShelf
            books={this.filterBooksByStatus(books, "currentlyReading")}
            shelfName="Currently Reading"
            onUpdateBook={(book, newShelf) => onUpdateBook(book, newShelf)}
          />
          <BookShelf
            books={this.filterBooksByStatus(books, "wantToRead")}
            shelfName="Want to Read"
            onUpdateBook={(book, newShelf) => onUpdateBook(book, newShelf)}
          />
          <BookShelf
            books={this.filterBooksByStatus(books, "read")}
            shelfName="Read"
            onUpdateBook={(book, newShelf) => onUpdateBook(book, newShelf)}
          />
        </ListBooksContent>
        <OpenSearch>
          <OpenSearchLink to="/search">Add a book</OpenSearchLink>
        </OpenSearch>
      </Container>
    );
  }
}

Home.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Home;
