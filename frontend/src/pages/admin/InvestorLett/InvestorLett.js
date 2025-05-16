import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import InvestorLetter from "../../user/InvestorLetter";

const InvestorLett = () => {
  const [investorLetter, setInvestorLetter] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvestorLetter = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "investor-letter",
        });
        console.log(response.data.investorLetter);
        // Sorting by year in descending order
        const sortedLetters = response.data.investorLetter.sort(
          (a, b) => new Date(b.month_year) - new Date(a.month_year)
        );
        setInvestorLetter(sortedLetters);

        // setInvestorLetter(sortedLetters);
      } catch (error) {
        console.error("Error fetching investor letter:", error);
      }
    };

    fetchInvestorLetter();
  }, []);

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}" investor letter ?`
    );
    if (!confirmDelete) return; // Exit if user cancels
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `investor-letter/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setInvestorLetter(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setInvestorLetter(
        investorLetter.filter((investorLetter) => investorLetter._id !== id)
      );
      setTimeout(() => {
        navigate("/admin/investor-letter");
      }, 3000);
    } catch (error) {
      console.error("Error deleting investor letter:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          Investor Letter
          <NavLink to="/admin/add/investor-letter" className="theme-cta">
            <i class="las la-plus-circle"></i>
            Add Investor Letter
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
                    <th>Month/Year</th>
                    <th className="text-center">Document</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {investorLetter &&
                    investorLetter.map((investorLetter) => (
                      <tr key={investorLetter._id}>
                        {/* <td>{investorLetter.title}</td> */}
                        <td>
                          {" "}
                          {new Date(
                            investorLetter.month_year
                          ).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </td>
                        <td className="table-profile-img text-center">
                          <a
                            href={`${process.env.REACT_APP_API_URL}/${investorLetter.file_upload[0].filepath}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {investorLetter.file_upload[0].filename}
                          </a>
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/admin/edit/investor-letter/${investorLetter._id}`}
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
                                investorLetter._id,
                                investorLetter.file_upload[0].filename
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

export default InvestorLett;
