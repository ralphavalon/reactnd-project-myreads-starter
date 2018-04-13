import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from '../Bookshelf'
import { getAll, update } from '../../BooksAPI'

class ListBookshelves extends React.Component {

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
    const { books } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" books={books.filter((book) => book.shelf === 'currentlyReading')} onChangeShelf={this.onChangeShelf}/>
            <Bookshelf title="Want to Read" books={books.filter((book) => book.shelf === 'wantToRead')} onChangeShelf={this.onChangeShelf}/>
            <Bookshelf title="Read" books={books.filter((book) => book.shelf === 'read')} onChangeShelf={this.onChangeShelf}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBookshelves