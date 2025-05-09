const InvestorLetterModel = require("../models/investorLetterModel");
const path = require("path");

const createInvestorLetter = async (req, res) => {
  try {
    const { month_year } = req.body;
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

    const newInvestorLetter = new InvestorLetterModel({
      month_year,
      file_upload: fileData,
    });

    await newInvestorLetter.save();

    res.status(200).json({
      message: "Added investor letter data successfully",
      newInvestorLetter,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding data: ${error.message}`,
    });
  }
};

const updateInvestorLetter = async (req, res) => {
  try {
    const { month_year } = req.body;

    const existingInvestorLetter = await InvestorLetterModel.findById(
      req.params._id
    );

    if (!existingInvestorLetter) {
      return res.status(404).json({ message: "InvestorLetter not found." });
    }

    let fileData = existingInvestorLetter.file_upload;
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
      ...(month_year && { month_year }),
      ...(file && { file_upload: fileData }),
    };

    const updatedInvestorLetter = await InvestorLetterModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      message: "Updated Investor Letter data successfully",
      updatedInvestorLetter,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating data: ${error.message}`,
    });
  }
};

const getInvestorLetter = async (req, res) => {
  try {
    const investorLetter = await InvestorLetterModel.findById(req.params._id);

    if (investorLetter.length === 0) {
      return res.status(400).json({
        message: "No Investor Letter is created with this id.",
      });
    }
    return res.status(200).json({
      message: "InvestorLetter fetched successfully.",
      investorLetter,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching Investor Letter due to ${error}.`,
    });
  }
};

const getAllInvestorLetter = async (req, res) => {
  try {
    const investorLetter = await InvestorLetterModel.find();

    if (investorLetter.length === 0) {
      return res.status(400).json({
        message: "No Investor Letter is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "All Investor Letter fetched successfully.",
      count: investorLetter.length,
      investorLetter,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching all InvestorLetter due to ${error}.`,
    });
  }
};

const deleteInvestorLetter = async (req, res) => {
  try {
    const investorLetter = await InvestorLetterModel.findByIdAndDelete(
      req.params._id
    );

    if (investorLetter.length === 0) {
      return res.status(400).json({
        message: "No Investor Letter is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "Deleted Investor Letter successfully.",
      investorLetter,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting Investor Letter due to ${error}.`,
    });
  }
};

module.exports = {
  createInvestorLetter,
  updateInvestorLetter,
  getInvestorLetter,
  getAllInvestorLetter,
  deleteInvestorLetter,
};
