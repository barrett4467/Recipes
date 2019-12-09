const router = require("express").Router();
const recipeController = require("../../controllers/modelcontroller");

router.route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);
  
router.route("/view")
  .get(recipeController.findAll)
  .delete(recipeController.remove);

router.route("/add")
  .get(recipeController.findAll)
  .post(recipeController.create);

module.exports = router;