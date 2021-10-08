import React from 'react';
import './MovieSearchArea.css'

const MovieSearchArea = (props) => {
    return(
        <div className="search-area">
                    <form action="" onSubmit={props.handleSubmit}>
                            <select htmlFor="movieLang" name="movieLang" onChange={props.handleChange}>

                            <option>Select Language</option>
                            <option value='af'>Afrikaans</option>
                            <option value='az'>Azerbaijani</option>
                            <option value='bn'>Bengali</option>
                            <option value='ca'>Catalan</option>
                            <option value='fj'>Fijian</option>
                            <option value='fr'>French</option>
                            <option value='de'>German</option>
                            <option value='ht'>Haitian</option>
                            <option value='ig'>Igbo</option>
                            <option value='id'>Indonesian</option>
                            <option value='ga'>Irish</option>
                            <option value='it'>Italian</option>
                            <option value='ja'>Japanese</option>
                            <option value='ko'>Korean</option>
                            <option value='la'>Latin</option>
                            <option value='mo'>Moldavian</option>
                            <option value='ne'>Nepali</option>
                            <option value='es'>Spanish</option>
                            <option value='bo'>Tibetan</option>
                            <option value='cy'>Welsh</option>


                            </select>

                            <button type="submit" onSubmit={props.handleSubmit}>Submit</button>

                    </form>
        </div>
    )
}

export default MovieSearchArea;