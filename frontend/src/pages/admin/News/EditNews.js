import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNews = () => {
  const { id } = useParams();
  const [newsCategory, setNewsCategory] = useState([]);
  const [selectedNewsCategory, setSelectedNewsCategory] = useState("");
  const [news, setNews] = useState("");

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    news_category_id: "",
    news_url: "",
    thumbnail: {
      filename: "",
      filepath: "",
    },
  });

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

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `news/${id}`,
        });
        const newsData = response.data.news;
        setNews(newsData);
        console.log(newsData);

        // setSelectedIndustry(companyData.industry || "");

        // Set media state from galleryData
        // setMedia(galleryData.media);

        // Set formData based on gallery media type
        setFormData({
          title: newsData.title || "",
          news_category_id: newsData.news_category_id || "",
          date: newsData.date || "",
          news_url: newsData.news_url || "",
          thumbnail: {
            filename: newsData.thumbnail?.[0]?.filename || "",
            filepath: newsData.thumbnail?.[0]?.filepath || "",
          },
        });
        setSelectedNewsCategory(newsData.news_category_id || "");
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail") {
      if (files && files.length > 0) {
        setFormData({
          ...formData,
          thumbnail: {
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
    setNews(selectedNewsCategory);
  }, [selectedNewsCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("news_category_id", formData.news_category_id);

      formDataToSend.append("title", formData.title);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("news_url", formData.news_url);

      if (formData.thumbnail.file) {
        formDataToSend.append("thumbnail", formData.thumbnail.file);
      }

      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `news/${id}`,
        data: formDataToSend, // Pass form data directly
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // setGallery(response.data.updatedGallery);
      console.log("News updated:", response.data.updatedNews);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/news");
    } catch (error) {
      console.error("Error updating news:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit News</h2>
      </div>
      <div className="form-white-bg">
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
                    onChange={handleChange}
                  />
                  <img
                    className="form-profile"
                    src={
                      formData.thumbnail.file
                        ? formData.thumbnail.filepath // local preview URL
                        : `${process.env.REACT_APP_API_URL}/${formData.thumbnail.filepath}` // server path
                    }
                    alt={formData.thumbnail.filename}
                    loading="lazy"
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
                    value={formData.title}
                    onChange={handleChange}
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
                    value={formData.date}
                    onChange={handleChange}
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
                    onChange={(e) =>
                      setSelectedNewsCategory(
                        setFormData((prev) => ({
                          ...prev,
                          news_category_id: e.target.value,
                        }))
                      )
                    }
                  >
                    <option value="">Select a News Category</option>
                    {newsCategory.map((news_category) => (
                      <option key={news_category._id} value={news_category._id}>
                        {news_category.news_category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>URL</label>

                  <input
                    type="text"
                    name="news_url"
                    required
                    value={formData.news_url}
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

export default EditNews;
