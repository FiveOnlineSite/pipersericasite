const FundNumberModel = require("../models/fundNumberModel");

const createFundNumber = async (req, res) => {
  console.log(req.body);
  try {
    const {
      fund_name = "",
      fund_figures = "",
      fund_number1 = "",
      fund_title1 = "",
      fund_subtitle1 = "",
      fund_number2 = "",
      fund_title2 = "",
      fund_subtitle2 = "",
      fund_number3 = "",
      fund_title3 = "",
      fund_subtitle3 = "",
    } = req.body;

    // Check if required fields are provided
    if (!fund_name || !fund_number1 || !fund_title1) {
      return res.status(400).json({
        message:
          "Fund Name, Fund Number 1, and Fund Title 1 are required fields.",
      });
    }

    const newFundNumber = new FundNumberModel({
      fund_name,
      fund_figures,
      fund_number1,
      fund_title1,
      fund_subtitle1,
      fund_number2,
      fund_title2,
      fund_subtitle2,
      fund_number3,
      fund_title3,
      fund_subtitle3,
    });

    await newFundNumber.save();

    res.status(200).json({
      message: "Added fund number data successfully",
      newFundNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding fund number data: ${error.message}`,
    });
  }
};

const updateFundNumber = async (req, res) => {
  try {
    const {
      fund_name,
      fund_figures,
      fund_number1,
      fund_title1,
      fund_subtitle1,
      fund_number2,
      fund_title2,
      fund_subtitle2,
      fund_number3,
      fund_title3,
      fund_subtitle3,
    } = req.body;

    const existingFundNumber = await FundNumberModel.findById(req.params._id);

    if (!existingFundNumber) {
      return res.status(404).json({ message: "Fund Number data not found." });
    }

    const updatedFields = {};
    if ("fund_name" in req.body) updatedFields.fund_name = fund_name;
    if ("fund_figures" in req.body) updatedFields.fund_figures = fund_figures;
    if ("fund_number1" in req.body) updatedFields.fund_number1 = fund_number1;
    if ("fund_title1" in req.body) updatedFields.fund_title1 = fund_title1;
    if ("fund_subtitle1" in req.body)
      updatedFields.fund_subtitle1 = fund_subtitle1;
    if ("fund_number2" in req.body) updatedFields.fund_number2 = fund_number2;
    if ("fund_title2" in req.body) updatedFields.fund_title2 = fund_title2;
    if ("fund_subtitle2" in req.body)
      updatedFields.fund_subtitle2 = fund_subtitle2;
    if ("fund_number3" in req.body) updatedFields.fund_number3 = fund_number3;
    if ("fund_title3" in req.body) updatedFields.fund_title3 = fund_title3;
    if ("fund_subtitle3" in req.body)
      updatedFields.fund_subtitle3 = fund_subtitle3;

    const updatedFundNumber = await FundNumberModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      message: "Updated fund number data successfully",
      updatedFundNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating fund number data: ${error.message}`,
    });
  }
};

const getFundNumberById = async (req, res) => {
  try {
    const fundNumber = await FundNumberModel.findById(req.params._id);

    if (fundNumber.length === 0) {
      return res.status(400).json({
        message: "No fund number data is created with this id.",
      });
    }
    return res.status(200).json({
      message: "Fund number data fetched successfully.",

      fundNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fund number data due to ${error}.`,
    });
  }
};

const getFundNumberByFund = async (req, res) => {
  try {
    let { fundName } = req.params;

    if (fundName) {
      // Convert slug-like string to regular string
      fundName = fundName.replace(/-/g, " ");

      const fundNumbers = await FundNumberModel.find({
        fund_name: { $regex: new RegExp(`^${fundName}$`, "i") }, // case-insensitive exact match
      });

      return res.status(200).json({
        message: "Filtered fund number data fetched successfully.",
        fundNumbers,
      });
    }

    // Otherwise, return all fund numbers
    const fundNumbers = await FundNumberModel.find();
    return res.status(200).json({
      message: "All fund number data fetched successfully.",
      fundNumbers,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fund number data due to ${error}.`,
    });
  }
};

const getAllFundNumber = async (req, res) => {
  try {
    const fundNumbers = await FundNumberModel.find();

    if (fundNumbers.length === 0) {
      return res.status(400).json({
        message: "No fund number data is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "All fund number data fetched successfully.",
      count: fundNumbers.length,
      fundNumbers,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching all fund number data due to ${error}.`,
    });
  }
};

const deleteFundNumber = async (req, res) => {
  try {
    const fundNumber = await FundNumberModel.findByIdAndDelete(req.params._id);

    if (fundNumber.length === 0) {
      return res.status(400).json({
        message: "No fund number data is created. Kindly create one.",
      });
    }
    return res.status(200).json({
      message: "Deleted fund number data successfully.",
      fundNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in deleting fund number data due to ${error}.`,
    });
  }
};

module.exports = {
  createFundNumber,
  updateFundNumber,
  getFundNumberById,
  getAllFundNumber,
  getFundNumberByFund,
  deleteFundNumber,
};
