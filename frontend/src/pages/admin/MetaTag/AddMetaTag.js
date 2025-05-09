import React, { useState } from "react";
import Layout from "../../../components/AdminLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMetaTag = () => {
  const [page, setPage] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to store the form data
      const formData = new FormData();
      formData.append("page", page);
      formData.append("metaTitle", metaTitle);
      formData.append("metaDescription", metaDescription);

      const access_token = localStorage.getItem("access_token");

      // Make a POST request to the backend to create a new team

      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios({
        method: "POST",
        baseURL: `${apiUrl}/api/`,
        url: "meta-tag",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // const response = await axios.post("/api/team/createteam", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      console.log(response.data);
      // setTimeout(() => {
      navigate("/admin/meta-tag");
      // }, 2000);
    } catch (error) {
      console.error("Error creating meta tag:", error);
      setErrorMessage(
        ` ${error.response?.data?.message}` || "An error occurred"
      );
    }
  };

  return (
    <Layout>
      <div className="theme-form-header">
        <h2>Add Members</h2>
      </div>
      <div className="form-white-bg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Page</label>
                <input
                  type="text"
                  name="page"
                  value={page}
                  onChange={(e) => setPage(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="theme-form">
                <label>Meta Description</label>
                <input
                  type="text"
                  name="metaDescription"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
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
                {/* <input type="button" value="Save" onClick={handleSubmit}/> */}
                <button type="submit">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddMetaTag;
