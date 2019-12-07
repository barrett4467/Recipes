const router = require("express").Router();
const recipeController = require("../../controllers/recipesController");

router.route("/")
    .get(recipeController.findAll)
    .post(recipeController.create)/

    