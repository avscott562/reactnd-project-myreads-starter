import React, {Component} from 'react'
import * as BooksAPI from '.././BooksAPI'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class Book extends Component {
  handleChange = e => {
    const newShelf = e.target.value
    this.props.book.shelf = newShelf;
    {this.props.updateShelf(this.props.book, newShelf)}
  }
  render() {
    const book = this.props.book

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (book.imageLinks) ? `url("${book.imageLinks.thumbnail}")` : "" }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
