import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const PresentationForm = () => {
  const [presentationForm, setPresentationForm] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPresentationForm = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "presentation-form",
        });
        console.log(response.data.presentationform);
        setPresentationForm(response.data.presentationform);
      } catch (error) {
        console.error("Error fetching presentation form:", error);
      }
    };

    fetchPresentationForm();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `presentation-form/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setPresentationForm(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setPresentationForm(
        presentationForm.filter(
          (presentationForm) => presentationForm._id !== id
        )
      );
      setTimeout(() => {
        navigate("/admin/presentation-form");
      }, 3000);
    } catch (error) {
      console.error("Error deleting presentation form:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>Presentation Form</h2>
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

                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {presentationForm &&
                    presentationForm.map((presentationForm) => (
                      <tr key={presentationForm._id}>
                        <td>{presentationForm.name}</td>
                        <td className="text-center">
                          {presentationForm.email}
                        </td>

                        <td className="text-center">
                          {presentationForm.fund_name}
                        </td>
                        <td className="text-center">
                          {presentationForm.createdAt}
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(presentationForm._id)}
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

export default PresentationForm;
