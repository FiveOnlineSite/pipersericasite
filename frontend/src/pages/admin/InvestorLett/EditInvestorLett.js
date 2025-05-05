import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditInvestorLett = () => {
  const { id } = useParams();
  const [investorLetter, setInvestorLetter] = useState("");

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    month_year: "",
    file_upload: {
      filename: "",
      filepath: "",
    },
  });

  useEffect(() => {
    const fetchInvestorLetter = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `investor-letter/${id}`,
        });

        const data = response.data.investorLetter;
        console.log("Investor letter", data);

        // Set the form data directly
        setFormData({
          title: data.title || "",
          month_year: data.month_year || "",
          file_upload: {
            filename: data.file_upload?.[0]?.filename || "",
            filepath: data.file_upload?.[0]?.filepath || "",
          },
        });
      } catch (error) {
        console.error("Error fetching factsheet/presentation:", error);
      }
    };

    fetchInvestorLetter();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("title", formData.title);

      formDataToSend.append("month_year", formData.month_year);

      if (formData.file_upload.file) {
        formDataToSend.append("file_upload", formData.file_upload.file);
      }

      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `investor-letter/${id}`,
        data: formDataToSend, // Pass form data directly
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // setGallery(response.data.updatedGallery);
      console.log("Investor letter updated:", response.data.updatedGallery);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/investor-letter");
    } catch (error) {
      console.error("Error updating investor letter:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit Investor Letter</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Month/Year</label>

                <input
                  type="text"
                  name="month_year"
                  required
                  value={formData.month_year}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Document</label>
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

export default EditInvestorLett;
