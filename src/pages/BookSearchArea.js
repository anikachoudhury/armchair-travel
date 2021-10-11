import React from 'react';
import './BookSearchArea.css';

const bookSearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook}>
                
                <input placeholder="What genre are you looking for?" onChange={props.handleSearch} type="text"></input><br/>
                
                
                <select htmlFor="bookLang" name="bookLang">
                    <option>Select Language</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                    <option>German</option>
                    <option>Dutch</option>
                    <option>Potuguese</option>
                    <option>Hindi</option>
                    <option>Urdu</option>
                    <option>Chinese</option>
                    <option>Thai</option>
                    <option>Japanese</option>
                    <option>Korean</option>
                    <option>Bangla</option>
                    <option>Polish</option>
                </select><br/>
                
                <button type="submit">Search</button>
            
            </form>
        </div>
    )
}

export default bookSearchArea

