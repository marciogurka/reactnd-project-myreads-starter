import React, {Component} from "react";
import Book from "../Book";

export default class BookList extends Component {
  render() {
    const {books} = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <li key={index}>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
