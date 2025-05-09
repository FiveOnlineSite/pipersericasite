const metaTagController = require("../controllers/metaTagController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();

route.post("/", adminMiddleware, metaTagController.createMetaTag);

route.patch("/:_id", adminMiddleware, metaTagController.updateMetaTag);

route.get("/by-id/:_id", metaTagController.getMetaTagById);

route.get("/by-page/:page", metaTagController.getMetaTagByPage);

route.get("/", metaTagController.getAllMetaTags);

route.delete("/:_id", adminMiddleware, metaTagController.deleteMetaTag);

module.exports = route;
