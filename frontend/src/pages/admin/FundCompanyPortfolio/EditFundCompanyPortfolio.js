import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditFundCompanyPortfolio = () => {
  const { id } = useParams();
  const [industry, setIndustry] = useState([]);
  const [company, setCompany] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    industry: "",
    company_name: "",
    company_description: "",
    company_url: "",
    logo: {
      filename: "",
      filepath: "",
    },
  });

  const fetchIndustry = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios({
        method: "GET",
        baseURL: `${apiUrl}/api/`,
        url: `industry`,
      });

      const sortedIndustry = response.data.industries.sort((a, b) =>
        a.industry.localeCompare(b.industry)
      );
      setIndustry(sortedIndustry);
    } catch (error) {
      console.error("Error fetching industries:", error);
    }
  };

  useEffect(() => {
    fetchIndustry();
  }, []);

  useEffect(() => {
    const fetchCompany = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `company-portfolio/${id}`,
        });
        const companyData = response.data.company;
        setCompany(companyData);
        console.log(companyData);

        // setSelectedIndustry(companyData.industry || "");

        // Set media state from galleryData
        // setMedia(galleryData.media);

        // Set formData based on gallery media type
        setFormData({
          industry: companyData.industry || "",
          company_name: companyData.company_name || "",
          company_description: companyData.company_description || "",
          company_url: companyData.company_url || "",
          logo: {
            filename: companyData.logo?.[0]?.filename || "",
            filepath: companyData.logo?.[0]?.filepath || "",
          },
        });
        setSelectedIndustry(companyData.industry || "");
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    fetchCompany();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      if (files && files.length > 0) {
        setFormData({
          ...formData,
          logo: {
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
    setCompany(selectedIndustry);
  }, [selectedIndustry]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("industry", formData.industry);

      formDataToSend.append("company_name", formData.company_name);
      formDataToSend.append(
        "company_description",
        formData.company_description
      );
      formDataToSend.append("company_url", formData.company_url);

      if (formData.logo.file) {
        formDataToSend.append("logo", formData.logo.file);
      }

      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `company-portfolio/${id}`,
        data: formDataToSend, // Pass form data directly
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // setGallery(response.data.updatedGallery);
      console.log("Company portfolio updated:", response.data.updatedCompany);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/company");
    } catch (error) {
      console.error("Error updating company portfolio:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit Company</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Company Logo</label>
                <input
                  type="file"
                  name="logo"
                  accept=".webp"
                  onChange={handleChange}
                />
                <img
                  className="form-profile"
                  src={
                    formData.logo.file
                      ? formData.logo.filepath // local preview URL
                      : `${process.env.REACT_APP_API_URL}/${formData.logo.filepath}` // server path
                  }
                  alt={formData.logo.filename}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Industry</label>
                <select
                  value={selectedIndustry}
                  required
                  name="industry"
                  onChange={(e) => {
                    const value = e.target.value;
                    setSelectedIndustry(value);
                    setFormData((prev) => ({
                      ...prev,
                      industry: value,
                    }));
                  }}
                >
                  <option value="">Select a Industry</option>
                  {industry.map((industry) => (
                    <option key={industry._id} value={industry._id}>
                      {industry.industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Company Name</label>

                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Website Link</label>

                <input
                  type="text"
                  name="company_url"
                  required
                  value={formData.company_url}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Description</label>

                <textarea
                  rows="3"
                  name="company_description"
                  value={formData.company_description}
                  required
                  onChange={handleChange}
                ></textarea>
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

export default EditFundCompanyPortfolio;
