const PresentationFormModel = require("../models/presentationFormModel");

const createPresentationForm = async (req, res) => {
  try {
    const { name, email, fund_name } = req.body;

    const newPresentationForm = new PresentationFormModel({
      name,
      email,
      fund_name,
    });

    await newPresentationForm.save();

    return res.status(200).json({
      message: "Added presentation form content sucessfully.",
      newPresentationForm,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding presentation form due to ${error.message}`,
    });
  }
};

const getPresentationForms = async (req, res) => {
  try {
    const presentationform = await PresentationFormModel.find();

    if (presentationform.length === 0) {
      return res.status(400).json({
        message: "No record found to fetch",
      });
    }

    res.status(200).json({
      message: "presentation form retrieved successfully.",
      count: presentationform.length,
      presentationform,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error in fetching presentation form: ${error.message}`,
    });
  }
};

const deletePresentationForm = async (req, res) => {
  try {
    const presentationformid = req.params._id;

    const presentationform = await PresentationFormModel.findById(
      presentationformid
    );
    if (!presentationform) {
      return res.status(404).json({
        message: "Presentation form not found.",
      });
    }

    await PresentationFormModel.findByIdAndDelete(presentationformid);

    res.status(200).json({
      message: "Presentation form deleted successfully.",
      deletedpresentationform: presentationform,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error in deleting presentation form: ${error.message}`,
    });
  }
};

module.exports = {
  createPresentationForm,
  getPresentationForms,
  deletePresentationForm,
};
