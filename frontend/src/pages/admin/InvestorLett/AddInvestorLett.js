import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddInvestorLett = () => {
  const [title, setTitle] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [fileUpload, setFileUpload] = useState("");

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedMonthYear = (() => {
      if (!monthYear) return "";
      const [year, month, day] = monthYear.split("-");
      return `${month}-${day}-${year}`;
    })();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("month_year", formattedMonthYear);

      if (fileUpload?.file) {
        formData.append("file_upload", fileUpload.file);
      }

      const access_token = localStorage.getItem("access_token");

      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(
        `${apiUrl}/api/investor-letter`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      console.log(response.data.newInvestorLetter);
      // setTimeout(() => {
      //   navigate("/admin/gallery");
      // }, 2000);

      navigate("/admin/investor-letter");
    } catch (error) {
      console.error("Error creating investor letter:", error);
      setErrorMessage(
        `${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="theme-form-header">
        <h2>Add Investor Letter</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div> */}

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Month/Year</label>

                <input
                  type="date"
                  name="month_year"
                  required
                  max={new Date().toISOString().split("T")[0]} // This restricts future dates
                  value={monthYear}
                  onChange={(e) => setMonthYear(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Document</label>
                <input
                  type="file"
                  name="file_upload"
                  accept=".pdf"
                  onChange={(e) =>
                    setFileUpload({
                      ...fileUpload,
                      file: e.target.files[0],
                    })
                  }
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
    </AdminLayout>
  );
};

export default AddInvestorLett;
