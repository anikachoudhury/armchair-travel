import React from 'react';
import image from '../Resources/default-image.jpeg' 
import './MovieCard.css';

const MovieCard = (props) => {
    return (
        <div className="movie-card-container">
              {
                        props.image == null ? <img src={image} alt="default image" style={{width: "50%", height: 360 }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width: "50%", height:360 }} />
                  }
                        <div className="description">

                <h4>{props.title}</h4>
                <p>Summary: {props.overview}</p>
            </div>
            </div>
    )
}

export default MovieCard;