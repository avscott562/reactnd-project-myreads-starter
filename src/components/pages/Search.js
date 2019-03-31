import React, {Component} from 'react'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
  static propTypes = {
    allBooks: PropTypes.array.isRequired
  }

  state = {
    query: "",
    searchedBooks: []
  }


  updateQuery = (query) => {
    this.setState({ query: query.trim() }, this.searchBooks(query))
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  searchBooks(query) {
    if(query) {
      BooksAPI.search(query).then((books) => {
        if(books === []) {
          this.setState({ searchedBooks: books })
          this.state.searchedBooks.sort(sortBy('title'))
        } else {

        }
      })
    }
  }

  render() {
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
              <Book book={book} key={book.id} updateShelf={this.props.updateShelf}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
