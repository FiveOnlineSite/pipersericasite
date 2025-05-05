import React, { useEffect } from "react";
import Header from "../../components/Header";
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToInvestorMap = {
      "/foreign-investor": "foreign",
      "/nri-investor": "nri",
      "/startup-founder-entrepreneur": "startup",
    };

    const currentInvestor = pathToInvestorMap[location.pathname];
    if (currentInvestor) {
      localStorage.setItem("selectedInvestor", currentInvestor); // Update localStorage based on URL
    }
  }, [location.pathname]); // Run whenever the location changes (i.e., user navigates)

  return (
    <>
      <Header />
      <section className="home-banner w-100 overflow-hidden">
        <div className="row">
          <div className="video-banner">
            <video
              src={`${process.env.PUBLIC_URL}/videos/HomePageVideo3.1.mp4`}
              loop
              muted
              autoPlay
              className="w-100"
              playsInline
              preload="auto"
            ></video>

            <div className="home-banner-content">
              <div className="container">
                <h1 className="section-title">
                  Investing in future. <br /> Backing emerging companies.
                </h1>
                <div className="im-a-content-div">
                  <h5>I am a ...</h5>
                </div>
                <div className="banner-contents">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <NavLink
                            to="/foreign-investor"
                            className="content-div"
                            id="foreign-investor"
                          >
                            <div className="content-div-title">
                              <h2 id="foreign-investor">Foreign Investor</h2>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="content-para">
                              <div className="content-title">
                                <h5 id="foreign-investor">Foreign Investor</h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              <p className="justify-para" id="foreign-investor">
                                Our offshore fund provides foreign investors
                                access to high-growth Indian companies,
                                leveraging on-ground expertise and a focused
                                portfolio to capitalize on India’s emerging
                                market potential.
                              </p>
                            </div>
                          </NavLink>
                        </div>
                        <div className="col-lg-3">
                          <NavLink
                            to="/nri-investor"
                            className="content-div"
                            id="nri-investor"
                          >
                            <div className="content-div-title">
                              <h2 id="nri-investor">NRI Investor</h2>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="content-para">
                              <div className="content-title">
                                <h5 id="nri-investor">NRI Investor</h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              <p className="justify-para" id="nri-investor">
                                Invest in India with an experienced on-ground
                                manager delivering strong risk-adjusted returns.
                                Choose INR or USD investments for strategic
                                access to one of the world’s fastest-growing
                                markets with expert guidance.
                              </p>
                            </div>
                          </NavLink>
                        </div>
                        <div className="col-lg-3">
                          <NavLink
                            to="/family-office-and-indian-investor"
                            className="content-div"
                            id="indian-investor"
                          >
                            <div className="content-div-title">
                              <h2 id="indian-investor">
                                Family Office & Indian Investor
                              </h2>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="content-para">
                              <div className="content-title">
                                <h5 id="indian-investor">
                                  Family Office & Indian Investor
                                </h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              <p className="justify-para" id="indian-investor">
                                Our onshore PMS provides corporate and Indian
                                investors a transparent, disciplined strategy
                                for sustainable wealth growth, maximizing
                                returns through expert guidance and strategic
                                portfolio allocation for long-term financial
                                success.
                              </p>
                            </div>
                          </NavLink>
                        </div>
                        <div className="col-lg-3">
                          <NavLink
                            to="/startup-founder-entrepreneur"
                            className="content-div"
                            id="startup-founder"
                          >
                            <div className="content-div-title">
                              <h2 id="startup-founder">
                                Startup Founder & Entrepreneur
                              </h2>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="content-para">
                              <div className="content-title">
                                <h5 id="startup-founder">
                                  Startup Founder & Entrepreneur
                                </h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              <p className="justify-para" id="startup-founder">
                                As a founder-led company, we deeply understand
                                innovation, scaling, and the challenges startups
                                navigate today. Beyond capital, we provide
                                hands-on support and strategic guidance to
                                empower founders in building thriving,
                                successful businesses.
                              </p>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
