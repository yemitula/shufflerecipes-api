const recipeController = require("./recipe.controller");
const Recipe = require("../models/recipe.model");
const mockingoose = require("mockingoose");
const { getMockReq, getMockRes } = require("@jest-mock/express");

const mockedStatusFunc = jest.fn();
// const mockedResponse = getMockRes({ status: mockedStatusFunc });
// In my tests

describe("recipe.controller", () => {
  describe("getRecipeListByUser", () => {
    it("should return a list of recipes", async () => {
      const req = getMockReq({
        params: {
          userId: "619e12f68cabdd8a86c77ac5",
        },
      });

      const myRecipe = {
        title: "Recipe 1",
        description: "This is a description",
        cookingTime: "10",
      };

      const { res, next } = getMockRes({
        data: [myRecipe],
        status: mockedStatusFunc,
      });

      mockedStatusFunc.mockReturnThis();

      //   mockingoose(Recipe).toReturn([myRecipe], "find");

      await recipeController.getRecipeListByUser(req, res);

      //   expect(res.status).toHaveBeenCalledWith(404);

      expect(res.json).toHaveBeenCalledWith(expect.arrayContaining([myRecipe]));

      //   expect(res.json).toHaveBeenCalledWith(expect.objectContaining(myRecipe));
      //   expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
