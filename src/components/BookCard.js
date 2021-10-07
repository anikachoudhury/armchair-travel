import React from 'react';
import './BookCard.css';

const BookCard = (props) => {
    return (
        <div className="book-card-container">
            <img src={props.image} alt=""></img>
            <div className="desc">
                <h4>{props.title}</h4>
                <p>Author: {props.author}</p>
                <p>Published: {props.published}</p>
                <button><a href={props.link}>Click here to read</a></button>
            </div>
        </div>
    )
}

export default BookCard;
