const NewsCategoryModel = require("../models/newsCategoryModel");

const createNewsCategory = async (req, res) => {
  console.log("Received req.body:", req.body);

  try {
    const { news_category } = req.body;

    const newsCategoryExists = await NewsCategoryModel.findOne({
      news_category,
    });

    if (newsCategoryExists) {
      return res.status(400).json({
        message:
          "This news category already exists. Try adding news category with another name",
      });
    }

    const newNewsCategory = new NewsCategoryModel({
      news_category,
    });

    await newNewsCategory.save();

    res.status(200).json({
      message: "News category created successfully.",
      newNewsCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding news category due to ${error.message}`,
    });
  }
};

const updateNewsCategory = async (req, res) => {
  try {
    const { news_category } = req.body;

    const newsCategory = await NewsCategoryModel.findById(req.params._id);

    if (!newsCategory) {
      return res.status(400).json({
        message: "No news category found with this id to update.",
      });
    }

    const updatedFields = {
      ...(news_category && { news_category }),
    };

    const updatedNewsCategory = await NewsCategoryModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    return res.status(200).json({
      message: "News Category updated successfully.",
      updatedNewsCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating news category due to ${error.message}`,
    });
  }
};

const getNewsCategory = async (req, res) => {
  try {
    const newsCategory = await NewsCategoryModel.findById(req.params._id);

    if (!newsCategory) {
      return res.status(400).json({
        message: "No news category is created with this id.",
      });
    }

    return res.status(200).json({
      message: "News category fetched successfully.",
      newsCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching news category due to ${error.message}`,
    });
  }
};

const getAllNewsCategory = async (req, res) => {
  try {
    const newsCategory = await NewsCategoryModel.find();
    // console.log(teams)

    if (newsCategory.length === 0) {
      return res.status(400).json({
        message: "No news categories are created. Kindly create one.",
      });
    }

    return res.status(200).json({
      message: "All news categories fetched successfully.",
      count: newsCategory.length,
      newsCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching news categories due to ${error.message}`,
    });
  }
};

const deleteNewsCategory = async (req, res) => {
  try {
    const newsCategoryExists = await NewsCategoryModel.findById(req.params._id);

    if (!newsCategoryExists) {
      return res.status(400).json({
        message: "News Category not found.",
      });
    }

    const deleteNewsCategory = await NewsCategoryModel.findByIdAndDelete(
      req.params._id
    );

    if (!deleteNewsCategory) {
      return res.status(500).json({
        message: "Error in deleting the news category.",
      });
    }

    return res.status(200).json({
      message: "News category deleted successfully.",
      deleteNewsCategory,
    });
  } catch (error) {
    console.error(`Error in deleting news category: ${error.message}`);
    return res.status(500).json({
      message: `Error in deleting news category due to ${error.message}`,
    });
  }
};

module.exports = {
  createNewsCategory,
  updateNewsCategory,
  getNewsCategory,
  getAllNewsCategory,
  deleteNewsCategory,
};
