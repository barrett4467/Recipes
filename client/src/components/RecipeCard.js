import React, { Component } from "react";

const RecipeCard  = props => {
    window.onload = () => {
        for (let i = 0; i < props.ingredients.length; i++){
            console.log(props.ingredients[i]);
            const ingredient = document.createElement("p");
            console.log(ingredient)
            document.getElementById("ingredientList").appendChild(ingredient);
            ingredient.innerText = props.ingredients[i]
        }
    }
    
    return(
        <div>
        <h2>
            Recipe Name: {props.recipeName}
        </h2>
        <div id="ingredientList">
            <p>Ingredients: </p>
        </div>
        <p>Directions: {props.directions} </p>
    </div> 
    )
}

export default RecipeCard;
