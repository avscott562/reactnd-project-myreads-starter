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
    BooksAPI.getAll().then((allBooks) => {
      this.setState({ allBooks })
      console.log(allBooks)
    })
  }

  render() {
    return (
      <div>
        <Home allBooks={this.state.allBooks} />
        <Route exact path="/search" component={Search}/>
      </div>
    )
  }
}

export default BooksApp
