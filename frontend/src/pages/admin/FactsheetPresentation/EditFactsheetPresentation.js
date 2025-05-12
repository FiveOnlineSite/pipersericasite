import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditFactsheetPresentation = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [factsheetPresentation, setFactsheetPresentation] = useState(null);
  const [selectedFactsheetPresentation, setSelectedFactsheetPresentation] =
    useState("");

  const [formData, setFormData] = useState({
    fund_name: "",
    option: "",
    file_upload: {
      filename: "",
      filepath: "",
    },
  });

  useEffect(() => {
    const fetchFactsheetPresentation = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `factsheet-presentation/${id}`,
        });

        const data = response.data.factsheetPresentation;
        console.log("Factsheetpresentation", data);

        // Set the form data directly
        setFormData({
          fund_name: data.fund_name || "",
          option: data.option || "",
          file_upload: {
            filename: data.file_upload?.[0]?.filename || "",
            filepath: data.file_upload?.[0]?.filepath || "",
          },
        });
      } catch (error) {
        console.error("Error fetching factsheet/presentation:", error);
      }
    };

    fetchFactsheetPresentation();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file_upload") {
      if (files && files.length > 0) {
        setFormData({
          ...formData,
          file_upload: {
            file: files[0],
            filename: files[0].name,
            filepath: URL.createObjectURL(files[0]),
          },
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    setFactsheetPresentation(selectedFactsheetPresentation);
  }, [selectedFactsheetPresentation]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("fund_name", formData.fund_name);
      formDataToSend.append("option", formData.option);

      if (formData.file_upload.file) {
        formDataToSend.append("file_upload", formData.file_upload.file);
      }

      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `factsheet-presentation/${id}`,
        data: formDataToSend, // Pass form data directly
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // setGallery(response.data.updatedGallery);
      console.log(
        "Factsheet / Presentation updated:",
        response.data.updatedFactsheetPresentation
      );
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/factsheet-presentation");
    } catch (error) {
      console.error("Error updating Factsheet / Presentation:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit Factsheet / Presentation</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Fund Name</label>
                <select
                  name="fund_name"
                  value={formData.fund_name}
                  // onChange={handleChange}
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
                  name="option"
                  value={formData.option}
                  // onChange={handleChange}
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
                  onChange={handleChange}
                />{" "}
                {formData.file_upload.filename && (
                  <div className="mt-2">
                    <strong>Selected File:</strong>{" "}
                    {formData.file_upload.filename}
                  </div>
                )}
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

export default EditFactsheetPresentation;
