const newsController = require("../controllers/newsController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/thumbnails"); // Specify the folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for storing
  },
});
const upload = multer({ storage: storage });

route.post(
  "/",
  upload.single("thumbnail"),
  adminMiddleware,
  newsController.createNews
);

route.patch(
  "/:_id",
  upload.single("thumbnail"),
  adminMiddleware,
  newsController.updateNews
);

route.get("/:_id", newsController.getNews);

route.get("/", newsController.getAllNews);

route.delete("/:_id", adminMiddleware, newsController.deleteNews);

module.exports = route;
