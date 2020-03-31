import React, {Component} from "react";
import * as BooksAPI from "../../BooksAPI";
import Header from "../../components/Header";
import BookShelf from "../../components/BookShelf";
import {
  Container,
  ListBooksContent,
  OpenSearch,
  OpenSearchLink
} from "./styles";

export default class Home extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  /**
   * @description Updates the book on the backend via API
   * @param book [Object] The book that will be updated
   * @param newShelf [String] The new shelf that the book will be moved
   * @memberof Home
   */
  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .catch(error => {
        console.error(error.message);
      })
      .then(updatedBooksInfo => {
        const oldBookIndex = this.state.books.indexOf(
          oldBook => oldBook.title === book.title
        );
        let updatedBookArray = [...this.state.books];
        book.shelf = newShelf;
        updatedBookArray[oldBookIndex] = book;
        this.setState({books: updatedBookArray});
      });
  };

  /**
   * @description Filters the array of books by some status
   * @param books [Array] - Array of books that will be filtered
   * @param status [string] - The status that will filter the array
   * @returns Array of books that have the state provided
   * @memberof Home
   */
  filterBooksByStatus = (books, status) => {
    return books.filter(book => book.shelf === status);
  };

  render() {
    const {books} = this.state;

    return (
      <Container>
        <Header />
        <ListBooksContent>
          <BookShelf
            books={this.filterBooksByStatus(books, "currentlyReading")}
            shelfName="Currently Reading"
            onUpdateBook={(book, newShelf) => this.updateBook(book, newShelf)}
          />
          <BookShelf
            books={this.filterBooksByStatus(books, "wantToRead")}
            shelfName="Want to Read"
            onUpdateBook={(book, newShelf) => this.updateBook(book, newShelf)}
          />
          <BookShelf
            books={this.filterBooksByStatus(books, "read")}
            shelfName="Read"
            onUpdateBook={(book, newShelf) => this.updateBook(book, newShelf)}
          />
        </ListBooksContent>
        <OpenSearch>
          <OpenSearchLink to="/search">Add a book</OpenSearchLink>
        </OpenSearch>
      </Container>
    );
  }
}
