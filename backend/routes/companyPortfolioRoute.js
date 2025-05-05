const companyPortflioController = require("../controllers/companyPortfolioController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/company-logos"); // Specify the folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for storing
  },
});
const upload = multer({ storage: storage });

route.post(
  "/",
  upload.single("logo"),
  adminMiddleware,
  companyPortflioController.createCompany
);

route.patch(
  "/:_id",
  upload.single("logo"),
  adminMiddleware,
  companyPortflioController.updateCompany
);

route.get("/:_id", companyPortflioController.getCompany);

route.get("/", companyPortflioController.getAllCompany);

route.delete("/:_id", adminMiddleware, companyPortflioController.deleteCompany);

module.exports = route;
