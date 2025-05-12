import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "news",
        });
        const sortedNews = response.data.news.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNews(sortedNews);
        console.log(response.data.news);
        // setNews(response.data.news);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id, newsName) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${newsName}" news ?`
    );
    if (!confirmDelete) return; // Exit if user cancels

    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `news/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setNews(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setNews(news.filter((news) => news._id !== id));
      setTimeout(() => {
        navigate("/admin/news");
      }, 3000);
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          News & More
          <NavLink to="/admin/add/news" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Add News
          </NavLink>
        </h2>
      </div>
      <div className="row mobilerows">
        <div className="col-md-12">
          <div className="infos-table">
            <div className="table-responsive">
              <table id="example" className="table nowrap">
                <thead>
                  <tr>
                    <th>Thumbnail</th>
                    <th className="text-center">Title</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">News Category</th>

                    <th className="text-center">URL</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {news &&
                    news.map((news) => (
                      <tr key={news._id}>
                        <td className="table-profile-img">
                          <img
                            src={`${
                              process.env.REACT_APP_API_URL
                            }/${news.thumbnail[0].filepath.replace(
                              /\\/g,
                              "/"
                            )}`} // Assuming filepath contains the path to the image
                            alt={`${news.thumbnail[0].filename}`}
                            style={{ width: "50px", height: "50px" }}
                            loading="lazy"
                          />
                        </td>
                        <td className="text-center">{news.title}</td>
                        <td className="text-center">{news.date}</td>
                        <td className="text-center">
                          {news.news_category_id?.news_category}
                        </td>
                        <td className="text-center">{news.news_url}</td>
                        <td className="text-center">
                          <Link
                            to={`/admin/edit/news/${news._id}`}
                            title="Edit"
                          >
                            <i class="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(news._id, news.title)}
                          >
                            <i class="las la-trash"></i>{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default News;
