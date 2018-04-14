import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { search } from '../../BooksAPI'
import BookList from '../BookList'

class ListBooks extends React.Component {
  static propTypes = {
      onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    booksFound: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })

    search(query.trim())
      .then((response) => {
        if(response && Array.isArray(response)) {
          const { books } = this.props
          const idsMap = new Map(books.map((book) => [book.id, book]));
          const booksFound = response.map(book => idsMap.has(book.id) ? idsMap.get(book.id) : book)
          this.setState({ booksFound: booksFound });
        } else {
          this.setState({ booksFound: [] })
        }
      })
  }

  render() {
    const { query, booksFound } = this.state
    const { onChangeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <BookList books={booksFound} onChangeShelf={onChangeShelf} />
        </div>
      </div>
    )
  }
}

export default ListBooks