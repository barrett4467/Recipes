import React, { Component } from "react";
import API from "../utils/API";

API.findAllRecipes();
class ViewRecipe extends Component {
    // getRecipes = () =>{
    //     API.findAllRecipes();

    // }
    render(){
        // this.getRecipes();
        return(
            <p>View Recipe</p>
        )
    }
}

export default ViewRecipe;