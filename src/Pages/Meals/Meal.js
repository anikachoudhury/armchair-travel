import React from "react";
import noFood from '../../Resources/no-image.png'

const Meal = (props) => {
  return (
    <div className="col s12 m6">
      <div className="card">
        {
          props.image == null ? <img src={noFood} alt="default image" /> : <img src={`https://spoonacular.com/recipeImages/${props.id}-312x231.jpg`} alt="card image"  />
        }
        <h3>{props.title}</h3>
        <p>Time (min): {props.readyInMinutes}</p>
        <p>Serving Size: {props.serving}</p>
        <p>Diet Friendly: {props.diets}</p>
        <p><a href={props.link}> Click Here To Cook!</a></p>
      </div>
    </div>
  )
}

export default Meal;