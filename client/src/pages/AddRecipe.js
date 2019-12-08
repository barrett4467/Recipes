import React, { Component } from "react";
import API from "../utils/API";

class AddRecipe extends Component {
    state= {
        recipes: [],
        recipeName: "",
        ingredients: [],
        directions: ""
    }
    loadRecipes = () => {
        API.findAllRecipes()
            .then(res => 
                this.setState( { recipes: res.data })
            )
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.recipeName && this.state.ingredients && this.state.directions){
            API.createRecipe({
                recipeName: this.state.recipeName,
                ingredients: this.state.ingredients,
                directions: this.state.ingredients
            })
            .then(res => this.loadRecipes())
            .catch(err => console.log(err))
        }
    }

    render(){
        return(
            <>
            <p>Add Recipe</p>
            <form>
                <input
                    value={this.state.recipeName}
                    onChange={this.handleInputChange}
                    name="recipeName"
                    placeholder="Recipe Name"
                />
                <input
                    value={this.state.ingredients}
                    onChange={this.handleInputChange}
                    name="ingredients"
                    placeholder="Ingredients"
                />
                <input
                    value={this.state.directions}
                    onChange={this.handleInputChange}
                    name="directions"
                    placeholder="Directions"
                />
                <button 
                    disabled={!this.state.recipeName && this.state.ingredients && this.state.directions}
                    onChange={this.handleSubmit}
                >Submit Recipe</button>
            </form>
            </>
        )
    }
}

export default AddRecipe;