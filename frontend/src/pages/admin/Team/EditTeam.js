import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditTeam = () => {
  const { id } = useParams();
  const [team, setTeam] = useState("");
  const [totalTeams, setTotalTeam] = useState(0);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    linkedin_url: "",
  });

  useEffect(() => {
    const fetchTeam = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      try {
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `team/${id}`,
        });
        const teamData = response.data.team;
        setTeam(teamData);
        // Set media state from galleryData
        // setMedia(galleryData.media);

        // Set formData based on gallery media type
        setFormData({
          name: teamData.name,
          department: teamData.department,
          designation: teamData.designation,
          linkedin_url: teamData.linkedin_url,
          order: teamData.order,
        });

        const totalDetailsResponse = await axios.get(`${apiUrl}/api/team`);
        const totalCount = totalDetailsResponse.data.count;
        setTotalTeam(totalCount);
        console.log("Count", totalCount);
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };

    fetchTeam();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.order > totalTeams) {
      setErrorMessage(
        `Total entries are ${totalTeams}. Order number cannot be greater than ${totalTeams}`
      );
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("designation", formData.designation);
      formDataToSend.append("department", formData.department);
      formDataToSend.append("linkedin_url", formData.linkedin_url);
      formDataToSend.append("order", formData.order);

      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "PATCH",
        baseURL: `${apiUrl}/api/`,
        url: `/team/${id}`,
        data: formDataToSend,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });

      navigate("/admin/team");
      console.log(response.data.team);
    } catch (error) {
      console.error("Error updating team:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Edit Team Member</h2>
      </div>
      <div className="form-white-bg">
        <div className="form-white-bg">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Designation</label>
                  <input
                    type="text"
                    name="designation"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Department</label>
                  <input
                    type="text"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>LinkedIn Profile URL</label>

                  <input
                    type="text"
                    name="linkedin_url"
                    required
                    value={formData.linkedin_url}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="theme-form">
                  <label>Order</label>

                  <input
                    type="text"
                    name="order"
                    required
                    value={formData.order}
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

export default EditTeam;
