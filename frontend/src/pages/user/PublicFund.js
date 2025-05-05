import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
import StickyContact from "../../components/StickyContact";
import FactsheetModal from "../../components/FactsheetModal";
import axios from "axios";

const PublicFund = () => {
  const handleFilterChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const getFilteredImages = () => {
    if (selectedIndustry === "Industry" || selectedIndustry === "") {
      return images; // Show all images if no specific industry is selected
    }
    return images.filter((image) => image.label === selectedIndustry);
  };

  const [selectedIndustry, setSelectedIndustry] = useState("Industry");

  const images = [
    {
      id: 1,
      src: "/images/industries/industry1.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 2,
      src: "/images/industries/industry2.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 3,
      src: "/images/industries/industry3.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 4,
      src: "/images/industries/industry4.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 5,
      src: "/images/industries/industry5.png",
      label: "Creator Economy",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 6,
      src: "/images/industries/industry6.png",
      label: "Creator Economy",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 7,
      src: "/images/industries/industry7.png",
      label: "B2B",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
    {
      id: 8,
      src: "/images/industries/industry8.png",
      label: "Consumer",
      description:
        "The Fund seeks to empower early and growth stage companies in India and Southeast Asia, providing them capital to scale without significantly diluting equity. ",
    },
  ];

  const [fundNumbers, setFundNumbers] = useState([]);

  useEffect(() => {
    const fetchFundNumbers = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        const fundName = "fpi";

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `fund-number/by-name/${fundName}`,
        });
        console.log("Factsheet", response.data.fundNumbers);
        setFundNumbers(response.data.fundNumbers);
      } catch (error) {
        console.error("Error fetching fund numbers form:", error);
      }
    };

    fetchFundNumbers();
  }, []);

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/Nemero Uno (FPI).jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                <h6 className="banner-subtitle">Offshore Fund</h6>
                <h1 className="banner-title">Piper Serica Numero Uno Fund</h1>
                {/* <p className="banner-para">Capital to scale</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-fund-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="about-fund-div">
              <h6 className="section-subtitle mb-4">
                Investment Gateway to India's High-Growth Market
              </h6>
              <p className="para justify-para">
                Piper Serica Numero Uno India Fund offers global investors a
                sophisticated platform to India's vibrant equity landscape
                through an offshore fund structure. The fund maintains alignment
                with our established Portfolio Management Service, delivering a
                carefully calibrated investment approach focused on sustainable
                performance.
              </p>

              <FactsheetModal />
            </div>
          </div>
        </div>
      </section>

      <section className="facts-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row">
                {fundNumbers &&
                  fundNumbers.map((fundNumbers) => (
                    <>
                      <div className="col-lg-4" key={fundNumbers._id}>
                        <div className="facts-div">
                          <h2 className="facts-title">
                            {fundNumbers.fund_number1}
                          </h2>
                          <h6 className="para">
                            {fundNumbers.fund_title1}
                            {/* <i> (as of 30 June 2024)</i> */}
                          </h6>
                        </div>
                      </div>
                      <div className="col-lg-4 mt-lg-0 mt-4">
                        <div className="facts-div">
                          <h2 className="facts-title">
                            {fundNumbers.fund_number2}
                          </h2>
                          <h6 className="para">
                            {fundNumbers.fund_title2}
                            {/* <i> (as of 30 June 2024)</i> */}
                          </h6>

                          <p className="facts-small">
                            {fundNumbers.fund_subtitle2}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 mt-lg-0 mt-4">
                        <div className="facts-div">
                          <h2 className="facts-title">
                            {fundNumbers.fund_number3}
                          </h2>
                          <h6 className="para">
                            {fundNumbers.fund_title3}
                            {/* <i> (as of 30 June 2024)</i> */}
                          </h6>
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="para-txt mt-2 facts-small">
                          {fundNumbers.fund_figures}
                        </p>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investment-philosophy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="investment-philosophy-title-div">
                {/* <h6 className="section-subtitle mb-4">Investment philosophy</h6> */}
                <h3 className="section-title mb-lg-3 mb-4">
                  Investment Framework
                </h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para justify-para">
                  <strong>Multi-Cap Investment Approach: </strong> Our multi-cap
                  strategy targets quality businesses across market
                  capitalizations, balancing established large-caps with
                  high-potential mid and small-caps. We prioritize companies
                  with strong fundamentals, sustainable competitive advantages,
                  and clear growth pathways.
                </p>
              </div>
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para justify-para">
                  <strong>Valuation Discipline: </strong> We employ a rigorous
                  valuation methodology identifying fundamentally sound
                  enterprises at attractive valuations relative to intrinsic
                  worth. Our approach combines DCF analysis with comparative
                  metrics to identify value opportunities while preserving
                  capital.
                </p>
              </div>
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para justify-para">
                  <strong>Proprietary Research Process: </strong> Our investment
                  decisions are supported by comprehensive research including
                  management engagement, financial analysis focused on cash flow
                  and capital efficiency, governance assessment, and competitive
                  positioning evaluation.
                </p>
              </div>
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para justify-para">
                  <strong>Risk Management Framework: </strong> Our disciplined
                  risk controls include 6% maximum per security allocation, 25%
                  sector concentration limits, seven-day liquidity requirements,
                  and continuous risk monitoring through proprietary models.
                </p>
              </div>
              <div className="single-feature">
                <div>
                  <span></span>
                </div>
                <p className="para justify-para">
                  <strong>Dynamic Portfolio Rebalancing: </strong>We implement
                  systematic rebalancing based on valuation parameters and
                  evolving risk profiles, enabling tactical adjustments while
                  maintaining sectoral diversification aligned with India's
                  economic landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                {/* <h6 className="section-subtitle mb-4">features</h6> */}
                <h3 className="section-title mb-lg-3 mb-4">
                  Value Proposition
                </h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="features-content-div">
                {/* <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Multi-Cap Investment Strategy</strong> that
                    identifies high-quality opportunities across different
                    market capitalizations, ensuring superior risk-adjusted
                    returns.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Focus on Fair Valuations </strong>by investing in
                    fundamentally strong businesses trading at attractive
                    prices, leveraging deep research and a long-term
                    perspective.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Robust Research and Due Diligence</strong> involving
                    engagement with key stakeholders, in-depth financial
                    analysis, and assessment of management quality and
                    governance standards.
                  </p>
                </div>
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Strategic Risk Management Framework</strong> that
                    limits exposure with a maximum of 6% allocation per stock,
                    25% per sector, and ensures liquidity to exit holdings
                    within seven trading days.
                  </p>
                </div>
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>
                      Consistent Portfolio Rebalancing and Sectoral
                      Diversification
                    </strong>{" "}
                    to optimize returns while mitigating risks, ensuring
                    long-term wealth creation for investors.
                  </p>
                </div> */}
                <p className="para justify-para">
                  We focus on generating consistent returns by capitalizing on
                  India's structural growth opportunities while maintaining
                  prudent risk parameters. This balanced approach provides
                  investors with the potential for substantial wealth
                  accumulation over long time horizons, effectively navigating
                  market volatility while capturing the momentum of India's
                  economic expansion. Our disciplined execution enables
                  investors to participate in India's compelling growth
                  narrative through a professionally managed investment vehicle
                  with institutional-grade oversight and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="factsheet-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                <h6 className="section-subtitle mb-4">Lorem Ipsum</h6>
                <h3 className="section-title mb-lg-3 mb-4">Lorem Ipsum</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="factsheet-content-div d-flex align-items-center justify-content-between">
                <h4>Download Latest Factsheet</h4>
                <div>
                  <NavLink
                    to="/investor-letters"
                    className="banner-btn blue-btn mt-0"
                  >
                    Factsheet
                  </NavLink>
                </div>
              </div>

              <div className="factsheet-content-div d-flex align-items-center justify-content-between mt-5">
                <h4>Download Presentation</h4>
                <div>
                  <NavLink
                    to="/investor-letters"
                    className="banner-btn blue-btn mt-0"
                  >
                    Presentation
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="investor-letter-section">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="section-subtitle">Download</h5>
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h2 className="banner-title offerings-title mt-3">
                  Disclosures
                </h2>
              </div>
              <div className="col-lg-7 mt-lg-0 mt-4 d-flex justify-conten-lg-end justify-content-start">
                {/* <div>
                  <NavLink
                    to="/investor-letters"
                    className="banner-btn blue-btn mt-0"
                  >
                    Explore
                  </NavLink>
                </div> */}
      {/* <div className="row">
                  <NavLink to="/" target="_blank">
                    <div className="letter-div mb-4">
                      <h6>FPI Disclosure Document 1</h6>
                    </div>
                  </NavLink>
                  <NavLink to="/" target="_blank">
                    <div className="letter-div mb-4">
                      <h6>FPI Management Fees Calculator</h6>
                    </div>
                  </NavLink>
                  <NavLink to="/" target="_blank">
                    <div className="letter-div mb-4">
                      <h6>FPI Management Fees Calculator</h6>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <StickyContact title="Want to know more about Piper Serica Numero Uno India Fund?" />
    </Layout>
  );
};

export default PublicFund;
