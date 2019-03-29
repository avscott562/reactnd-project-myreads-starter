import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import Book from './Book'

class Shelf extends Component {
  componentDidMount() {
    console.log(this)
  }

  render() {
    const currentBooks = this.props.books
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {currentBooks.map((book, key, updateShelf) => <Book book={book} key={book.id} updateShelf={this.props.updateShelf}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
