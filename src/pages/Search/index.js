import React, {Component} from "react";
import * as BooksAPI from "../../BooksAPI";
import SearchBox from "../../components/SearchBox";
import BookList from "../../components/BookList";
import {Container, BookResultContainer, NoResultInfo} from "./styles";

export default class Search extends Component {
  state = {
    books: [],
    searchTerm: ""
  };

  /**
   * @description Realize the API call to search a book
   * @param searchTerm [String] The term that the user want to search
   * @memberof Search
   */
  handleSearch = searchTerm => {
    if (searchTerm) {
      BooksAPI.search(searchTerm)
        .catch(error => {
          console.error(error.message);
          this.setState({books: [], searchTerm});
        })
        .then(books => {
          if (books.error) this.setState({books: [], searchTerm});
          else this.setState({books, searchTerm});
        });
    } else {
      this.setState({books: [], searchTerm});
    }
  };

  /**
   * @description Updates the book on the backend via API
   * @param book [Object] The book that will be updated
   * @param newShelf [String] The new shelf that the book will be moved
   * @memberof Search
   */
  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .catch(error => {
        console.error(error.message);
      })
      .then(updatedBooksInfo => {
        console.log(updatedBooksInfo);
      });
  };

  render() {
    const {books, searchTerm} = this.state;
    return (
      <Container>
        <SearchBox handleSearch={this.handleSearch} />
        <BookResultContainer>
          {books.length > 1 && (
            <BookList books={books} onUpdateBook={this.updateBook} />
          )}
          {books.length === 0 && searchTerm && (
            <NoResultInfo> No books found for "{searchTerm}"</NoResultInfo>
          )}
        </BookResultContainer>
      </Container>
    );
  }
}
