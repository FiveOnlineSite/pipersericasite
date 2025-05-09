// controllers/metaTagController.js
const MetaTagModel = require("../models/metaTagModel");

const createMetaTag = async (req, res) => {
  const { page, metaTitle, metaDescription } = req.body;

  try {
    const newMetaTag = new MetaTagModel({
      page,
      metaTitle,
      metaDescription,
    });

    await newMetaTag.save();

    res.status(201).json({ message: "Meta tag created successfully" });
  } catch (error) {
    console.error("Error creating meta tag:", error);
    res
      .status(500)
      .json({ message: "Error creating meta tag: " + error.message });
  }
};

const getMetaTagById = async (req, res) => {
  try {
    const metaTag = await MetaTagModel.findById(req.params._id);

    if (!metaTag) {
      return res
        .status(404)
        .json({ message: "Meta tag not found for this id." });
    }

    res.status(200).json(metaTag);
  } catch (error) {
    res
      .status(500)
      .json({ message: ` Error fetching meta tag: ${error.message}` });
  }
};

const getMetaTagByPage = async (req, res) => {
  try {
    const { page } = req.params;
    const metaTag = await MetaTagModel.findOne({ page });

    if (!metaTag) {
      return res
        .status(404)
        .json({ message: "Meta tag not found for this page." });
    }

    res.status(200).json(metaTag);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching meta tag: ${error.message}` });
  }
};

const updateMetaTag = async (req, res) => {
  try {
    const { page, metaTitle, metaDescription } = req.body;

    const metaTag = await MetaTagModel.findById(req.params._id);

    if (!metaTag) {
      return res.status(400).json({
        message: "No meta tag found with this id to update.",
      });
    }

    const updatedFields = {
      ...(page && { page }),
      ...(metaTitle && { metaTitle }),
      ...(metaDescription && { metaDescription }),
    };

    const updatedMetaTag = await MetaTagModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      message: "Meta tag updated successfully",
      updatedMetaTag,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error updating meta tag: ${error.message}` });
  }
};

const getAllMetaTags = async (req, res) => {
  try {
    const metaTag = await MetaTagModel.find();

    if (!metaTag) {
      return res
        .status(404)
        .json({ message: "Meta tag not found for this id." });
    }

    res.status(200).json(metaTag);
  } catch (error) {
    res
      .status(500)
      .json({ message: ` Error fetching meta tag: ${error.message}` });
  }
};

const deleteMetaTag = async (req, res) => {
  try {
    const metaTag = await MetaTagModel.findById(req.params._id);

    if (!metaTag) {
      return res.status(400).json({
        message: "meta tag not found.",
      });
    }

    const deletedMetaTag = await MetaTagModel.findByIdAndDelete(req.params._id);

    if (!deletedMetaTag) {
      return res.status(500).json({
        message: "Error in deleting the meta tag.",
      });
    }

    return res.status(200).json({
      message: "meta tag deleted successfully.",
      deletedMetaTag,
    });
  } catch (error) {
    console.error(`Error in deleting meta tag: ${error.message}`);
    return res.status(500).json({
      message: `Error in deleting meta tag due to ${error.message}`,
    });
  }
};

module.exports = {
  createMetaTag,
  getMetaTagById,
  getMetaTagByPage,
  getAllMetaTags,
  updateMetaTag,
  deleteMetaTag,
};
