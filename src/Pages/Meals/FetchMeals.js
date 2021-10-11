import React, { Component } from 'react'
import MealsSearchArea from './MealsSearchArea'
import MealList from './MealList'

export class FetchMeals extends Component {
    constructor() {
        super()

        // Set the default state.
        this.state = {
            meal: [],
            submitCuisine: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=79e6b4c714a241ebacbbd307f5b3f708&addRecipeInformation=true&query=${this.state.submitCuisine}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({
                    meal: [...data.results]
                })
            })
    }



    handleChange = (e) => {
        this.setState({
            submitCuisine: e.target.value
        })
    }
    
    render() {
        return (
            <div className="FetchMeals">
                <MealsSearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <MealList meal={this.state.meal}/>
            </div>
        )
    }
}

export default FetchMeals;