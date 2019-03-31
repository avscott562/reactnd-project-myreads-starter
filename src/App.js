import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'

class BooksApp extends Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
      console.log(this.state.allBooks)
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }


  render() {
    return (
      <div>
        <Home allBooks={this.state.allBooks} updateShelf={this.updateShelf}/>
        <Search allBooks={this.state.allBooks} updateShelf={this.updateShelf}/>
      </div>
    )
  }
}

export default BooksApp
