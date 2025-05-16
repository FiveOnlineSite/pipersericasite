const CompanyPortfolioModel = require("../models/companyPortfolioModel");
const path = require("path");

const createCompany = async (req, res) => {
  try {
    const { logo, industry, company_name, company_description, company_url } =
      req.body;
    let mediaData = {};
    {
      const file = req.file;

      if (!file) {
        return res.status(400).json({
          message: "A webp, png, jpg image is required for the logo field.",
        });
      }
      // Check if the file is a pdf
      const isImage = (file) => {
        const extname = path.extname(file.originalname).toLowerCase();
        return [".webp", ".jpg", ".jpeg", ".png"].includes(extname);
      };

      if (!isImage(file)) {
        return res.status(400).json({
          message:
            "Unsupported image type. Please upload a .webp, .jpg, or .png image.",
        });
      }

      mediaData = {
        filename: req.file.originalname,
        filepath: req.file.path,
      };
    }

    const newCompany = new CompanyPortfolioModel({
      industry,
      company_name,
      company_description,
      company_url,
      logo: mediaData,
    });

    await newCompany.save();

    res.status(200).json({
      message: "Added company data successfully",
      newCompany,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding company data: ${error.message}`,
    });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { industry, company_name, company_description, company_url } =
      req.body;

    const existingCompany = await CompanyPortfolioModel.findById(
      req.params._id
    );

    if (!existingCompany) {
      return res.status(404).json({ message: "Company data not found." });
    }

    const file = req.file;
    const updatedFields = {};

    if (file) {
      const fileExtensionName = path.extname(file.originalname).toLowerCase();

      const allowedExtensions = [".webp", ".png", ".jpg", ".jpeg"];

      if (!allowedExtensions.includes(fileExtensionName)) {
        return res.status(400).json({
          message:
            "Unsupported image type. Please upload a .webp, .png, .jpg, or .jpeg image.",
        });
      }

      const fileData = {
        filename: file.originalname,
        filepath: file.path,
      };

      updatedFields.logo = fileData;
    } else {
      // Preserve the existing logo if no new file uploaded
      updatedFields.logo = existingCompany.logo;
    }

    // Handle other fields if present
    if (industry) updatedFields.industry = industry;
    if (company_name) updatedFields.company_name = company_name;
    if (company_description)
      updatedFields.company_description = company_description;
    if (company_url) updatedFields.company_url = company_url;

    const updatedCompany = await CompanyPortfolioModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      message: "Updated company data successfully",
      updatedCompany,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating company data: ${error.message}`,
    });
  }
};

const getCompany = async (req, res) => {
  try {
    const company = await CompanyPortfolioModel.findById(req.params._id);

    if (company.length === 0) {
      return res.status(400).json({
        message: "No company is created with this id.",
      });
    }
    return res.status(200).json({
      message: "Company fetched successfully.",
      company,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching company due to ${error}.`,
    });
  }
};

const getAllCompany = async (req, res) => {
  try {
    const company = await CompanyPortfolioModel.find().populate("industry");

    if (company.length === 0) {
      return res.status(400).json({
        message: "No company is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "All company fetched successfully.",
      count: company.length,
      company,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching all company due to ${error}.`,
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const company = await CompanyPortfolioModel.findByIdAndDelete(
      req.params._id
    );

    if (company.length === 0) {
      return res.status(400).json({
        message: "No company is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "Deleted company successfully.",
      company,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting company due to ${error}.`,
    });
  }
};

module.exports = {
  createCompany,
  updateCompany,
  getCompany,
  getAllCompany,
  deleteCompany,
};
