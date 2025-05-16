const IndustryModel = require("../models/industryModel");

const createIndustry = async (req, res) => {
  try {
    const { industry } = req.body;

    const industryExist = await IndustryModel.findOne({
      industry,
    });

    if (industryExist) {
      return res.status(400).json({
        message:
          "This company industry already exists. Try adding company industry with another name",
      });
    }

    const newIndustry = new IndustryModel({
      industry,
    });

    await newIndustry.save();

    res.status(200).json({
      message: "Company industry created successfully.",
      newIndustry,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding company industry due to ${error.message}`,
    });
  }
};

const updateIndustry = async (req, res) => {
  try {
    const { industry } = req.body;

    const industryExist = await IndustryModel.findById(req.params._id);

    if (!industryExist) {
      return res.status(400).json({
        message: "No company industry found with this id to update.",
      });
    }

    const updatedFields = {
      ...(industry && { industry }),
    };

    const updatedIndustry = await IndustryModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    return res.status(200).json({
      message: "Company industry updated successfully.",
      updatedIndustry,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating company industry due to ${error.message}`,
    });
  }
};

const getIndustry = async (req, res) => {
  try {
    const industryExist = await IndustryModel.findById(req.params._id);

    if (!industryExist) {
      return res.status(400).json({
        message: "No company industry is created with this id.",
      });
    }

    return res.status(200).json({
      message: "Company industry fetched successfully.",
      industryExist,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching company industry due to ${error.message}`,
    });
  }
};

const getAllIndustry = async (req, res) => {
  try {
    const industries = await IndustryModel.find();
    // console.log(teams)

    if (industries.length === 0) {
      return res.status(400).json({
        message: "No company industries are created. Kindly create one.",
      });
    }

    return res.status(200).json({
      message: "All company industries fetched successfully.",
      count: industries.length,
      industries,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching company industries due to ${error.message}`,
    });
  }
};

const deleteIndustry = async (req, res) => {
  try {
    const industryExists = await IndustryModel.findById(req.params._id);

    if (!industryExists) {
      return res.status(400).json({
        message: "Company industry not found.",
      });
    }

    const deletedIndustry = await IndustryModel.findByIdAndDelete(
      req.params._id
    );

    if (!deletedIndustry) {
      return res.status(500).json({
        message: "Error in deleting the company industry.",
      });
    }

    return res.status(200).json({
      message: "Company industry deleted successfully.",
      deletedIndustry,
    });
  } catch (error) {
    console.error(`Error in deleting company industry: ${error.message}`);
    return res.status(500).json({
      message: `Error in deleting company industry due to ${error.message}`,
    });
  }
};

module.exports = {
  createIndustry,
  updateIndustry,
  getIndustry,
  getAllIndustry,
  deleteIndustry,
};
