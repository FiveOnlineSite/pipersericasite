const investorLetterController = require("../controllers/investorLetterController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "docs/investor-letter"); // Specify the folder where files will be stored
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
  investorLetterController.createInvestorLetter
);

route.patch(
  "/:_id",
  upload.single("file_upload"),
  adminMiddleware,
  investorLetterController.updateInvestorLetter
);

route.get("/:_id", investorLetterController.getInvestorLetter);

route.get("/", investorLetterController.getAllInvestorLetter);

route.delete(
  "/:_id",
  adminMiddleware,
  investorLetterController.deleteInvestorLetter
);

module.exports = route;
