import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
        image: PropTypes.string,
        shelf: PropTypes.string,
        authors: PropTypes.array
    }

    render() {
        const { title, authors = [], image = "no_image_found.jpg", shelf = "none", onChangeShelf } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={onChangeShelf}>
                            <option value="empty" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(',')}</div>
            </div>
        )
    }
}

export default Book