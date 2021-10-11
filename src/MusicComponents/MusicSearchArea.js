import React from "react";
import './MusicSearchArea.css';

const MusicSearchArea = (props) => {
    return (
        <div className="search-area">
            <form action="" onSubmit={props.handleSubmit}>
                {/* <div className="input-field"> */}
                    <input placeholder="Search playlists" type="text" onChange={props.handleChange}/>
                {/* </div> */}
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default MusicSearchArea;