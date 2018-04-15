import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, onChangeShelf } = this.props

        return (
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                        <Book
                            title={book.title}
                            image={!!book.imageLinks ? book.imageLinks.smallThumbnail : undefined}
                            authors={book.authors}
                            shelf={book.shelf}
                            onChangeShelf={(e) => onChangeShelf(book, e.target.value)} />
                    </li>
                ))}
            </ol>
        )
    }
}

export default BookList