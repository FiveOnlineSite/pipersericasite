import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const MetaTag = () => {
  const [metaTag, setMetaTag] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMetaTag = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "meta-tag",
        });
        console.log(response.data);
        setMetaTag(response.data);
      } catch (error) {
        console.error("Error fetching Meta Tag:", error);
      }
    };

    fetchMetaTag();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `meta-tag/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setMetaTag(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setMetaTag(metaTag.filter((metaTag) => metaTag._id !== id));
      setTimeout(() => {
        navigate("/admin/meta-tag");
      }, 3000);
    } catch (error) {
      console.error("Error deleting Meta Tag:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          MetaTag
          <NavLink to="/admin/add/meta-tag" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Add MetaTag Member
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
                    <th>Page</th>
                    <th className="text-center">Meta Title</th>
                    <th className="text-center">Meta Description</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {metaTag &&
                    metaTag.map((metaTag) => (
                      <tr key={metaTag._id}>
                        <td>{metaTag.page}</td>
                        <td className="text-center">{metaTag.metaTitle}</td>

                        <td className="text-center">
                          {metaTag.metaDescription}
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/admin/edit/meta-tag/${metaTag._id}`}
                            title="Edit"
                          >
                            <i class="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(metaTag._id)}
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

export default MetaTag;
