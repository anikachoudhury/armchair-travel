import React from "react";
import noFood from '../Resources/no-image.png'
import './MealCard.css';

const Meal = (props) => {
  return (
    <div className="movie-card-container">
        {
          props.image == null ? <img src={noFood} alt="default image" /> : <img src={`https://spoonacular.com/recipeImages/${props.id}-312x231.jpg`} alt="card image"  />
        }
    <div className="description">
        <h4>{props.title}</h4>
        <p>Time (min): {props.readyInMinutes}</p>
        <p>Serving Size: {props.serving}</p>
        <p>Diet Friendly: {props.diets}</p>
        <button><a href={props.link} rel="noreferrer" target="_blank">Click here to cook</a></button>
      </div>
      </div>
  )
}

export default Meal;