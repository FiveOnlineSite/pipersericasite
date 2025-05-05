import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddNewsCategory = () => {
  const [newsCategory, setNewsCategory] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("news_category", newsCategory);

      const access_token = localStorage.getItem("access_token");

      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(
        `${apiUrl}/api/news-category`,
        { news_category: newsCategory },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      console.log(response.data.newNewsCategory);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/news-category");
    } catch (error) {
      console.error("Error creating news categoryllery:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Add News Category</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>News Category</label>
                <input
                  type="text"
                  name="news_category"
                  required
                  value={newsCategory}
                  onChange={(e) => setNewsCategory(e.target.value)}
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

export default AddNewsCategory;
