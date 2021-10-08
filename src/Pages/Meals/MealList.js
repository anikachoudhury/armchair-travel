import React from 'react';
import './MealList.css';
import Meal from './Meal';

const MealList = (props) => {
    return (
        <div className="meal-list">
            {
                props.meal.map((meal, i) => {
                    return <Meal 
                        key={i}
                        image={meal.image}
                        title={meal.title}
                        link={meal.sourceUrl}
                        id={meal.id}
                        serving={meal.servings}
                        diets={meal.diets}
                        readyInMinutes={meal.readyInMinutes}
                    />
                })
            }
        </div>
    )
}

export default MealList