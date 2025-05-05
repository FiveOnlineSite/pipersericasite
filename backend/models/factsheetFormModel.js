const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FactsheetFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fund_name: {
      type: String,
      enum: ["", "PMS", "FPI"],
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const FactsheetFormModel = mongoose.model(
  "FactSheet Form",
  FactsheetFormSchema
);

module.exports = FactsheetFormModel;
