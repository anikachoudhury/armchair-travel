import React from 'react';
import './MealsSearchArea.css'

const MealsSearchArea = (props) => {
    return (
        <div className="search-area">

            <form onSubmit={props.handleSubmit}>

                <select htmlFor="mealLang" name="mealLang" onChange={props.handleChange}>

                    <option>Select Cuisine</option>
                    <option>African</option>
                    <option>American</option>
                    <option>British</option>
                    <option>Caribbean</option>
                    <option>Chinese</option>
                    <option>Eastern European</option>
                    <option>Europe</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Greek</option>
                    <option>Indian</option>
                    <option>Irish</option>
                    <option>Italian</option>
                    <option>Japanese</option>
                    <option>Thai</option>
                    <option>Vietnamese</option>

                </select>

                <button type="submit">Search</button>

            </form>
        </div>
    )
}

export default MealsSearchArea;