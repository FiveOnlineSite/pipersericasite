import React, { useState } from "react";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";

const NewsArticle = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const newsItems = [
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/one-funding.jpg",
      content_type: "Angel Fund",
      news_title:
        "Swara Fincare Secures Rs 19.4 Cr Series-A Funding In Partnership With UC Impower Fund, Piper Serica Angel Fund",
      date: "October 09, 2024",
      link: "https://www.bwdisrupt.com/article/swara-fincare-secures-rs-194-cr-series-a-funding-in-partnership-with-uc-impower-fund-piper-serica-angel-fund-535701",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/Six-Sense.webp",
      content_type: "Angel Fund",
      news_title: "Piper Serica invests in Six Sense Mobility",
      date: "August 14, 2024",
      link: "https://entrackr.com/2024/08/piper-serica-invests-in-six-sense-mobility/",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/OTPless.webp",
      content_type: "Angel Fund",
      news_title: "Bhavik Koladiya-led OTPless raises $3.5 Mn led by SIDBI",
      date: "May 16, 2024",
      link: "https://entrackr.com/2024/05/bhavik-koladiya-led-otpless-raises-3-5-mn-led-by-sidbi/",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/freed.webp",
      content_type: "Angel Fund",
      news_title: "Debt relief platform FREED raises $7.5 Mn in Series A",
      date: "March 14, 2024",
      link: "https://entrackr.com/2024/03/debt-relief-platform-freed-raises-7-5-mn-in-series-a/",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/fintech-startup-funding.webp",
      content_type: "Angel Fund",
      news_title:
        "FlashAid raises $2.5 million in funding round led by Piper Serica Angel Fund, SOSV",
      date: "April 25, 2024",
      link: "https://economictimes.indiatimes.com/tech/funding/flashaid-raises-2-5-million-in-funding-round-led-by-piper-serica-angel-fund-sosv/articleshow/109588758.cms",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/Cleartrust.webp",
      content_type: "Angel Fund",
      news_title: "ClearTrust raises $1.9 Mn in pre-Series A round",
      date: "January 29, 2024",
      link: "https://entrackr.com/2024/01/cleartrust-raises-1-9-mn-in-pre-series-a-round/",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/optimizer.jpg",
      content_type: "Angel Fund",
      news_title: "EVIFY Raises $1.3 Million From Piper Serica Angel Fund",
      date: "January 11, 2024",
      link: "https://www.saurenergy.com/ev-storage/evify-raises-1-3-million-from-piper-serica-angel-fund",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/KiVi.webp",
      content_type: "Angel Fund",
      news_title: "Agri fintech startup KiVi closes seed round",
      date: "Octomber 12, 2023",
      link: "https://entrackr.com/2023/10/agri-fintech-startup-kivi-closes-seed-round/",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/barandbench.avif",
      content_type: "Angel Fund",
      news_title:
        "Saga Legal assists Floworks.ai in its latest round of funding",
      date: "July 28, 2023",
      link: "https://www.barandbench.com/law-firms/dealstreet/saga-legal-assists-floworksai-in-its-latest-round-of-funding",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/Castler_Founders.jpg",
      content_type: "Angel Fund",
      news_title:
        "Capital 2B, IIFL Fintech Fund Lead $5 M Round For Zerodha-backed Castler",
      date: "May 10, 2023",
      link: "https://www.bwdisrupt.com/article/capital-2b-iifl-fintech-fund-lead-5-m-round-for-zerodha-backed-castler-476051",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/funds.webp",
      content_type: "Angel Fund",
      news_title:
        "DesignX raises pre-series A funding from Piper Serica Angel Fund",
      date: "November 12, 2024",
      link: "https://economictimes.indiatimes.com/tech/funding/designx-raises-pre-series-a-funding-from-piper-serica-angel-fund/articleshow/115209145.cms?from=mdr",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/ev.webp",
      content_type: "Angel Fund",
      news_title:
        "EV leasing firm Alt Mobility raises $6 million to scale up operations",
      date: "January 18, 2024",
      link: "https://www.business-standard.com/industry/news/ev-leasing-firm-alt-mobility-raises-6-million-to-scale-up-operations-124011800160_1.html",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/1630600049443.webp",
      content_type: "Angel Fund",
      news_title:
        "Space-tech firm Astrogate Labs raises $1.3 million in pre-series round led by Piper Serica",
      date: "February 27, 2025",
      link: "https://economictimes.indiatimes.com/tech/funding/space-tech-firm-astrogate-labs-raises-1-3-million-in-pre-series-round-led-by-piper-serica/articleshow/118601900.cms",
    },
    {
      news_img: "/images/news/imUkA8Iz2IpmzaEI3mcm.webp",
      // insight_type: "News and More",
      content_type: "Angel Fund",
      news_title: "Astrogate Labs raises $1.3 Mn led by Piper Serica",
      date: "February 27, 2025",
      link: "https://entrackr.com/snippets/astrogate-labs-raises-13-mn-led-by-piper-serica-8760743",
    },
    {
      news_img: "/images/news/IMG_0039-760x570.jpg",
      // insight_type: "Company Updates",
      content_type: "Angel Fund",
      news_title:
        "Spacetech Startup Astrogate Bags Funding To Develop Laser Communication Terminals",
      date: "February 27, 2025",
      link: "https://inc42.com/buzz/spacetech-startup-astrogate-bags-funding-to-develop-laser-communication-terminals",
    },
    {
      // insight_type: "Angel Fund",
      news_img:
        "/images/news/Rupeeflow_founders_20250210224601_original_image_24.webp",
      content_type: "Angel Fund",
      news_title: "Rupeeflo Raises $1 Mn From Piper Serica Angel Fund",
      date: "February 10, 2025",
      link: "https://www.bwdisrupt.com/article/rupeeflo-raises-1-mn-from-piper-serica-angel-fund-547569",
    },
    {
      news_img:
        "/images/news/Rupeeflow_founders_20250210224601_original_image_24.webp",
      // insight_type: "Angel Fund",
      content_type: "Angel Fund",
      news_title: "Rupeeflo raises $1 Mn from Piper Serica",
      date: "February 10, 2025",
      link: "https://entrackr.com/snippets/rupeeflo-raises-1-mn-from-piper-serica-8706125",
    },
    {
      news_img:
        "/images/news/rupeeflo-raised-1-million-in-pre-seed-round-led-by-piper-serica-angel-fund.webp",
      // insight_type: "Company Updates",
      content_type: "Angel Fund",
      news_title:
        "Rupeeflo raised $1 million in pre-seed round led by Piper Serica Angel Fund",
      date: "February 10, 2025",
      link: "https://economictimes.indiatimes.com/tech/funding/rupeeflo-raised-1-million-in-pre-seed-round-led-by-piper-serica-angel-fund/articleshow/118119714.cms",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/maxresdefault (1).jpg",
      content_type: "Videos",
      news_title:
        "Piper Serica x Astrogate Labs: The Next Big Leap in Space Tech",
      date: "February 28, 2025",
      link: "https://youtu.be/XykqfFfr67c",
    },
    {
      news_img: "/images/news/maxresdefault.jpg",
      // insight_type: "News and More",
      content_type: "Videos",
      news_title: "Piper Serica x Rupeeflo: Fintech Revolution Unlocked!",
      date: "February 12, 2025",
      link: "https://youtu.be/h5ys474Z460",
    },
    {
      news_img: "/images/news/V5DCqNsUIO8-HD.jpg",
      // insight_type: "Company Updates",
      content_type: "Videos",
      news_title:
        "The Next 10 Years of India: A Roadmap for Long-Term Investors",
      date: "January 24, 2025",
      link: "https://youtu.be/V5DCqNsUIO8",
    },
    {
      // insight_type: "Investments Insights",
      news_img: "/images/news/maxresdefault (2).jpg",
      content_type: "Videos",
      news_title: "Auto Industry Shake-Up: Opportunities Before Budget 2025",
      date: "January 17, 2025",
      link: "https://youtu.be/05Crr5bFAlM",
    },
    {
      news_img: "/images/news/maxresdefault (3).jpg",
      // insight_type: "News and More",
      content_type: "Videos",
      news_title:
        "US Fed Rate Cuts: Impact on Indian Economy & Emerging Sectors to Watch!",
      date: "December 20, 2024",
      link: "https://youtu.be/lOfL087qO_E",
    },
  ];

  // Sort news items by date in descending order (latest date first)
  const sortedNews = [...newsItems].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Filter news items based on selected filter
  // const filteredNews = selectedFilter
  // ? newsItems.filter((item) => item.content_type === selectedFilter)
  // : newsItems;
  const filteredNews = selectedFilter
    ? sortedNews.filter((item) => item.content_type === selectedFilter)
    : sortedNews;

  // Function to clear filters
  const handleClearFilters = () => {
    setSelectedFilter("");
  };

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/News-Articles.jpg`}
              alt="banner-img"
            />
            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Press Release</h6> */}
                <h1 className="banner-title">News & More</h1>
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
          {/* News Items */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-6 mt-lg-0 mt-0">
              <div className="industries-filter-div">
                <select
                  className="form-select"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Angel Fund">Angel Fund</option>
                  <option value="Videos">Videos</option>
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

          {/* News Items Section */}
          <div className="row">
            {filteredNews.map((item, index) => (
              <div
                className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-3 mt-5"
                key={index}
              >
                <NavLink to={item.link} target="_blank">
                  <div className="news-div mt-4">
                    <div className="news-img-div">
                      <img
                        src={`${process.env.PUBLIC_URL}${item.news_img}`}
                        alt="news"
                        className="news-img w-100"
                      />
                    </div>
                    <div className="news-content-div">
                      <h5>{item.content_type}</h5>
                      <h3 className="section-title mt-3">{item.news_title}</h3>
                      <h6 className="mt-5">{item.date}</h6>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticle;
