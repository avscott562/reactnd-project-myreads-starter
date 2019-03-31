import React, {Component} from 'react'
import * as BooksAPI from '../../BooksAPI'
import Shelf from '../Shelf'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'


class Home extends Component {
  state = {
    books: []
  }

  // componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({ books })
  //   })
  // }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((BooksAPI.getAll()
    .then((books) => {
      this.setState({books})
    })))
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf name="Currently Reading" books={this.props.allBooks.filter(book =>
            book.shelf === "currentlyReading")} updateShelf={this.updateShelf}/>
            <Shelf name="Want To Read" books={this.props.allBooks.filter(book =>
            book.shelf === "wantToRead")} updateShelf={this.updateShelf}/>
            <Shelf name="Read" books={this.props.allBooks.filter(book =>
            book.shelf === "read")} updateShelf={this.updateShelf}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home
