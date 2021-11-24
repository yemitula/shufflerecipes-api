const { authJwt } = require("../middlewares");
const controller = require("../controllers/recipe.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/recipes/:userId",
    [authJwt.verifyToken],
    controller.getRecipeListByUser
  );

  app.post(
    "/api/recipes/:userId",
    [authJwt.verifyToken],
    controller.createRecipe
  );
};
