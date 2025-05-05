const factsheetPresentationController = require("../controllers/factsheetPresentationController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "docs/factsheet-presentation"); // Specify the folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for storing
  },
});
const upload = multer({ storage: storage });

route.post(
  "/",
  upload.single("file_upload"),
  adminMiddleware,
  factsheetPresentationController.createFactsheetPresentation
);

route.patch(
  "/:_id",
  upload.single("file_upload"),
  adminMiddleware,
  factsheetPresentationController.updateFactsheetPresentation
);

route.get("/:_id", factsheetPresentationController.getFactsheetPresentation);

route.get("/", factsheetPresentationController.getAllFactsheetPresentation);

route.delete(
  "/:_id",
  adminMiddleware,
  factsheetPresentationController.deleteFactsheetPresentation
);

module.exports = route;
