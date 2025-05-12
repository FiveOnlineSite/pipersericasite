import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const NewsCategory = () => {
  const [newsCategory, setNewsCategory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsCategory = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "news-category",
        });
        console.log(response.data.newsCategory);
        setNewsCategory(response.data.newsCategory);
      } catch (error) {
        console.error("Error fetching news category:", error);
      }
    };

    fetchNewsCategory();
  }, []);

  const handleDelete = async (id, category) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${category}" category ?`
    );
    if (!confirmDelete) return; // Exit if user cancels
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `news-category/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setNewsCategory(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setNewsCategory(
        newsCategory.filter((newsCategory) => newsCategory._id !== id)
      );
      setTimeout(() => {
        navigate("/admin/news-category");
      }, 3000);
    } catch (error) {
      console.error("Error deleting news category:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          News Category
          <NavLink to="/admin/add/news-category" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Add News Category
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
                    <th>News Category</th>

                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {newsCategory &&
                    newsCategory.map((newsCategory) => (
                      <tr key={newsCategory._id}>
                        <td>{newsCategory.news_category}</td>

                        <td className="text-center">
                          <Link
                            to={`/admin/edit/news-category/${newsCategory._id}`}
                            title="Edit"
                          >
                            <i class="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(
                                newsCategory._id,
                                newsCategory.news_category
                              )
                            }
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

export default NewsCategory;
