import React from "react";
import PropTypes from "prop-types";
import {Container, BookSelectInput} from "./styles";

function BookSelect(props) {
  function onOptionSelected(ev) {
    props.onOptionSelected(ev.target.value);
  }

  return (
    <Container>
      <BookSelectInput onChange={onOptionSelected} value={props.book.shelf}>
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

BookSelect.propTypes = {
  book: PropTypes.object.isRequired,
  onOptionSelected: PropTypes.func.isRequired
};

export default BookSelect;
