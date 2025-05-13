import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const FactSheetForm = () => {
  const [factsheetForm, setFactsheetForm] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFactsheetForm = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "factsheet-form",
        });

        const factsheetFormData = response.data.factsheetform;

        const sortedFactsheetForm = [...factsheetFormData].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        console.log(response.data.factsheetform);
        setFactsheetForm(sortedFactsheetForm);
      } catch (error) {
        console.error("Error fetching factsheet form:", error);
      }
    };

    fetchFactsheetForm();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `factsheet-form/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setFactsheetForm(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setFactsheetForm(
        factsheetForm.filter((factsheetForm) => factsheetForm._id !== id)
      );
      setTimeout(() => {
        navigate("/admin/factsheet-form");
      }, 3000);
    } catch (error) {
      console.error("Error deleting factsheet form:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>Factsheet Form</h2>
      </div>
      <div className="row mobilerows">
        <div className="col-md-12">
          <div className="infos-table">
            <div className="table-responsive">
              <table id="example" className="table nowrap">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Fund Name</th>
                    <th className="text-center">Date & Time</th>

                    {/* <th className="text-center">Delete</th> */}
                  </tr>
                </thead>
                <tbody>
                  {factsheetForm &&
                    factsheetForm.map((factsheetForm) => (
                      <tr key={factsheetForm._id}>
                        <td>{factsheetForm.name}</td>
                        <td className="text-center">{factsheetForm.email}</td>

                        <td className="text-center">
                          {factsheetForm.fund_name}
                        </td>
                        <td className="text-center">
                          {new Date(factsheetForm.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              timeZone: "Asia/Kolkata", // Specify the time zone as IST
                            }
                          )}{" "}
                          at{" "}
                          {new Date(factsheetForm.createdAt).toLocaleTimeString(
                            "en-IN",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "Asia/Kolkata", // Specify the time zone as IST
                            }
                          )}
                        </td>
                        {/* <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(factsheetForm._id)}
                          >
                            <i class="las la-trash"></i>{" "}
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

export default FactSheetForm;
