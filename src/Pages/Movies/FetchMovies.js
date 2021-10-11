import React, { Component } from 'react'
import MovieSearchArea from './MovieSearchArea'
import MoviesList from './MoviesList'

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
            <div className="App">
                <MovieSearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <MoviesList movies={this.state.movies}/>
            </div>
        )
    }
}

export default FetchMovies

