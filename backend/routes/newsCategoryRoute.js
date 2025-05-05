const newsCategoryController = require("../controllers/newsCategoryController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();

route.post("/", adminMiddleware, newsCategoryController.createNewsCategory);

route.patch(
  "/:_id",
  adminMiddleware,
  newsCategoryController.updateNewsCategory
);

route.get("/:_id", newsCategoryController.getNewsCategory);

route.get("/", newsCategoryController.getAllNewsCategory);

route.delete(
  "/:_id",
  adminMiddleware,
  newsCategoryController.deleteNewsCategory
);

module.exports = route;
