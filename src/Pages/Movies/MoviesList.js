import React from "react";
import Movie from "./Movie";
import './MoviesList.css'

const MoviesList = (props) => {
    return(
    <div className="movies-list">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Movie key={i} 
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