import React, { Component } from "react";
import API from "../utils/API";

class ViewRecipe extends Component {
    state= {
        recipes: [],
        recipeName: "",
        ingredients: [],
        directions: ""
    }
    componentDidMount() {
        this.loadRecipes();
    }
    loadRecipes = () => {
        API.findAllRecipes()
            .then(res => 
                this.setState( { recipes: res.data })
            )
            .catch(err => console.log(err));
    };
    deleteRecipe = id => {
        API.deleteRecipe(id)
            .then(res => this.loadRecipes())
            .catch(err => console.log(err));
    }
    render(){
        // this.getRecipes();
        return(
            <>
            {this.state.recipes.length ? (
                <div>
                  {this.state.recipes.map(recipe => (
                    <>
                        <h3>{recipe.recipeName}</h3>
                        <h4>Ingredients:</h4>
                        {recipe.ingredients.map(ingredient => (
                            <p>{ingredient}</p>
                        ))}
                        <p>Directions: {recipe.directions}</p>
                        <button onClick={() => this.deleteRecipe(recipe.recipeName)}>X</button>
                    </>
                  ))}
                </div>
              ) : (
                <h3>No Results to Display</h3>
              )}
              </>
        )
    }
}

export default ViewRecipe;