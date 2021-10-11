import React from "react";
import image from '../../Resources/default-image.jpeg' 

const Movie = (props) => {
    return (
        <div className="col s12 m6">
            <div className="card">
                    {
                        props.image == null ? <img src={image} alt="default image" style={{width: "50%", height: 360 }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width: "50%", height:360 }} />
                  }
                  <h3>{props.title}</h3>
                  <p>Summary: {props.overview}</p>
                </div>
                <div className="card-content">
                </div>
            </div>
    )
}

export default Movie