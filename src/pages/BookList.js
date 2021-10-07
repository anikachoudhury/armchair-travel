import React from 'react';
import BookCard from '../components/BookCard';
import './BookList.css';

const BookList = (props) => {
    return (
        <div className="book-list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                        link={book.volumeInfo.canonicalVolumeLink}
                    />
                })
            }
        </div>
    )
}

export default BookList
