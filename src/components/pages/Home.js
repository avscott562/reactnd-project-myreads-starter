import React, {Component} from 'react'
import Shelf from '../Shelf'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'


class Home extends Component {
  state = {
    books: []
  }

  render() {
    const { allBooks, updateShelf } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf name="Currently Reading" books={allBooks.filter(book =>
            book.shelf === "currentlyReading")} updateShelf={updateShelf}/>
            <Shelf name="Want To Read" books={allBooks.filter(book =>
            book.shelf === "wantToRead")} updateShelf={updateShelf}/>
            <Shelf name="Read" books={allBooks.filter(book =>
            book.shelf === "read")} updateShelf={updateShelf}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' className="open-search-button">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home
