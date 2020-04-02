import React from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Home from "./pages/Home";
import Search from "./pages/Search";
import {Container} from "./styles";

class BooksApp extends React.Component {
  state = {
    userBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({userBooks: books});
    });
  }

  /**
   * @description Updates the book on the backend via API
   * @param book [Object] The book that will be updated
   * @param newShelf [String] The new shelf that the book will be moved
   * @memberof App
   */
  onUpdateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .catch(error => {
        console.error(error.message);
      })
      .then(updatedBooksInfo => {
        BooksAPI.getAll().then(books => {
          this.setState({userBooks: books});
        });
      });
  };

  render() {
    return (
      <Container>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                onUpdateBook={this.onUpdateBook}
                books={this.state.userBooks}
              />
            )}
          ></Route>
          <Route
            path="/search"
            render={() => (
              <Search
                onUpdateBook={this.onUpdateBook}
                books={this.state.userBooks}
              />
            )}
          ></Route>
        </Switch>
      </Container>
    );
  }
}

export default BooksApp;
