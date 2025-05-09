import React, { useState } from "react";
import Layout from "../../components/Layout";
import MetaTagComponent from "../../components/MetaTagComponent";

const Insights = () => {
  const newsItems = [
    {
      insight_type: "Investments Insights",
      news_img: "/images/banners/news1.png",
      content_type: "Events",
      news_title:
        "Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
    {
      news_img: "/images/banners/news2.png",
      insight_type: "News and More",
      content_type: "Knowledge",
      news_title:
        "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
    {
      news_img: "/images/banners/news1.png",
      insight_type: "Company Updates",
      content_type: "Press Release",
      news_title:
        "Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
      date: "January 30, 2025",
    },
  ];

  const [selectedInsightType, setSelectedInsightType] =
    useState("All Insights");
  const [selectedContentType, setSelectedContentType] =
    useState("All Content Type");
  const [selectedSortOrder, setSelectedSortOrder] = useState("Most Recent");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort news items based on selected filters
  const filteredNewsItems = newsItems
    .filter(
      (item) =>
        (selectedInsightType === "All Insights" ||
          item.insight_type === selectedInsightType) &&
        (selectedContentType === "All Content Type" ||
          item.content_type === selectedContentType) &&
        (searchQuery === "" ||
          item.news_title.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (selectedSortOrder === "A to Z") {
        return a.news_title.localeCompare(b.news_title);
      }
      return 0; // Keep the original order for "Most Recent"
    });

  const handleClearFilters = () => {
    setSelectedInsightType("All Insights");
    setSelectedContentType("All Content Type");
    setSelectedSortOrder("Most Recent");
    setSearchQuery("");
  };

  return (
    <Layout>
      <MetaTagComponent />
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/market-fund-banner.webp`}
              alt="banner-img"
            />
            <div className="banner-content-div">
              <div className="container">
                <h6 className="banner-subtitle">Press Release</h6>
                <h1 className="banner-title">Insights</h1>
                {/* <p className="banner-para">
                  Piper Serica is a distinguished investment management firm
                  committed to delivering long-term value through meticulous
                  research, strategic asset allocation, and a disciplined
                  investment approach, catering to investors seeking sustainable
                  growth and financial security.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insights-section">
        <div className="container">
          {/* Filter Dropdowns */}
          <div className="row mb-4">
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-0 order-lg-1 order-md-1 order-2">
              <div className="industries-filter-div">
                <select
                  className="form-select"
                  value={selectedInsightType}
                  onChange={(e) => setSelectedInsightType(e.target.value)}
                >
                  <option>All Insights</option>
                  <option>News and More</option>
                  <option>Investments Insights</option>
                  <option>Company Updates</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-0 mt-3 order-lg-2 order-md-2 order-3">
              <div className="industries-filter-div">
                <select
                  className="form-select"
                  value={selectedContentType}
                  onChange={(e) => setSelectedContentType(e.target.value)}
                >
                  <option>All Content Type</option>
                  <option>Events</option>
                  <option>Knowledge</option>
                  <option>Press Release</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-4 mt-3 order-lg-3 order-md-3 order-4">
              <div className="industries-filter-div">
                <select
                  className="form-select"
                  value={selectedSortOrder}
                  onChange={(e) => setSelectedSortOrder(e.target.value)}
                >
                  <option>Most Recent</option>
                  <option>A to Z</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-4 mb-3 order-lg-4 order-md-4 order-1">
              <div className="industries-filter-div">
                <form className="search-div d-flex p-0" role="search">
                  <input
                    className="form-control me-2"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search"
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </form>
              </div>
            </div>
          </div>

          {/* Items Available and Clear Filters */}
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-6">
              <h6 className="para items-available-text">
                {filteredNewsItems.length} items available
              </h6>
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

          {/* News Items */}
          <div className="row mt-5">
            {filteredNewsItems.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-3 mt-5"
                key={index}
              >
                <div className="news-div">
                  <div className="news-img-div">
                    <img
                      src={`${process.env.PUBLIC_URL}${item.news_img}`}
                      alt="news"
                      className="news-img w-100"
                    />
                    <div className="news-type">
                      <h6 className="section-subtitle">{item.insight_type}</h6>
                    </div>
                  </div>
                  <div className="news-content-div">
                    <h5>{item.content_type}</h5>
                    <h3 className="section-title mt-3">{item.news_title}</h3>
                    <h6 className="mt-5">{item.date}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
