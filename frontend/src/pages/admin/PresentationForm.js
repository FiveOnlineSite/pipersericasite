import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const PresentationForm = () => {
  const [presentationForm, setPresentationForm] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        const presentationFormData = response.data.presentationform;

        const sortedPresentationForm = [...presentationFormData].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        console.log(response.data.presentationform);
        setPresentationForm(sortedPresentationForm);
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
  const filteredPresentationForm = presentationForm.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <div className="row">
          <div className="col-lg-6">
            <h2>Presentation Form</h2>
          </div>
          <div className="col-lg-6">
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control"
                type="search"
                placeholder="Search by name"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
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
                  {filteredPresentationForm.length > 0 ? (
                    filteredPresentationForm.map((presentationForm) => (
                      <tr key={presentationForm._id}>
                        <td>{presentationForm.name}</td>
                        <td className="text-center">
                          {presentationForm.email}
                        </td>

                        <td className="text-center">
                          {presentationForm.fund_name}
                        </td>
                        <td className="text-center">
                          {new Date(
                            presentationForm.createdAt
                          ).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            timeZone: "Asia/Kolkata", // Specify the time zone as IST
                          })}{" "}
                          at{" "}
                          {new Date(
                            presentationForm.createdAt
                          ).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: "Asia/Kolkata", // Specify the time zone as IST
                          })}
                        </td>
                        {/* <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(presentationForm._id)}
                          >
                            <i class="las la-trash"></i>{" "}
                          </button>
                        </td> */}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No presentation data found.
                      </td>
                    </tr>
                  )}
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
