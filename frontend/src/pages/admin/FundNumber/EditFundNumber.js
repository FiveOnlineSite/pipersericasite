import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditFundNumber = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fund_name: "",
    fund_number1: "",
    fund_number2: "",
    fund_number3: "",
    fund_title1: "",
    fund_title2: "",
    fund_title3: "",
    fund_subtitle1: "",
    fund_subtitle2: "",
    fund_subtitle3: "",
    fund_figures: "",
  });

  useEffect(() => {
    const fetchFundNumber = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `fund-number/by-id/${id}`,
        });
        if (response.data && response.data.fundNumber) {
          const fundNumberData = response.data.fundNumber;
          console.log(fundNumberData);
          // Set the form data directly
          setFormData({
            fund_name: fundNumberData.fund_name || "",
            fund_number1: fundNumberData.fund_number1 || "",
            fund_number2: fundNumberData.fund_number2 || "",
            fund_number3: fundNumberData.fund_number3 || "",
            fund_title1: fundNumberData.fund_title1 || "",
            fund_title2: fundNumberData.fund_title2 || "",
            fund_title3: fundNumberData.fund_title3 || "",
            fund_subtitle1: fundNumberData.fund_subtitle1 || "",
            fund_subtitle2: fundNumberData.fund_subtitle2 || "",
            fund_subtitle3: fundNumberData.fund_subtitle3 || "",
            fund_figures: fundNumberData.fund_figures || "",
          });
        }
        // Set media state from galleryData
        // setMedia(galleryData.media);
      } catch (error) {
        console.error("Error fetching fund number:", error);
      }
    };

    fetchFundNumber();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `fund-number/${id}`,
        data: formData, // Pass form data directly
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // setGallery(response.data.updatedGallery);
      console.log("Fund number updated:", response.data.updatedFundNumber);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/fund-number");
    } catch (error) {
      console.error("Error updating fund number:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit Fund Number</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund / Investor Name</label>
                <select
                  required
                  name="fund_name"
                  value={formData.fund_name}
                  // onChange={handleChange}
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
                  name="fund_figures"
                  value={formData.fund_figures}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 1</label>
                <input
                  type="text"
                  name="fund_number1"
                  required
                  value={formData.fund_number1}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 1</label>
                <input
                  type="text"
                  name="fund_title1"
                  value={formData.fund_title1}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 1</label>
                <input
                  type="text"
                  name="fund_subtitle1"
                  value={formData.fund_subtitle1}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 2</label>
                <input
                  type="text"
                  name="fund_number2"
                  value={formData.fund_number2}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 2</label>
                <input
                  type="text"
                  name="fund_title2"
                  value={formData.fund_title2}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 2</label>
                <input
                  type="text"
                  name="fund_subtitle2"
                  value={formData.fund_subtitle2}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Number 3</label>
                <input
                  type="text"
                  name="fund_number3"
                  value={formData.fund_number3}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Title 3</label>
                <input
                  type="text"
                  name="fund_title3"
                  value={formData.fund_title3}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Subtitle 3</label>
                <input
                  type="text"
                  name="fund_subtitle3"
                  value={formData.fund_subtitle3}
                  onChange={handleChange}
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

export default EditFundNumber;
