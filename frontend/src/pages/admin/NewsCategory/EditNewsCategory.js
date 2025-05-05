import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNewsCategory = () => {
  const { id } = useParams();
  const [newsCategory, setNewsCategory] = useState("");
  // const [media, setMedia] = useState({ iframe: "", file: null });
  // const [isPublic, setIsPublic] = useState(true);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    news_category: "",
  });

  useEffect(() => {
    const fetchNewsCategory = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `news-category/${id}`,
        });
        const newsCategoryData = response.data.newsCategory;
        setNewsCategory(newsCategoryData);
        // Set media state from galleryData
        // setMedia(galleryData.media);

        // Set formData based on gallery media type
        setFormData({
          news_category: newsCategoryData.news_category,
        });
      } catch (error) {
        console.error("Error fetching news category data:", error);
      }
    };

    fetchNewsCategory();
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

      formDataToSend.append("news_category", formData.news_category);

      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `news-category/${id}`,
        data: formDataToSend, // Pass form data directly
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // setGallery(response.data.updatedGallery);
      console.log("News Category updated:", response.data.updatedNewsCategory);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/news-category");
    } catch (error) {
      console.error("Error updating News Category:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit News Category</h2>
      </div>
      <div className="form-white-bg">
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
                    value={formData.news_category}
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

export default EditNewsCategory;
