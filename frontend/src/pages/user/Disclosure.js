import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link, NavLink } from "react-router-dom";

const Disclosure = () => {
  const [activeTab, setActiveTab] = useState("life");

  // Handle tab click
  const handleTabClick = (tab, event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    setActiveTab(tab);
  };
  const letters = [
    {
      date: "January 2023-24",
      filepath:
        "https://drive.google.com/file/d/16R9qiAgRj_BMRQphkocJI6mk97rsLsZf/view?usp=sharing",
      filter_type: "Annual Return",
      title: "Annual Report 2023-24",
    },

    {
      date: "January 2022-23",
      filepath:
        "https://drive.google.com/file/d/15zpNfoWsuCc1wbBppoom1I_69IZPHKPN/view?usp=sharing",
      filter_type: "Annual Return",
      title: "Annual Report 2022-23",
    },
    {
      date: "January 2021-22",
      filepath:
        "https://drive.google.com/file/d/1dhGqX7vImHu4Y4SeCo-c44Zf5d7Bphio/view?usp=sharing",
      filter_type: "Annual Return",
      title: "Annual Report 2021-22",
    },

    {
      date: "January 2025",
      filepath: "/docs/pms-disclosure-document.pdf",
      filter_type: "PMS Disclosure",
      title: "PMS Disclosure Document",
    },
    // {
    //   date: "January 2023",
    //   filepath: "/docs/2021-1-piper-serica-investor-letter-jan-min.pdf",
    //   filter_type: "PMS Disclosure",
    //    title: "PMS Disclosure Document"
    // },
    // {
    //   date: "January 2023",
    //   filepath: "/docs/2021-1-piper-serica-investor-letter-jan-min.pdf",
    //   filter_type: "FPI Disclosure",
    //    title: "PMS Disclosure Document"
    // },
    {
      date: "January 2025",
      filepath: "/docs/management-fee-tool-piper-serica-final.xlsx",
      filter_type: "PMS Disclosure",
      title: "Management Fee Tool",
    },
    {
      date: "January 2025",
      filepath:
        "https://docs.google.com/spreadsheets/d/1KIUfrHnsPYNmeHY24egrHyK2bavtDonn9Jfz932sMa4/edit?usp=sharing",
      filter_type: "PMS Disclosure",
      title: "Investor Complaint Report",
    },
  ];

  const sortedLetters = letters.sort((a, b) => {
    const dateA = new Date(a.date + " 1"); // Adding day to avoid invalid dates
    const dateB = new Date(b.date + " 1");
    return dateB - dateA;
  });

  const [selectedFilter, setSelectedFilter] = useState("");

  // Filter and sort news items based on selected filters
  const filteredLetters = letters.filter(
    (item) => selectedFilter === "" || item.filter_type === selectedFilter
  );

  const handleClearFilters = () => {
    setSelectedFilter("");
  };

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/Disclosures.jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Performance Review</h6> */}
                <h1 className="banner-title">Disclosures</h1>
                {/* <p className="banner-para">
                  Investor letters are formal communications that provide
                  shareholders with insights into a company's financial
                  performance, strategic direction, and future outlook.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-commitment-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="our-commitment-tabs">
                <Link
                  href="#"
                  onClick={(event) => handleTabClick("life", event)}
                  className={activeTab === "life" ? "active" : ""}
                >
                  <h4>Piper Serica PMS</h4>
                </Link>
                <Link
                  href="#"
                  onClick={(event) => handleTabClick("smes", event)}
                  className={activeTab === "smes" ? "active" : ""}
                >
                  <h4>Piper Serica Angel Fund</h4>
                </Link>
                {/* <Link
                  href="#"
                  onClick={(event) => handleTabClick("early", event)}
                  className={activeTab === "early" ? "active" : ""}
                >
                  <h4>Early Stage and Growth Companies</h4>
                </Link> */}
              </div>

              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "life" ? "show active" : ""
                  }`}
                  id="life"
                >
                  <div className="commitment-content-div">
                    {" "}
                    {/* <h6 className="commitment-title">
                      Supporting innovation through the leasing and management
                      of sustainable spaces.
                    </h6> */}
                    <div className="commitment-content">
                      <p className="para small-para">
                        <p className="para small-para">
                          Name of the PMS: Piper Serica Portfolio Management
                          Service
                        </p>
                        <p className="para small-para">
                          SEBI Registration No.: INP000006749
                        </p>
                        <p className="para small-para">
                          Investment Manager: Piper Serica Advisor Private
                          Limited
                        </p>
                        <p className="para small-para">
                          Address: A Wing, 905/906, Marathon Innova Nextgen,
                          Ganpatrao Kadam Marg, Opp-Peninsula Corporate Park,
                          Lower Parel, Mumbai – 400013
                        </p>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "smes" ? "show active" : ""
                  }`}
                  id="smes"
                >
                  <div className="commitment-content-div">
                    {" "}
                    {/* <h6 className="commitment-title">
                      Bridging Capital through supply chain financing and credit
                      facilities.
                    </h6> */}
                    <div className="commitment-content">
                      <p className="para small-para">
                        Name of The Fund: Piper Serica Angel Fund
                      </p>
                      <p className="para small-para">
                        Category: Category I AIF - Venture Capital Fund - Angel
                        Fund
                      </p>
                      <p className="para small-para">
                        Address: A Wing, 905/906, Marathon Innova Nextgen,
                        Ganpatrao Kadam Marg, Opp-Peninsula Corporate Park,
                        Lower Parel, Mumbai – 400013
                      </p>
                      <p className="para small-para">
                        Registration Number: IN/AIF1/21-22/1028
                      </p>
                      <p className="para small-para">
                        Name of the investment manager: Piper Serica Advisors
                        Private Limited
                      </p>
                      <p className="para small-para">
                        Address of the investment manager: A Wing, 905/906,
                        Marathon Innova Nextgen, Ganpatrao Kadam Marg,
                        Opp-Peninsula Corporate Park, Lower Parel, Mumbai –
                        400013
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div
                  className={`tab-pane fade ${
                    activeTab === "early" ? "show active" : ""
                  }`}
                  id="early"
                >
                  <div className="commitment-content-div">
                    {" "}
                    <h6 className="commitment-title">
                      Empowering growth through venture capital and venture debt
                      investments
                    </h6>
                    <div className="commitment-content">
                      <p className="para small-para">
                        By providing innovative startups and technology
                        companies with the capital and resources they need to
                        grow and expand, our strategies are helping to drive
                        innovation and technological progress across the region
                        with the potential to disrupt traditional industries and
                        create new markets.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-letters-section">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-6 mt-lg-0 mt-0 ">
              <div className="industries-filter-div">
                <select
                  className="form-select"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  {" "}
                  <option selected disabled value="">
                    Select filter
                  </option>
                  <option value="Annual Return">Annual Report</option>
                  <option value="PMS Disclosure">PMS Disclosure</option>
                  {/* <option value="FPI Disclosure">FPI Disclosure</option> */}
                </select>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-lg-end justify-content-md-end justify-content-end">
              <button
                className="para clear-filters-text"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="row">
            {filteredLetters.map((letter) => (
              <div className="col-lg-4 col-md-6 col-12">
                <NavLink to={letter.filepath} target="_blank">
                  <div className="letter-div mb-4">
                    {/* <h5 className="section-subtitle">{letter.date}</h5> */}
                    <h3>
                      {letter.title} {""}
                    </h3>
                    {/* <div className="letter-options py-3 pt-5">
                    
                      <i class="fa-solid fa-eye"></i>
                   
                    <a href={letter.filepath} download>
                      <i className="fa-solid fa-cloud-arrow-down"></i>
                    </a>
                  </div> */}
                  </div>
                </NavLink>
              </div>
            ))}
            <div className="col-12 mt-3">
              <p>
                If you are not satisfied with the resolution provided, you can
                lodge your complaint online at:
              </p>
              <p>
                SCORES :{" "}
                <Link to="https://scores.sebi.gov.in/">
                  https://scores.sebi.gov.in/
                </Link>
              </p>
              <p>
                SMART ODR :{" "}
                <Link to="https://smartodr.in/login">
                  https://smartodr.in/login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclosure;
