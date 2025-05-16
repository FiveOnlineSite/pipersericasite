import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditIndustry = () => {
  const { id } = useParams();
  const [industry, setIndustry] = useState("");
  // const [media, setMedia] = useState({ iframe: "", file: null });
  // const [isPublic, setIsPublic] = useState(true);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    industry: "",
  });

  useEffect(() => {
    const fetchIndustry = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `industry-category/${id}`,
        });
        const industryData = response.data.industry;
        setIndustry(industryData);
        // Set media state from galleryData
        // setMedia(galleryData.media);

        // Set formData based on gallery media type
        setFormData({
          industry: industryData.industry,
        });
      } catch (error) {
        console.error("Error fetching industry data:", error);
      }
    };

    fetchIndustry();
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
      const formDataToSend = new FormData();

      formDataToSend.append("industry", formData.industry);

      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `industry/${id}`,
        data: formDataToSend, // Pass form data directly
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // setGallery(response.data.updatedGallery);
      console.log("Industry updated:", response.data.updatedIndustry);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/industry");
    } catch (error) {
      console.error("Error updating industry:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit Company Industry</h2>
      </div>
      <div className="form-white-bg">
        <div className="form-white-bg">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Company Industry</label>
                  <input
                    type="text"
                    name="industry"
                    required
                    value={formData.industry}
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
      </div>
    </AdminLayout>
  );
};

export default EditIndustry;
