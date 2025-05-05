const presentationFormController = require("../controllers/presentationFormController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();

route.post(
  "/",
  adminMiddleware,
  presentationFormController.createPresentationForm
);

route.get("/", presentationFormController.getPresentationForms);

route.delete(
  "/:_id",
  adminMiddleware,
  presentationFormController.deletePresentationForm
);

module.exports = route;
