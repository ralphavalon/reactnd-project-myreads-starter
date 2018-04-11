import React from 'react'
import Bookshelf from '../Bookshelf'
import PropTypes from 'prop-types'

class ListBookshelves extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onAddBook: PropTypes.func.isRequired
    }

    render() {
        const { books, onAddBook } = this.props;
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title="Currently Reading" books={books.filter((book) => book.shelf === 'currentlyReading')} />
                <Bookshelf title="Want to Read" books={books.filter((book) => book.shelf === 'wantToRead')} />
                <Bookshelf title="Read" books={books.filter((book) => book.shelf === 'read')} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={onAddBook}>Add a book</a>
            </div>
          </div>
        )
    }
}

export default ListBookshelves