import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFactsheetPresentation = () => {
  const [selectedFactsheetPresentation, setSelectedFactsheetPresentation] =
    useState("");
  const [selectedFundName, setSelectedFundName] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Set isPublic to false if the checkbox is unchecked

      const formData = new FormData();
      formData.append("fund_name", selectedFundName);
      formData.append("option", selectedFactsheetPresentation);

      if (fileUpload?.file) {
        formData.append("file_upload", fileUpload.file);
      }

      const access_token = localStorage.getItem("access_token");

      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(
        `${apiUrl}/api/factsheet-presentation`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      console.log(response.data.newfactsheetPresentation);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/factsheet-presentation");
    } catch (error) {
      console.error("Error creating factsheet / presentation:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Add Factsheet / Presentation</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Name</label>
                <select
                  value={selectedFundName}
                  required
                  onChange={(e) => setSelectedFundName(e.target.value)}
                >
                  <option value="">Select a Fund</option>
                  <option value="PMS">PMS</option>
                  <option value="FPI">FPI</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Factsheet / Presentation</label>
                <select
                  value={selectedFactsheetPresentation}
                  required
                  onChange={(e) =>
                    setSelectedFactsheetPresentation(e.target.value)
                  }
                >
                  <option value="">Select a option</option>
                  <option value="Factsheet">Factsheet</option>
                  <option value="Presentation">Presentation</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>File Upload</label>

                <input
                  type="file"
                  name="file_upload"
                  accept=".pdf"
                  onChange={(e) =>
                    setFileUpload({
                      ...fileUpload,
                      file: e.target.files[0],
                    })
                  }
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

export default AddFactsheetPresentation;
