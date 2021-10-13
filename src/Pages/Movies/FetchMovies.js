import React, { Component } from 'react';
import {motion} from 'framer-motion';
import MovieSearchArea from './MovieSearchArea';
import MoviesList from './MoviesList';
import './FetchMovies.css';

export class FetchMovies extends Component {
    constructor() {
        super()

        // Set the default state.
        this.state = {
            // isLoading: true,
            movies: [],
            submitLanguage: '',
            isLoading: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`
        https://api.themoviedb.org/3/discover/movie?api_key=d9a2f07f1c3739b40e629e873f790706&with_original_language=${this.state.submitLanguage}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({
                    movies: [...data.results]
                })
            })
    }



    handleChange = (e) => {
        this.setState({
            submitLanguage: e.target.value
        })
    }
    
    render() {
        return (
            <motion.div className="fetchMovies"
             exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity: 0}}>

            <div className="moviesHeader">
            <img src='./images/moviesHeader.png' width="900" alt="Movie Header"/>
            </div>

                <MovieSearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <MoviesList movies={this.state.movies}/>
            </motion.div>
        )
    }
}

export default FetchMovies

