const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    investor_type: {
      type: String,
      enum: ["", "Investor", "Distributor", "Start-up Founder", "Other"],
      default: "",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;
