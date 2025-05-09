const mongoose = require("mongoose");

const MetaTagSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    unique: true,
  },
  metaTitle: {
    type: String,
    default: "",
  },
  metaDescription: {
    type: String,
    default: "",
  },
});

const MetaTagModel = mongoose.model("Meta Tag", MetaTagSchema);

module.exports = MetaTagModel;
