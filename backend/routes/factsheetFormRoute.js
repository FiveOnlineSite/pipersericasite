const factsheetFormController = require("../controllers/factsheetFormController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();

route.post("/", adminMiddleware, factsheetFormController.createFactsheetForm);

route.get("/", factsheetFormController.getFactsheetForms);

route.delete(
  "/:_id",
  adminMiddleware,
  factsheetFormController.deleteFactsheetForm
);

module.exports = route;
