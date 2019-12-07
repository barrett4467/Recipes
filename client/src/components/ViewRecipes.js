import React, { Component } from "react";
import * as firebase from 'firebase';

import RecipeCard from "./RecipeCard";
import config from "../utils/firebase";
import data from "../utils/data.json.js";


class Recipes extends Component {
    state = {
      data
    }
  
    componentDidMount(){
      console.log(this.state.data);
  
    }
    render(){
      return (
        <div className="App">
          {this.state.data.map(recipe => (
            <RecipeCard
            id={recipe.id}
            recipeName={recipe.recipeName}
            ingredients={recipe.ingredients}
            directions={recipe.directions}
          />
          ))}
        </div>
      );
    }
  }
  
  export default Recipes;