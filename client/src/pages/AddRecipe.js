import React, { Component } from "react";
import API from "../utils/API";

class AddRecipe extends Component {
    state= {
        recipes: [],
        recipeName: "",
        ingredients: [],
        directions: ""
    }
    componentDidMount(){
        this.loadRecipes();
    }
    loadRecipes = () => {
        API.getRecipes()
            .then(res => 
                this.setState( { recipes: res.data, recipeName: "", ingredients:[], directions: "" })
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
        console.log("clicked");
        if (this.state.recipeName && this.state.ingredients && this.state.directions){
            let tester = {
                recipeName: "Test",
                ingredients: ["luck", "faith"],
                directions: "Please work"   
            }
            
            API.createRecipe(tester);

            // API.createRecipe({
            //     recipeName: this.state.recipeName,
            //     ingredients: this.state.ingredients,
            //     directions: this.state.ingredients
            //  })
            // .then(res => this.loadRecipes())
            // .catch(err => console.log(err))
        } else {
            alert("not")
        }
    }

    render(){
        return(
            <>
            <p>Add Recipe</p>
            <form method="post" action="/addrecipe">
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
                    onClick={this.handleSubmit}
                >Submit Recipe</button>
            </form>
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

export default AddRecipe;