import axios from "axios";

export default {
    createRecipe: function (recipeData){
        return axios.post("/api/recipe", recipeData);
    },
    findAllRecipes: function(recipeData){
        return axios.get("/api/recipe/", recipeData);
    }
};
