const FactsheetFormModel = require("../models/factsheetFormModel");

const createFactsheetForm = async (req, res) => {
  try {
    const { name, email, fund_name } = req.body;

    const newFactsheetForm = new FactsheetFormModel({
      name,
      email,
      fund_name,
    });

    await newFactsheetForm.save();

    return res.status(200).json({
      message: "Added factsheet form content sucessfully.",
      newFactsheetForm,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding factsheet form due to ${error.message}`,
    });
  }
};

const getFactsheetForms = async (req, res) => {
  try {
    const factsheetform = await FactsheetFormModel.find();

    if (factsheetform.length === 0) {
      return res.status(400).json({
        message: "No record found to fetch",
      });
    }

    res.status(200).json({
      message: "Factsheet form retrieved successfully.",
      count: factsheetform.length,
      factsheetform,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error in fetching factsheet form: ${error.message}`,
    });
  }
};

const deleteFactsheetForm = async (req, res) => {
  try {
    const factsheetformid = req.params._id;

    const factsheetform = await FactsheetFormModel.findById(factsheetformid);
    if (!factsheetform) {
      return res.status(404).json({
        message: "factsheet form not found.",
      });
    }

    await FactsheetFormModel.findByIdAndDelete(factsheetformid);

    res.status(200).json({
      message: "factsheet form deleted successfully.",
      deletedfactsheetform: factsheetform,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error in deleting factsheet form: ${error.message}`,
    });
  }
};

module.exports = {
  createFactsheetForm,
  getFactsheetForms,
  deleteFactsheetForm,
};
