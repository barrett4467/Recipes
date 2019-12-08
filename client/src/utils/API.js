import axios from "axios";

export default {
    createRecipe: function (recipeData){
        return console.log(recipeData);
        // axios.post("/api/recipe/", recipeData);
    },
    findAllRecipes: function(recipeData){
        return axios.get("/api/recipe/", recipeData);
    },
    deleteRecipe:  function(id) {
        return axios.delete("/api/recipes" + id);
    }
};
