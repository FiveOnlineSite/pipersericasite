const teamController = require("../controllers/teamController");
const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const route = express.Router();

route.post("/", adminMiddleware, teamController.createTeam);

route.patch("/:_id", adminMiddleware, teamController.updateTeam);

route.get("/:_id", teamController.getTeam);

route.get("/", teamController.getTeams);

route.delete("/:_id", adminMiddleware, teamController.deleteTeam);

module.exports = route;
