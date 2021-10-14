import React from "react";
import './MoviesList.css';
import MovieCard from '../../Components/MovieCard'

const MoviesList = (props) => {
    return(
    <div className="movies-list">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <MovieCard key={i} 
                            image={movie.poster_path}
                            title={movie.original_title} 
                            overview={movie.overview}

                            />
                        )
                    })
                }
    </div>
    )
}
export default MoviesList