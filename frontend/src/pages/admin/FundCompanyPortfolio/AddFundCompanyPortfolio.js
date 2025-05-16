import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFundCompanyPortfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [industry, setIndustry] = useState([]);
  const [logo, setLogo] = useState({ file: null });
  const [companyName, setCompanyName] = useState([]);
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Set isPublic to false if the checkbox is unchecked

      const formData = new FormData();
      formData.append("industry", selectedIndustry);
      formData.append("company_name", companyName);
      formData.append("company_description", companyDescription);
      formData.append("company_url", companyURL);
      if (logo?.file) {
        formData.append("logo", logo.file);
      }

      const access_token = localStorage.getItem("access_token");

      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(
        `${apiUrl}/api/company-portfolio`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      console.log(response.data.newCompany);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/company");
    } catch (error) {
      console.error("Error creating company:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Add Company</h2>
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
                  accept=".png,.jpg,.webp"
                  onChange={(e) =>
                    setLogo({
                      ...logo,
                      file: e.target.files[0],
                    })
                  }
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
                  onChange={(e) => setSelectedIndustry(e.target.value)}
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
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Website Link</label>

                <input
                  type="text"
                  required
                  name="company_url"
                  value={companyURL}
                  onChange={(e) => setCompanyURL(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Description</label>

                <textarea
                  rows="3"
                  required
                  name="company_description"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
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

export default AddFundCompanyPortfolio;
