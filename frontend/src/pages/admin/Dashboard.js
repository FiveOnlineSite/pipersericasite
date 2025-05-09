import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../../components/AdminLayout";

const DashBoard = () => {
  const [factsheetPresentationCount, setFactsheetPresentationCount] =
    useState("0");
  const [fundNumberCount, setFundNumberCount] = useState("0");
  const [companyCount, setCompanyCount] = useState("0");
  const [newsCategoryCount, setNewsCategoryCount] = useState("0");
  const [newsCount, setNewsCount] = useState("0");
  const [investorLetterCount, setInvestorLetterCount] = useState("0");
  const [teamCount, setTeamCount] = useState("0");
  const [factsheetFormCount, setFactsheetFormCount] = useState("0");
  const [presentationFormCount, setPresentationFormCount] = useState("0");
  const [contactCount, setContactCount] = useState("0");
  const [metaTagCount, setMetaTagCount] = useState("0");

  useEffect(() => {
    // Fetch service count

    const apiUrl = process.env.REACT_APP_API_URL;

    axios
      .get(`${apiUrl}/api/fund-number`)
      .then((response) => {
        const count = response.data.count;
        console.log("Fund no count", response.data.count);
        setFundNumberCount(count); // Update fundNumberCount state with count
      })
      .catch((error) =>
        console.error("Error fetching fund number count:", error)
      );

    axios
      .get(`${apiUrl}/api/factsheet-presentation`)
      .then((response) => {
        const count = response.data.count;
        setFactsheetPresentationCount(count); // Update fundNumberCount state with count
      })
      .catch((error) =>
        console.error("Error fetching factsheet presentation count:", error)
      );

    axios
      .get(`${apiUrl}/api/company-portfolio`)
      .then((response) => {
        const count = response.data.count;

        setCompanyCount(count); // Update fundNumberCount state with count
      })
      .catch((error) =>
        console.error("Error fetching company portfolio count:", error)
      );

    axios
      .get(`${apiUrl}/api/news-category`)
      .then((response) => {
        const count = response.data.count;

        setNewsCategoryCount(count); // Update fundNumberCount state with count
      })
      .catch((error) =>
        console.error("Error fetching news category  count:", error)
      );

    axios
      .get(`${apiUrl}/api/news`)
      .then((response) => {
        const count = response.data.count;

        setNewsCount(count); // Update fundNumberCount state with count
      })
      .catch((error) => console.error("Error fetching news count:", error));

    axios
      .get(`${apiUrl}/api/investor-letter`)
      .then((response) => {
        const count = response.data.count;

        setInvestorLetterCount(count); // Update fundNumberCount state with count
      })
      .catch((error) =>
        console.error("Error fetching investor letter count:", error)
      );

    axios
      .get(`${apiUrl}/api/team`)
      .then((response) => {
        const count = response.data.count;

        setTeamCount(count); // Update fundNumberCount state with count
      })
      .catch((error) => console.error("Error fetching team count:", error));

    axios
      .get(`${apiUrl}/api/meat-tag`)
      .then((response) => {
        const count = response.data.count;

        setMetaTagCount(count); // Update fundNumberCount state with count
      })
      .catch((error) => console.error("Error fetching meta tag:", error));

    axios
      .get(`${apiUrl}/api/presentation-form`)
      .then((response) => {
        const count = response.data.count;

        setPresentationFormCount(count); // Update fundNumberCount state with count
      })
      .catch((error) =>
        console.error("Error fetching presentation form count:", error)
      );

    axios
      .get(`${apiUrl}/api/factsheet-form`)
      .then((response) => {
        const count = response.data.count;

        setFactsheetFormCount(count); // Update fundNumberCount state with count
      })
      .catch((error) =>
        console.error("Error fetching factsheet form count:", error)
      );

    axios
      .get(`${apiUrl}/api/contact`)
      .then((response) => {
        const count = response.data.count;

        setContactCount(count); // Update fundNumberCount state with count
      })
      .catch((error) => console.error("Error fetching contact count:", error));
  }, []);

  return (
    <AdminLayout>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <NavLink
              to="/admin/factsheet-presentation"
              title="View Factsheet / Presentation"
            >
              <div className="dashboardcard">
                <h2>
                  {factsheetPresentationCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Factsheet / Presentation</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink to="/admin/fund-number" title="View Fund Numbers">
              <div className="dashboardcard">
                <h2>
                  {fundNumberCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Fund Numbers</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink
              to="/admin/company-portfolio"
              title="View Company Portfolio"
            >
              <div className="dashboardcard">
                <h2>
                  {companyCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Company Portfolio</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink to="/admin/news-category" title="View News Category">
              <div className="dashboardcard">
                <h2>
                  {newsCategoryCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total News Category</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink to="/admin/news" title="View News & More">
              <div className="dashboardcard">
                <h2>
                  {newsCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total News & More</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink to="/admin/investor-letter" title="View Investor Letter">
              <div className="dashboardcard">
                <h2>
                  {investorLetterCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Investor Letter</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink to="/admin/team" title="View Team Members">
              <div className="dashboardcard">
                <h2>
                  {teamCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Team Members</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink to="/admin/meta-tag" title="View Meta Tags">
              <div className="dashboardcard">
                <h2>
                  {metaTagCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Meta Tags</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink to="/admin/contact-us" title="View Contacts">
              <div className="dashboardcard">
                <h2>
                  {contactCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Contacts</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink to="/admin/factsheet-form" title="View Factsheet Forms">
              <div className="dashboardcard">
                <h2>
                  {factsheetFormCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Factsheet Forms</h6>
              </div>
            </NavLink>
          </div>

          <div className="col-md-3">
            <NavLink
              to="/admin/presentation-form"
              title="View Presentation Forms"
            >
              <div className="dashboardcard">
                <h2>
                  {presentationFormCount}
                  <span>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </span>
                </h2>
                <h6>Total Presentation Forms</h6>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* </div> */}
    </AdminLayout>
  );
};

export default DashBoard;
