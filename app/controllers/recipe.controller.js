const db = require("../models");
const Recipe = db.recipe;
const User = db.user;

exports.createRecipe = (req, res) => {
  const recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    cookingTime: req.body.cookingTime,
  });

  recipe.save((err, recipe) => {
    if (err) {
      res.status(500).send({
        message: err || "Some error occurred while creating the Recipe.",
      });
      return;
    }

    User.findById(req.params.userId, (err, user) => {
      if (err) {
        res.status(500).send({
          message: err || "Some error occurred while creating the Recipe.",
        });
        return;
      }

      recipe.userId = user._id;

      recipe.save((err, recipe) => {
        if (err) {
          res.status(500).send({
            message: err || "Some error occurred while creating the Recipe.",
          });
          return;
        }

        res.send(recipe);
      });
    });
  });
};

exports.getRecipeListByUser = (req, res) => {
  Recipe.find({ userId: req.params.userId }, (err, recipes) => {
    if (err) {
      res.status(500).send({
        message: err || "Some error occurred while retrieving recipes.",
      });
      return;
    }

    if (!recipes) {
      res.status(404).send({
        message: "No recipes found.",
      });
      return;
    }

    res.send(recipes);
  });
};
