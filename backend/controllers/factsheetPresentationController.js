const FactsheetPresentationModel = require("../models/factsheetPresentationModal");
const path = require("path");

const createFactsheetPresentation = async (req, res) => {
  try {
    const { fund_name, option } = req.body;
    let fileData = {};
    let fileType = "";
    {
      const file = req.file;

      if (!file) {
        return res.status(400).json({
          message: "A pdf file is required for the file field.",
        });
      }
      // Check if the file is a pdf
      const isPdf = (file) => {
        const extname = path.extname(file.originalname).toLowerCase();
        return extname === ".pdf";
      };

      if (!isPdf(file)) {
        return res.status(400).json({
          message: "Unsupported file type. Please upload a pdf.",
        });
      }

      fileType = "pdf";
      fileData = {
        filename: req.file.originalname,
        filepath: req.file.path,
      };
    }

    const newfactsheetPresentation = new FactsheetPresentationModel({
      fund_name,
      option,
      file_upload: fileData,
    });

    await newfactsheetPresentation.save();

    res.status(200).json({
      message: "Added Factsheet / Presentation data successfully",
      newfactsheetPresentation,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding data: ${error.message}`,
    });
  }
};

const updateFactsheetPresentation = async (req, res) => {
  try {
    const { fund_name, option } = req.body;

    const existingFactsheetPresentation =
      await FactsheetPresentationModel.findById(req.params._id);

    if (!existingFactsheetPresentation) {
      return res
        .status(404)
        .json({ message: "Factsheet / Presentation not found." });
    }

    let fileData = existingFactsheetPresentation.file_upload;
    const file = req.file;
    {
      if (file) {
        const fileExtensionName = path.extname(file.originalname).toLowerCase();

        if (fileExtensionName !== ".pdf") {
          return res.status(400).json({
            message: "Unsupported file type. Please upload a pdf.",
          });
        }

        fileData = {
          filename: req.file.originalname,
          filepath: req.file.path,
        };
      }
    }

    // Create object with updated fields
    const updatedFields = {
      ...(fund_name && { fund_name }),
      ...(option && { option }),
      ...(file && { file_upload: fileData }),
    };

    const updatedFactsheetPresentation =
      await FactsheetPresentationModel.findByIdAndUpdate(
        req.params._id,
        updatedFields,
        { new: true }
      );

    res.status(200).json({
      message: "Updated Factsheet / Presentation data successfully",
      updatedFactsheetPresentation,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating data: ${error.message}`,
    });
  }
};

const getFactsheetPresentation = async (req, res) => {
  try {
    const factsheetPresentation = await FactsheetPresentationModel.findById(
      req.params._id
    );

    if (factsheetPresentation.length === 0) {
      return res.status(400).json({
        message: "No Factsheet / Presentation is created with this id.",
      });
    }
    return res.status(200).json({
      message: "Factsheet / Presentation fetched successfully.",
      factsheetPresentation,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching Factsheet / Presentation due to ${error}.`,
    });
  }
};

const getAllFactsheetPresentation = async (req, res) => {
  try {
    const factsheetPresentation = await FactsheetPresentationModel.find();

    if (factsheetPresentation.length === 0) {
      return res.status(400).json({
        message: "No Factsheet / Presentation is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "All Factsheet / Presentation fetched successfully.",
      count: factsheetPresentation.length,
      factsheetPresentation,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching all Factsheet / Presentation due to ${error}.`,
    });
  }
};

const deleteFactsheetPresentation = async (req, res) => {
  try {
    const factsheetPresentation =
      await FactsheetPresentationModel.findByIdAndDelete(req.params._id);

    if (factsheetPresentation.length === 0) {
      return res.status(400).json({
        message: "No Factsheet / Presentation is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "Deleted Factsheet / Presentation successfully.",
      factsheetPresentation,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting Factsheet / Presentation due to ${error}.`,
    });
  }
};

module.exports = {
  createFactsheetPresentation,
  updateFactsheetPresentation,
  getFactsheetPresentation,
  getAllFactsheetPresentation,
  deleteFactsheetPresentation,
};
