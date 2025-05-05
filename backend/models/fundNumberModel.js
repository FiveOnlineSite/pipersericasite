const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FundNumberSchema = new Schema({
  fund_name: {
    type: String,
  },
  fund_figures: {
    type: String,
  },
  fund_number1: {
    type: String,
  },

  fund_title1: {
    type: String,
  },

  fund_subtitle1: {
    type: String,
  },

  fund_number2: {
    type: String,
  },

  fund_title2: {
    type: String,
  },

  fund_subtitle2: {
    type: String,
  },

  fund_number3: {
    type: String,
  },

  fund_title3: {
    type: String,
  },

  fund_subtitle3: {
    type: String,
  },
});

const FundNumberModel = mongoose.model("Fund Numbers", FundNumberSchema);

module.exports = FundNumberModel;
