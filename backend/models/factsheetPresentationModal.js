const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FactsheetPresentationSchema = new mongoose.Schema({
  fund_name: {
    type: String,
    enum: ["", "PMS", "FPI"],
    default: "",
    required: true,
  },
  option: {
    type: String,
    enum: ["", "Factsheet", "Presentation"],
    default: "",
    required: true,
  },
  file_upload: {
    type: Array,
    required: true,
  },
});

const FactsheetPresentationModel = mongoose.model(
  "Factsheet Presentation",
  FactsheetPresentationSchema
);

module.exports = FactsheetPresentationModel;
