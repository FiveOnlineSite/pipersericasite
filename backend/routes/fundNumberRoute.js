const fundNumberController = require("../controllers/fundNumberController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();

route.post("/", adminMiddleware, fundNumberController.createFundNumber);

route.patch("/:_id", adminMiddleware, fundNumberController.updateFundNumber);

route.get("/by-id/:_id", fundNumberController.getFundNumberById);

route.get("/", fundNumberController.getAllFundNumber);

route.get("/by-name/:fundName", fundNumberController.getFundNumberByFund);

route.delete("/:_id", adminMiddleware, fundNumberController.deleteFundNumber);

module.exports = route;
