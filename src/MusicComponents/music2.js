import Spotify from './spotify-logo.jpg';
import React from 'react';
import './music2.css';

const Music = (props) => {
    return (
        <div className="card">
            {props.music.images[0].url == null ? <img src={Spotify} /> : <img src={`${props.music.images[0].url}`} />}
            <div className = "card-content">
                <h4>{props.music.name}</h4>
                <p>{props.music.description}</p>
                <button><a href ={props.music.external_urls.spotify}>Click here to listen</a></button>
            </div>
        </div>
    )
}

export default Music;