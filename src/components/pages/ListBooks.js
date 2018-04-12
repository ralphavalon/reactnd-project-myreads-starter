import React from 'react'
import { Link } from 'react-router-dom'
import { search } from '../../BooksAPI'
import Book from '../Book'

class ListBooks extends React.Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })

    search(query.trim())
      .then((response) => {
        if(response && Array.isArray(response)) {
          this.setState({ books: response })
        } else {
          this.setState({ books: [] })
        }
      })
  }

  render() {
    const { query, books } = this.state

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
          <ol className="books-grid">
            {books.map((book) => (
                <li key={book.id}>
                    <Book title={book.title} image={!!book.imageLinks ? book.imageLinks.thumbnail : undefined} authors={book.authors} />
                </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListBooks