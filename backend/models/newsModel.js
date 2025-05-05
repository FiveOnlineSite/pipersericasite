const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new mongoose.Schema({
  thumbnail: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },

  news_category_id: {
    type: mongoose.Types.ObjectId,
    ref: "News Category",
    required: true,
  },
  news_url: {
    type: String,
    required: true,
  },
});

const NewsModel = mongoose.model("News", NewsSchema);

module.exports = NewsModel;
