import React, { useState } from "react";
import GatewayAnimation from "../atoms/GatewayAnimation";
import TargetAnimation from "../atoms/TargetAnimation";
import UpArrowAnimation from "../atoms/UpArrowAnimation";
import DollarAnimation from "../atoms/DollarAnimation";
import RocketAnimation from "../atoms/RocketAnimation";

const VerticalTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(4);

  return (
    <>
      {/*  */}
      <section className="history-section">
        <div className="container">
          <h6 className="section-subtitle">History</h6>
          <div className="row align-items-start"> </div>
          <div className="row mt-4 history-row">
            <div className="col-lg-2">
              <div className="year-tab-links">
                <ul
                  class="nav nav-pills nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link text-primary fw-semibold position-relative"
                      id="pills-gateway-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-gateway"
                      type="button"
                      role="tab"
                      aria-controls="pills-gateway"
                      aria-selected="false"
                      onClick={() => setActiveTabIndex(0)}
                    >
                      <div>
                        <div class="d-flex w-100 align-items-center">
                          <span></span>
                          <h4>2004</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link text-primary fw-semibold position-relative"
                      id="pills-target-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-target"
                      type="button"
                      role="tab"
                      aria-controls="pills-target"
                      aria-selected="false"
                      onClick={() => setActiveTabIndex(1)}
                    >
                      <div>
                        <div class="d-flex w-100 align-items-center">
                          <span></span>
                          <h4>2015</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link text-primary fw-semibold position-relative"
                      id="pills-uparrow-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-uparrow"
                      type="button"
                      role="tab"
                      aria-controls="pills-uparrow"
                      aria-selected="false"
                      onClick={() => setActiveTabIndex(2)}
                    >
                      <div>
                        <div class="d-flex w-100 align-items-center">
                          <span></span>
                          <h4>2019</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link text-primary fw-semibold position-relative"
                      id="pills-dollar-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-dollar"
                      type="button"
                      role="tab"
                      aria-controls="pills-dollar"
                      aria-selected="false"
                      onClick={() => setActiveTabIndex(3)}
                    >
                      <div>
                        <div class="d-flex w-100 align-items-center">
                          <span></span>
                          <h4>2020</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link text-primary fw-semibold active position-relative"
                      id="pills-rocket-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-rocket"
                      type="button"
                      role="tab"
                      aria-controls="pills-rocket"
                      aria-selected="true"
                      onClick={() => setActiveTabIndex(4)}
                    >
                      <div>
                        <div class="d-flex w-100 align-items-center">
                          <span></span>
                          <h4>2022</h4>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="history-tab-content">
                <div class="tab-content p-3 w-100" id="pills-tabContent">
                  <div
                    style={{
                      display: activeTabIndex === 0 ? "block" : "none",
                    }}
                    class="tab-pane fade"
                    id="pills-gateway"
                    role="tabpanel"
                    aria-labelledby="pills-gateway-tab"
                  >
                    <div className="history-content-div">
                      <h2 class="history-title">2004</h2>
                      <div class="history-content">
                        <div class="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p class="para history-para">
                            Piper Serica started{" "}
                            <strong>operations in 2004</strong>
                          </p>
                        </div>
                      </div>

                      <GatewayAnimation isActive={activeTabIndex === 0} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: activeTabIndex === 1 ? "block" : "none",
                    }}
                    class="tab-pane fade"
                    id="pills-target"
                    role="tabpanel"
                    aria-labelledby="pills-target-tab"
                  >
                    <div className="history-content-div">
                      <h2 class="history-title">2015</h2>
                      <div class="history-content">
                        <div class="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p class="para history-para">
                            Piper Serica received its first registration from
                            the{" "}
                            <strong>
                              {" "}
                              Securities and Exchange Board of India (SEBI) as a
                              Registered Investment Advisor
                            </strong>
                          </p>
                        </div>
                      </div>

                      <TargetAnimation isActive={activeTabIndex === 1} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: activeTabIndex === 2 ? "block" : "none",
                    }}
                    class="tab-pane fade"
                    id="pills-uparrow"
                    role="tabpanel"
                    aria-labelledby="pills-uparrow-tab"
                  >
                    <div className="history-content-div">
                      <h2 class="history-title">2019</h2>
                      <div class="history-content">
                        <div class="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p class="para history-para">
                            {" "}
                            Piper Serica received the registration from the
                            <strong>
                              {" "}
                              Securities and Exchange Board of India (SEBI) for
                              launching Portfolio Management Service (PMS).
                            </strong>
                          </p>
                        </div>
                      </div>

                      <UpArrowAnimation isActive={activeTabIndex === 2} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: activeTabIndex === 3 ? "block" : "none",
                    }}
                    class="tab-pane fade"
                    id="pills-dollar"
                    role="tabpanel"
                    aria-labelledby="pills-dollar-tab"
                  >
                    <div className="history-content-div">
                      <h2 class="history-title">2020</h2>
                      <div class="history-content">
                        <div class="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p class="para history-para">
                            Piper Serica launched its
                            <strong>
                              {" "}
                              Foreign Portfolio Investor (FPI) Fund based in
                              Mauritius.
                            </strong>{" "}
                          </p>
                        </div>
                      </div>

                      <DollarAnimation isActive={activeTabIndex === 3} />
                    </div>
                  </div>
                  <div
                    style={{
                      display: activeTabIndex === 4 ? "block" : "none",
                    }}
                    class="tab-pane fade show active"
                    id="pills-rocket"
                    role="tabpanel"
                    aria-labelledby="pills-rocket-tab"
                  >
                    <div className="history-content-div">
                      <h2 class="history-title">2022</h2>
                      <div class="history-content">
                        <div class="single-history">
                          <div>
                            <span></span>
                          </div>
                          <p class="para history-para">
                            Piper Serica Launched
                            <strong>
                              {" "}
                              Piper Serica Angel Fund, an early-stage VC fund
                              registered with SEBI as a Category 1 AIF.
                            </strong>{" "}
                          </p>
                        </div>
                      </div>

                      <RocketAnimation isActive={activeTabIndex === 4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
    </>
  );
};
export default VerticalTabs;
