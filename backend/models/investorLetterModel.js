const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestorLetterSchema = new mongoose.Schema({
  file_upload: {
    type: Array,
    required: true,
  },
  month_year: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const InvestorLetterModel = mongoose.model(
  "Investor Letter",
  InvestorLetterSchema
);

module.exports = InvestorLetterModel;
