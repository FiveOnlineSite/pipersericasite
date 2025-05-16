const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IndustrySchema = new Schema({
  industry: {
    type: String,
    required: true,
  },
});

const IndustryModel = mongoose.model("Company Industry", IndustrySchema);

module.exports = IndustryModel;
