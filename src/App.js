import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/pages/ListBooks'
import ListBookshelves from './components/pages/ListBookshelves'
import { getAll, update } from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    'books': []
  }

  componentDidMount() {
    getAll().then((books) => {
      this.setState({ books })
    })
  }

  onChangeShelf = (book, shelf) => {
    book.shelf = shelf
    update(book, shelf).then(() => {
      this.setState({ books: this.state.books.filter((b) => b.id !== book.id).concat([book]) });
    })
  }
  
  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBookshelves 
              books={books}
              onChangeShelf={this.onChangeShelf}/>
          )} />
        <Route exact path="/search" render={() => (
            <ListBooks 
              books={books}
              onChangeShelf={this.onChangeShelf}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
