import React, { Component } from 'react';
import {motion} from 'framer-motion';
import BookSearchArea from './BookSearchArea';
import request from 'superagent';
import BookList from './BookList';
import './Books.css';

export class Books extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            books: [],
            searchField: ''
        }
    }
    
    searchBook = (e) => {
        e.preventDefault();
        request.get(`https://www.googleapis.com/books/v1/volumes`)
        .query({ q: this.state.searchField })
        .then((data) => {
            this.setState({ books: [...data.body.items]})
        })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value });
        
    }

    render() {
        return (
            <motion.div className="books"
            exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity: 0}}>

            <div className="booksHeader">
            <img src='./images/booksHeader.png' width="900" alt="Book Header"/>
             </div>

                <BookSearchArea 
                    handleSearch={this.handleSearch}
                    searchBook={this.searchBook}
                />
                <BookList books={this.state.books}/>
            </motion.div>
        )
    }
}

export default Books;

