const mongoose = require("mongoose");

const Recipe = mongoose.model(
  "Recipe",
  new mongoose.Schema({
    title: String,
    description: String,
    cookingTime: Number,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  })
);

module.exports = Recipe;
