import React from "react";
import './MusicSearchArea.css';

const MusicSearchArea = (props) => {
    return (
        <div className="search-area">
            <form action="" onSubmit={props.handleSubmit}>
                <select htmlFor="movieLang" name="movieLang" onChange={props.handleChange}>

                <option>Select Language</option>
                <option value='af'>Afghanistan</option>
                <option value='az'>Azerbaijan</option>
                <option value='bd'>Bangladesh</option>
                <option value='cy'>Cyprus</option>
                <option value='fj'>Fiji</option>
                <option value='fr'>France</option>
                <option value='de'>Germany</option>
                <option value='ht'>Haiti</option>
                <option value='in'>India</option>
                <option value='id'>Indonesia</option>
                <option value='ie'>Ireland</option>
                <option value='it'>Italy</option>
                <option value='jp'>Japan</option>
                <option value='kr'>Korean</option>
                <option value='md'>Moldova</option>
                <option value='mx'>Mexico</option>
                <option value='ng'>Nigeria</option>
                <option value='ne'>Nepali</option>
                <option value='sg'>Singapore</option>
                <option value='es'>Spain</option>
                <option value='lk'>Sri Lanka</option>
                <option value='tr'>Turkey</option>
                <option value='us'>United States of America</option>

                </select><br/>

                <button type ="submit">Search</button>
            </form>
        </div>
    )
}
export default MusicSearchArea;