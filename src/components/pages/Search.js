import React, {Component} from 'react'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    books: [],
    query: "",
    searchedBooks: []
  }


  updateQuery = (query) => {
    this.setState({ query: query}, this.searchBooks(query))
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  searchBooks(query) {
    if(query === "") {
      this.setState({ searchedBooks: []})
    }

    BooksAPI.search(query)
    .then(search => {
      this.setState({searchedBooks: search})
      console.log(search)
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((BooksAPI.getAll()
    .then((books) => {
      this.setState({books})
    })))
  }



  render() {
    // if (this.state.query) {
    //   const match = new RegExp(escapeRegExp(this.state.query), 'i')
    //   showingBooks = books.filter((book) => match.test(book.id))
    // } else {
    //   showingBooks = books
    // }

    //showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" value={this.state.query}
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map((book, key, updateShelf) => (
              <Book book={book} key={book.id} updateShelf={this.updateShelf}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
