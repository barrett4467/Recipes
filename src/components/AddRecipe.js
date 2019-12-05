import React, { Component } from "react";
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDDw31y4YNGuoq7Iatzov7_gkCgSBwQ_TA",
    authDomain: "recipes-25410.firebaseapp.com",
    databaseURL: "https://recipes-25410.firebaseio.com",
    projectId: "recipes-25410",
    storageBucket: "recipes-25410.appspot.com",
    messagingSenderId: "904668944357",
    appId: "1:904668944357:web:ba458b8f360d65f9bdc10c",
    measurementId: "G-2VGLXM88Y4"
  };
//   Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database().ref();

class AddRecipe extends Component {
    handleSubmit = event => {
        event.preventDefault();
        const recipeName = document.getElementById("recipeName").value;
        const ingredients = document.getElementById("ingredients").value;
        const directions= document.getElementById("directions").value;
        let recipes = [];
        database.push({
            recipeName,
            ingredients,
            directions
        });
        // database.delete();
        database.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              recipes = childSnapshot.val();
              console.log(recipes.recipeName);
              document.getElementById("recipeAdded").textContent = "You've Added:"
              document.getElementById("name").textContent = recipes.recipeName;
              document.getElementById("recipeIngredients").textContent = recipes.ingredients;
              document.getElementById("recipeDirections").textContent = recipes.directions;
            });
        });

        console.log("Recipe has been added!");
        document.getElementById("recipeName").value = "";
        document.getElementById("ingredients").value = "";
        document.getElementById("directions").value = "";

    }
    render(){
        return(
            <>
            <form>
                <h2>Add a recipe</h2>
                <label>Recipe Name:
                    <input type="text" id="recipeName"></input>
                </label>
                <label>Ingredients:
                    <input type="text" id="ingredients"></input>
                </label>
                <label>Directions:
                    <input type="text" id="directions"></input>
                </label>
                <button type="submit" id="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
            <p id="recipeAdded"></p>
            <p id="name"></p>
            <p id="recipeIngredients"></p>
            <p id="recipeDirections"></p>
            </>
        )
    }
}

export default AddRecipe;