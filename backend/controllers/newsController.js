const NewsModel = require("../models/newsModel");
const path = require("path");

const createNews = async (req, res) => {
  try {
    const { title, date, news_category_id, news_url } = req.body;
    let mediaData = {};
    {
      const file = req.file;

      if (!file) {
        return res.status(400).json({
          message: "A webp image is required for the logo field.",
        });
      }
      // Check if the file is a pdf
      const isWebp = (file) => {
        const extname = path.extname(file.originalname).toLowerCase();
        return extname === ".webp";
      };

      if (!isWebp(file)) {
        return res.status(400).json({
          message: "Unsupported image type. Please upload a webp image.",
        });
      }

      mediaData = {
        filename: req.file.originalname,
        filepath: req.file.path,
      };
    }

    const newNews = new NewsModel({
      thumbnail: mediaData,
      title,
      date,
      news_category_id,
      news_url,
    });

    await newNews.save();

    res.status(200).json({
      message: "Added news data successfully",
      newNews,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding news data: ${error.message}`,
    });
  }
};

const updateNews = async (req, res) => {
  try {
    const { title, date, news_category_id, news_url } = req.body;

    const existingNews = await NewsModel.findById(req.params._id);

    if (!existingNews) {
      return res.status(404).json({ message: "News data not found." });
    }

    // let mediaData = existingNews.thumbnail;

    let updatedFields = {};
    const file = req.file;
    if (file) {
      const fileExtensionName = path.extname(file.originalname).toLowerCase();

      if (fileExtensionName !== ".webp") {
        return res.status(400).json({
          message: "Unsupported image type. Please upload a webp image.",
        });
      }

      let fileData = {
        filename: req.file.originalname,
        filepath: req.file.path,
      };

      updatedFields.thumbnail = [fileData];
    }

    // Handle text fields
    if (title) updatedFields.title = title;
    if (date) updatedFields.date = date;
    if (news_category_id) updatedFields.news_category_id = news_category_id;
    if (news_url) updatedFields.news_url = news_url;

    // If no new thumbnail uploaded, preserve old one
    if (!file) {
      updatedFields.thumbnail = existingNews.thumbnail;
    }

    const updatedNews = await NewsModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      message: "Updated news data successfully",
      updatedNews,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating news data: ${error.message}`,
    });
  }
};

const getNews = async (req, res) => {
  try {
    const news = await NewsModel.findById(req.params._id);

    if (news.length === 0) {
      return res.status(400).json({
        message: "No news is created with this id.",
      });
    }
    return res.status(200).json({
      message: "News fetched successfully.",
      news,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching news due to ${error}.`,
    });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await NewsModel.find()
      .populate("news_category_id")
      .sort({ date: -1 });

    if (news.length === 0) {
      return res.status(400).json({
        message: "No news is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "All news fetched successfully.",
      count: news.length,
      news,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching all news due to ${error}.`,
    });
  }
};

const deleteNews = async (req, res) => {
  try {
    const news = await NewsModel.findByIdAndDelete(req.params._id);

    if (news.length === 0) {
      return res.status(400).json({
        message: "No news is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "Deleted news successfully.",
      news,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting news due to ${error}.`,
    });
  }
};

module.exports = {
  createNews,
  updateNews,
  getNews,
  getAllNews,
  deleteNews,
};
