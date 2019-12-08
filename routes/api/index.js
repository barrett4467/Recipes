const router = require("express").Router();
const recipeRoutes = require("./recipe");

router.use("/view", recipeRoutes);
router.use("/add", recipeRoutes);

module.exports = router;