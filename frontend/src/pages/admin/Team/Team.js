import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Team = () => {
  const [team, setTeam] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "team",
        });
        console.log(response.data.teams);
        setTeam(response.data.teams);
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };

    fetchTeam();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `team/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setTeam(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setTeam(team.filter((team) => team._id !== id));
      setTimeout(() => {
        navigate("/admin/team");
      }, 3000);
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          Team
          <NavLink to="/admin/add/team" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Add Team Member
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
                    <th>Name</th>
                    <th className="text-center">Designation</th>
                    <th className="text-center">Department</th>
                    <th className="text-center">LinkedIn Profile URL</th>
                    <th className="text-center">Order</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {team &&
                    team.map((team) => (
                      <tr key={team._id}>
                        <td>{team.name}</td>
                        <td className="text-center">{team.designation}</td>
                        <td className="text-center">
                          {team.department ? `${team.department}` : "-"}
                        </td>
                        <td className="text-center">{team.linkedin_url}</td>
                        <td className="text-center">{team.order}</td>

                        <td className="text-center">
                          <Link
                            to={`/admin/edit/team/${team._id}`}
                            title="Edit"
                          >
                            <i class="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(team._id)}
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

export default Team;
