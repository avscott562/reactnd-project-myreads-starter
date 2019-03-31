import React, {Component} from 'react'
import * as BooksAPI from '../../BooksAPI'
import DebounceInput from 'react-debounce-input'
import Book from '../Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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

  searchBooks(query) {
    if(query) {
      BooksAPI.search(query).then((books) => {
        return this.setState({ searchedBooks: books })
      })
      .catch((err) => {
        console.log("no results found", err)
        return <div>No Results Found</div>
      })
    } else {
        return this.setState({ searchedBooks: [] })
    }
    this.state.searchedBooks.sort(sortBy('title'))
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
            <DebounceInput debounceTimeout={500}
              type="text" value={this.state.query}
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
