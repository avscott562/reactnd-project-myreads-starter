# MyReads Project

This is an app that tracks books you've read, are reading, or want to read.  You can access the site at [MyReads Project](https://github.com/avscott562/reactnd-project-myreads-starter).

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

# dependencies

This program is dependent upon React, boothstrap, npm, and node.js.

## How It Works

The home page will disply all of the books you've already categorized and placed on the "Currently Reading", "Waiting to Read", or "Read" shelves.  Each book has a toggle menu that allows you to move the book from one shelf to another.

Clicking the 'Add Book' takes you to the search page where you are able to search the library of books.  You can then add these books to any of the 3 shelves if you choose.  Once you return to the Home page, you'll see the book(s) you've added.


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

This is a student version updated by Alicia Scott.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
