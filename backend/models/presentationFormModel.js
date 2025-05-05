const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PresentationFormSchema = new mongoose.Schema(
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

const PresentationFormModel = mongoose.model(
  "Presentation Form",
  PresentationFormSchema
);

module.exports = PresentationFormModel;
