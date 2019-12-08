const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/recipes"
);
const recipeSeed = [
    {
        recipeName: "Tester",
        ingredients: ["ambition", "luck"],
        directions: "try"
    }
];

db.Recipe
  .remove({})
  .then(() => db.User.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });