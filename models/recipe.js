const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  recipeName: {
    type: String,
    trim: true,
    required: "A Recipe Name is required"
  },
  ingredients: {
    type: String,
    trim: true,
    required: true
  },
  directions: {
    type: String,
    unique: true
  }
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;