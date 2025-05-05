import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddNews = () => {
  const [selectedNewsCategory, setSelectedNewsCategory] = useState("");
  const [newsCategory, setNewsCategory] = useState([]);
  const [thumbnail, setThumbnail] = useState({ file: null });
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [newsURL, setNewsURL] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const fetchNewsCategory = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios({
        method: "GET",
        baseURL: `${apiUrl}/api/`,
        url: `news-category`,
      });

      setNewsCategory(response.data.newsCategory);
    } catch (error) {
      console.error("Error fetching news category:", error);
    }
  };

  useEffect(() => {
    fetchNewsCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("date", date);
      formData.append("news_url", newsURL);
      formData.append("news_category_id", selectedNewsCategory);

      if (thumbnail?.file) {
        formData.append("thumbnail", thumbnail.file);
      }

      const access_token = localStorage.getItem("access_token");

      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(`${apiUrl}/api/news`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log(response.data.newNews);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/news");
    } catch (error) {
      console.error("Error creating news:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Add News</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Thumbnail</label>
                <input
                  type="file"
                  name="thumbnail"
                  accept=".webp"
                  onChange={(e) =>
                    setThumbnail({
                      ...thumbnail,
                      file: e.target.files[0],
                    })
                  }
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Date</label>

                <input
                  type="text"
                  name="date"
                  required
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>News Category</label>

                <select
                  value={selectedNewsCategory}
                  required
                  name="news_category_id"
                  onChange={(e) => setSelectedNewsCategory(e.target.value)}
                >
                  <option value="">Select a News Category</option>
                  {newsCategory.map((news_category) => (
                    <option key={news_category._id} value={news_category._id}>
                      {news_category.news_category}
                    </option>
                  ))}
                </select>
                {/* <select
                  value={seletedNewsCategory}
                  required
                  name="news_category_id"
                  onChange={(e) => {
                    setSelectedNewsCategory(e.target.value);
                  }}
                >
                  <option value="">Select a Industry</option>
                  <option value="Advance Electronic">Advance Electronic</option>
                  <option value="AI & SAAS">AI & SAAS</option>
                  <option value="Consumer Tech">Consumer Tech</option>
                  <option value="Cyber Security & Chip Design">
                    Cyber Security & Chip Design
                  </option>
                  <option value="Electric Vehicle">Electric Vehicle</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Spacetech">Spacetech</option>
                  <option value="Supply Chain Tech">Supply Chain Tech</option>
                </select> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>URL</label>

                <input
                  type="text"
                  name="news_url"
                  required
                  value={newsURL}
                  onChange={(e) => setNewsURL(e.target.value)}
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

export default AddNews;
