import React, {Component} from 'react'
import sortBy from 'sort-by'
import Book from './Book'

class Shelf extends Component {
  render() {
    const currentBooks = this.props.books
    currentBooks.sort(sortBy('title'))
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
