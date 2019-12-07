const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipeName: { type: String, required: true },
  ingredients: { type: String, required: true },
  directions: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
