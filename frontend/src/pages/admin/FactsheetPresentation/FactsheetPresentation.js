import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FactsheetPresentation = () => {
  const [factsheetPresentation, setFactsheetPresentation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFactsheetPresentation = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "factsheet-presentation",
        });
        console.log(response.data.factsheetPresentation);
        setFactsheetPresentation(response.data.factsheetPresentation);
      } catch (error) {
        console.error("Error fetching factsheet / presentation:", error);
      }
    };

    fetchFactsheetPresentation();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `factsheet-presentation/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setFactsheetPresentation(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setFactsheetPresentation(
        factsheetPresentation.filter(
          (factsheetPresentation) => factsheetPresentation._id !== id
        )
      );
      setTimeout(() => {
        navigate("/admin/factsheet-presentation");
      }, 3000);
    } catch (error) {
      console.error("Error deleting Factsheet Presentation:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          Factsheet / Presentation
          {factsheetPresentation.length < 4 && (
            <NavLink
              to="/admin/add/factsheet-presentation"
              className="theme-cta"
            >
              <i className="las la-plus-circle"></i>
              Add Factsheet / Presentation
            </NavLink>
          )}
        </h2>
      </div>
      <div className="row mobilerows">
        <div className="col-md-12">
          <div className="infos-table">
            <div className="table-responsive">
              <table id="example" className="table nowrap">
                <thead>
                  <tr>
                    <th>Fund Name</th>
                    <th className="text-center">Factsheet / Presentation</th>
                    <th className="text-center">File</th>
                    <th className="text-center">Edit</th>
                    {/* <th className="text-center">Delete</th> */}
                  </tr>
                </thead>
                <tbody>
                  {factsheetPresentation &&
                    factsheetPresentation.map((factsheetPresentation) => (
                      <tr key={factsheetPresentation._id}>
                        <td>{factsheetPresentation.fund_name}</td>
                        <td className="text-center">
                          {factsheetPresentation.option}
                        </td>
                        <td className="table-profile-img text-center">
                          <a
                            href={factsheetPresentation.file_upload[0].filepath}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {factsheetPresentation.file_upload[0].filename}
                          </a>
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/admin/edit/factsheet-presentation/${factsheetPresentation._id}`}
                            title="Edit"
                          >
                            <i className="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        {/* <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(factsheetPresentation._id)
                            }
                          >
                            <i className="las la-trash"></i>{" "}
                          </button>
                        </td> */}
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

export default FactsheetPresentation;
