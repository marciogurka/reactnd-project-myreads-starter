import React from "react";
import PropTypes from "prop-types";

function BookSelect(props) {
  function onOptionSelected(ev) {
    console.log(ev);
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={onOptionSelected}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookSelect.propTypes = {
  onOptionSelected: PropTypes.func.isRequired
};

export default BookSelect;
