import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const FundCompanyPortfolio = () => {
  const [companies, setCompanies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "company-portfolio",
        });
        console.log(response.data.company);
        setCompanies(response.data.company);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    fetchCompanies();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `company-portfolio/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setCompanies(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setCompanies(companies.filter((companies) => companies._id !== id));
      setTimeout(() => {
        navigate("/admin/company");
      }, 3000);
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          Company Portfolio
          <NavLink to="/admin/add/company" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Add Company
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
                    <th>Company Logo</th>
                    <th className="text-center">Industry</th>
                    <th className="text-center">Company Name</th>
                    <th className="text-center">Description</th>
                    <th className="text-center">Website Link</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {companies &&
                    companies.map((companies) => (
                      <tr key={companies._id}>
                        <td className="table-profile-img">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/${companies.logo[0].filepath}`} // Assuming filepath contains the path to the image
                            alt={`${companies.logo[0].filename}`}
                            style={{ width: "50px", height: "50px" }}
                            loading="lazy"
                          />
                        </td>
                        <td>{companies.industry}</td>
                        <td className="text-center">
                          {companies.company_name}
                        </td>
                        <td className="text-center">
                          {companies.company_description}
                        </td>
                        <td className="text-center">{companies.company_url}</td>

                        <td className="text-center">
                          <Link
                            to={`/admin/edit/company/${companies._id}`}
                            title="Edit"
                          >
                            <i class="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(companies._id)}
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

export default FundCompanyPortfolio;
