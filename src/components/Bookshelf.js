import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class Bookshelf extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func
    }

    render() {
        const { title, books, onChangeShelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BookList books={books} onChangeShelf={onChangeShelf} />
                </div>
            </div>
        )
    }
}

export default Bookshelf