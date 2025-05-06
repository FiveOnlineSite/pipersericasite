import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";

const AddFundNumber = () => {
  const [selectedFundName, setSelectedFundName] = useState("");
  const [fundNumber1, setFundNumber1] = useState("");
  const [fundNumber2, setFundNumber2] = useState("");
  const [fundNumber3, setFundNumber3] = useState("");
  const [fundTitle1, setFundTitle1] = useState("");
  const [fundTitle2, setFundTitle2] = useState("");
  const [fundTitle3, setFundTitle3] = useState("");
  const [fundSubtitle1, setFundSubtitle1] = useState("");
  const [fundSubtitle2, setFundSubtitle2] = useState("");
  const [fundSubtitle3, setFundSubtitle3] = useState("");
  const [fundFigures, setFundFigures] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log to check the field values
    console.log("Selected Fund Name:", selectedFundName);
    console.log("Fund Number 1:", fundNumber1);
    console.log("Fund Title 1:", fundTitle1);

    // Check if required fields are set
    if (!selectedFundName || !fundNumber1 || !fundTitle1) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    console.log(
      "Form Data",
      selectedFundName,
      fundNumber1,
      fundNumber2,
      fundNumber3,
      fundTitle1,
      fundTitle2,
      fundTitle3,
      fundSubtitle1,
      fundSubtitle2,
      fundSubtitle3,
      fundFigures
    );

    try {
      // const formData = new FormData();
      // formData.append("fund_name", selectedFundName);
      // formData.append("fund_number1", fundNumber1);
      // formData.append("fund_number2", fundNumber2);
      // formData.append("fund_number3", fundNumber3);
      // formData.append("fund_title1", fundTitle1);
      // formData.append("fund_title2", fundTitle2);
      // formData.append("fund_title3", fundTitle3);
      // formData.append("fund_subtitle1", fundSubtitle1);
      // formData.append("fund_subtitle2", fundSubtitle2);
      // formData.append("fund_subtitle3", fundSubtitle3);
      // formData.append("fund_figures", fundFigures);

      // console.log("FormData being sent: ", formData);
      const formData = {
        fund_name: selectedFundName,
        fund_number1: fundNumber1,
        fund_number2: fundNumber2,
        fund_number3: fundNumber3,
        fund_title1: fundTitle1,
        fund_title2: fundTitle2,
        fund_title3: fundTitle3,
        fund_subtitle1: fundSubtitle1,
        fund_subtitle2: fundSubtitle2,
        fund_subtitle3: fundSubtitle3,
        fund_figures: fundFigures,
      };
      const access_token = localStorage.getItem("access_token");

      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(`${apiUrl}/api/fund-number`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log(response.data.newFundNumber);

      navigate("/admin/fund-number");
    } catch (error) {
      console.error("Error creating fund numbers:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Add Fund Number</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund / Investor Name</label>
                <select
                  value={selectedFundName}
                  required
                  onChange={(e) => {
                    setSelectedFundName(e.target.value);
                  }}
                >
                  <option value="">Select a Fund / Investor</option>
                  <option value="PMS">PMS</option>
                  <option value="FPI">FPI</option>
                  <option value="AIF">AIF</option>
                  <option value="Foreign Investor">Foreign Investor</option>
                  <option value="NRI Investor">NRI Investor</option>
                  <option value="Family Office & Indian Investor">
                    Family Office & Indian Investor
                  </option>
                  <option value="Startup Founder & Enterpreneur">
                    Startup Founder & Enterpreneur
                  </option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Figures</label>
                <input
                  type="text"
                  name="title"
                  value={fundFigures}
                  onChange={(e) => setFundFigures(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 1</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={fundNumber1}
                  onChange={(e) => setFundNumber1(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 1</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={fundTitle1}
                  onChange={(e) => setFundTitle1(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 1</label>
                <input
                  type="text"
                  name="title"
                  value={fundSubtitle1}
                  onChange={(e) => setFundSubtitle1(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 2</label>
                <input
                  type="text"
                  name="title"
                  value={fundNumber2}
                  onChange={(e) => setFundNumber2(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 2</label>
                <input
                  type="text"
                  name="title"
                  value={fundTitle2}
                  onChange={(e) => setFundTitle2(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 2</label>
                <input
                  type="text"
                  name="title"
                  value={fundSubtitle2}
                  onChange={(e) => setFundSubtitle2(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 3</label>
                <input
                  type="text"
                  name="title"
                  value={fundNumber3}
                  onChange={(e) => setFundNumber3(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 3</label>
                <input
                  type="text"
                  name="title"
                  value={fundTitle3}
                  onChange={(e) => setFundTitle3(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 3</label>
                <input
                  type="text"
                  name="title"
                  value={fundSubtitle3}
                  onChange={(e) => setFundSubtitle3(e.target.value)}
                />
              </div>
            </div>

            {errorMessage && (
              <div className="error-message text-danger mt-2">
                {errorMessage}
              </div>
            )}

            <div className="col-12">
              <div className="theme-form">
                <button type="submit">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddFundNumber;
