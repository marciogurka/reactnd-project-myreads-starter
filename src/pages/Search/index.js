import React, {Component} from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../../BooksAPI";
import SearchBox from "../../components/SearchBox";
import BookList from "../../components/BookList";
import {Container, BookResultContainer, NoResultInfo} from "./styles";

class Search extends Component {
  state = {
    books: [],
    userBooks: this.props.books,
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
          else {
            this.updateBookShelf(books);
            this.setState({books, searchTerm});
          }
        });
    } else {
      this.setState({books: [], searchTerm});
    }
  };

  /**
   * @description Updates the book shelf with the user's shelf
   * @param resultBooks [array] Array of the books result's search
   * @memberof Search
   */
  updateBookShelf = resultBooks => {
    resultBooks.map(resultBook => {
      let userBooks = this.props.books;
      const userBook = userBooks.find(
        userBook => userBook.id === resultBook.id
      );
      if (userBook) {
        resultBook.shelf = userBook.shelf;
      }
      return resultBook;
    });
  };

  render() {
    const {books, searchTerm} = this.state;
    const {onUpdateBook} = this.props;
    return (
      <Container>
        <SearchBox handleSearch={this.handleSearch} />
        <BookResultContainer>
          {books.length > 1 && (
            <BookList books={books} onUpdateBook={onUpdateBook} />
          )}
          {books.length === 0 && searchTerm && (
            <NoResultInfo> No books found for "{searchTerm}"</NoResultInfo>
          )}
        </BookResultContainer>
      </Container>
    );
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Search;
