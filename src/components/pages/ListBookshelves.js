import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from '../Bookshelf'

class ListBookshelves extends React.Component {
  static propTypes = {
      onChangeShelf: PropTypes.func
  }

  render() {
    const { books, onChangeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" books={books.filter((book) => book.shelf === 'currentlyReading')} onChangeShelf={onChangeShelf}/>
            <Bookshelf title="Want to Read" books={books.filter((book) => book.shelf === 'wantToRead')} onChangeShelf={onChangeShelf}/>
            <Bookshelf title="Read" books={books.filter((book) => book.shelf === 'read')} onChangeShelf={onChangeShelf}/>
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