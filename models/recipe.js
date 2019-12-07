var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
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

var Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;