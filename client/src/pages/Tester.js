import React, { Component } from "react";
import API from "../utils/API";

class Recipe extends Component {
    state= {
        recipes: [],
        recipeName: "",
        ingredients: [],
        directions: ""
    }
  
    componentDidMount() {
      this.loadRecipe();
      console.log("component hit");
    }
  
    loadRecipe = () => {
      API.getRecipes()
        .then(res =>
          this.setState({ recipes: res.data, recipeName: "", ingredients: [], directions: "" }),
          console.log(this.state.recipes)
        )
        .catch(err => console.log(err));
    };
  
    deleteRecipe = id => {
      API.deleteRecipe(id)
        .then(res => this.loadRecipe())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      console.log("Form was submitted");
      console.log(this.state.recipeName);
      console.log(this.state.ingredients);
      console.log(this.state.directions);
      if (this.state.recipeName && this.state.ingredients) {
        API.saveRecipe({
          recipeName: this.state.recipeName,
          ingredients: this.state.ingredients,
          directions: this.state.directions
        })
          .then(res => this.loadRecipe())
          .catch(err => console.log(err));
      }
    };
  
    render() {
      return (
          <>
            <h1>Recipes</h1>
                <form>
                <input
                    value={this.state.recipeName}
                    onChange={this.handleInputChange}
                    name="recipeName"
                    placeholder="Recipe Name (required)"
                />
                <input
                    value={this.state.ingredients}
                    onChange={this.handleInputChange}
                    name="ingredients"
                    placeholder="Ingredients (required)"
                />
                <input
                    value={this.state.directions}
                    onChange={this.handleInputChange}
                    name="directions"
                    placeholder="Directions (Optional)"
                />
                <button
                    disabled={!(this.state.ingredients && this.state.recipeName)}
                    onClick={this.handleFormSubmit}
                >
                    Submit Recipe
                </button>
                </form>
                <h1>Recipe List</h1>
                {this.state.recipes.length ? (
              <div>
                {this.state.recipes.map(recipe => (
                <>
                  <p>
                      <strong>
                        {recipe.title} by {recipe.author}
                      </strong>
                  </p>
                  <p>
                      {recipe.ingredients}
                  </p>
                  <p>
                      {recipe.directions}
                  </p>
                  </>
                ))}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
                
        </>
      )}
}
  export default Recipe;
  