import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'

import './App.css'
import {Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'

class BooksApp extends Component {
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
