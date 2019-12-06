import React from "react";
import AddRecipe from "./components/AddRecipe";
import RecipeCard from "./components/RecipeCard";
const ingredients = ["cinnamon", "sugar", "butter", "bread"];
function App() {
  return (
    <div className="App">
      <AddRecipe></AddRecipe>
      <RecipeCard recipeName="Cinnamon Rolls" ingredients={ingredients} directions="roll and bake"></RecipeCard>
    </div>
  );
}

export default App;
