const contactController = require("../controllers/contactController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();

route.post("/", contactController.createContact);

route.get("/", contactController.getContacts);

route.delete("/:_id", adminMiddleware, contactController.deleteContact);

module.exports = route;
