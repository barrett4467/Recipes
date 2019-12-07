const router = require("express").Router();
const recipeController = require("../../controllers/modelcontroller");

router.route("/view")
  .post(recipeController.create)
  .get(recipeController.find);


module.exports = router;