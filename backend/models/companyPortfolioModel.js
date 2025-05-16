const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanyPortfolioSchema = new mongoose.Schema({
  logo: {
    type: Array,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  industry: {
    type: mongoose.Types.ObjectId,
    ref: "Company Industry",
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  company_description: {
    type: String,
    required: true,
  },
  company_url: {
    type: String,
    required: true,
  },
});

const CompanyPortfolioModel = mongoose.model(
  "Company Portfolio",
  CompanyPortfolioSchema
);

module.exports = CompanyPortfolioModel;
