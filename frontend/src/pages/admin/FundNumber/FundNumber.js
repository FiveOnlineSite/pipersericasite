import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const FundNumber = () => {
  const [fundNumber, setFundNumber] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFundNumber = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "fund-number",
        });
        console.log("fund no", response.data.fundNumbers);

        setFundNumber(response.data.fundNumbers);
      } catch (error) {
        console.error("Error fetching fund numbers:", error);
      }
    };

    fetchFundNumber();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `fund-number/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setFundNumber(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);

      setFundNumber(fundNumber.filter((fundNumber) => fundNumber._id !== id));
      console.log(response.data);
      setTimeout(() => {
        navigate("/admin/fund-number");
      }, 3000);
    } catch (error) {
      console.error("Error deleting fund number:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>
          Fund Number
          {fundNumber.length < 7 && (
            <NavLink to="/admin/add/fund-number" className="theme-cta">
              <i className="las la-plus-circle"></i>
              Add Fund Number
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
                    <th>Fund / Investor Name</th>
                    <th className="text-center">Fund Numbers</th>
                    <th className="text-center">Fund Number Titles</th>
                    <th className="text-center">Fund Subtitle</th>
                    <th className="text-center">Fund Figures</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {fundNumber &&
                    fundNumber.map((fundNumber) => (
                      <tr key={fundNumber._id}>
                        <td>{fundNumber.fund_name}</td>
                        <td className="text-center">
                          {fundNumber.fund_number1}
                          {fundNumber.fund_number2 &&
                            `, ${fundNumber.fund_number2}`}
                          {fundNumber.fund_number3 &&
                            `, ${fundNumber.fund_number3}`}
                        </td>
                        <td className="text-center">
                          {fundNumber.fund_title1}
                          {fundNumber.fund_title2 &&
                            `, ${fundNumber.fund_title2}`}
                          {fundNumber.fund_title3 &&
                            `, ${fundNumber.fund_title3}`}
                        </td>
                        <td className="text-center">
                          {fundNumber.fund_subtitle1 ||
                          fundNumber.fund_subtitle2 ||
                          fundNumber.fund_subtitle3 ? (
                            <>
                              {fundNumber.fund_subtitle1 &&
                                `${fundNumber.fund_subtitle1} `}
                              {fundNumber.fund_subtitle2 &&
                                `${fundNumber.fund_subtitle2} `}
                              {fundNumber.fund_subtitle3 &&
                                ` ${fundNumber.fund_subtitle3}`}{" "}
                            </>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="text-center">
                          {fundNumber.fund_figures
                            ? `${fundNumber.fund_figures} `
                            : "-"}
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/admin/edit/fund-number/${fundNumber._id}`}
                            title="Edit"
                          >
                            <i className="las la-pencil-alt"></i>
                          </Link>
                        </td>
                        <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(fundNumber._id)}
                          >
                            <i className="las la-trash"></i>{" "}
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

export default FundNumber;
