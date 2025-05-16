const industryController = require("../controllers/industryController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();

route.post("/", adminMiddleware, industryController.createIndustry);

route.patch("/:_id", adminMiddleware, industryController.updateIndustry);

route.get("/:_id", industryController.getIndustry);

route.get("/", industryController.getAllIndustry);

route.delete("/:_id", adminMiddleware, industryController.deleteIndustry);

module.exports = route;
