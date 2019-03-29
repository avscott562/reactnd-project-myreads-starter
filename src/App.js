import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
      </div>
    )
  }
}

export default BooksApp
