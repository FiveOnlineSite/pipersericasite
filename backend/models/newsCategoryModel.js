const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsCategorySchema = new Schema({
  news_category: {
    type: String,
    required: true,
  },
});

const NewsCategoryModel = mongoose.model("News Category", NewsCategorySchema);

module.exports = NewsCategoryModel;
