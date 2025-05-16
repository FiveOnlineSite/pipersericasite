import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Industry = () => {
  const [industry, setIndustry] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchIndustry = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "industry",
        });
        // console.log(response.data.industries);
        // setIndustry(response.data.industries);
        const sortedIndustry = response.data.industries.sort((a, b) =>
          a.industry.localeCompare(b.industry)
        );
        setIndustry(sortedIndustry);
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };

    fetchIndustry();
  }, []);

  const handleDelete = async (id, industry) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${industry}" category ?`
    );
    if (!confirmDelete) return; // Exit if user cancels
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `industry/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setIndustry(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setIndustry(industry.filter((industries) => industries._id !== id));
      setTimeout(() => {
        navigate("/admin/industry");
      }, 3000);
    } catch (error) {
      console.error("Error deleting industry:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          Company Industry
          <NavLink to="/admin/add/industry" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Add Company Industry
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
                    <th>Company Industry</th>

                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {industry &&
                    industry.map((industry) => (
                      <tr key={industry._id}>
                        <td>{industry?.industry}</td>

                        <td className="text-center">
                          <Link
                            to={`/admin/edit/industry/${industry._id}`}
                            title="Edit"
                          >
                            <i class="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(industry._id, industry.industry)
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

export default Industry;
