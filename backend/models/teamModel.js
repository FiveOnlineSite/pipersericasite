const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  linkedin_url: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
  },
});

const TeamModel = mongoose.model("Team", TeamSchema);

module.exports = TeamModel;
