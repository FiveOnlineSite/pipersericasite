import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";
import OfferingsSlider from "../../components/OfferingsSlider";
import NewsSection from "../../components/NewsSection";
import SubscribeLetter from "../../components/SubscribeLetter";
import axios from "axios";
import MetaTagComponent from "../../components/MetaTagComponent";

const NRIInvestor = () => {
  const investorItem = [
    {
      image:
        "/images/banners/62184b3cd78853ebf6106ba5_2560a237988ae07923f488781b91dfd7.webp",
      subtitle: "",
      title: "All-weather, purposeful investment strategies",
      text: "Read More",
    },
    {
      image:
        "/images/banners/67864f896fdad3b987fea826_Website - Header Banners (60).png",
      subtitle: "Knowledge",
      title:
        "Goldilocks and The Bears - Lighthouse Canton Global Outlook Report 2025",
      text: "Our Strategies",
    },
  ];

  const investorSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [openAccordion, setOpenAccordion] = useState(0);

  // Toggle function for each accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const offeringsSettings = {
    centerMode: false, // Enable center mode
    slidesToShow: 2, // Number of slides to show
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const offeringsItems = [
    {
      strategy_title: "Public Market Funds",
      funds_list: [
        //  Add a key for the array
        {
          funds: "Piper Serica Numero Uno India Fund (Offshore Fund)",
          link: "/public-market/piper-serica-nemero-uno-india-fund",
          btn_id: "offshore-fund",
        },
        {
          funds: "Piper Serica Leader Portfolio (PMS)",
          link: "/public-market/piper-serica-leader-portfolio",
          btn_id: "pms-fund",
        },
      ],
    },
  ];

  const [fundNumbers, setFundNumbers] = useState([]);

  useEffect(() => {
    const fetchFundNumbers = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        const fundName = "nri-investor";

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
      <MetaTagComponent />
      {/* <section className="investor-banner-section">
        <div className="row">
          <Slider {...investorSettings}>
            {investorItem.map((item, index) => (
              <div key={index} className="investor-banner-img">
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt={`banner-img-${index}`}
                />

                <div className="investor-banner-content">
                  <div className="container">
                    {item.subtitle && (
                      <h6 className="banner-subtitle">{item.subtitle}</h6>
                    )}
                    <h1 className="banner-title">{item.title}</h1>

                    <NavLink to="/" className="banner-btn">
                      {item.text}
                      <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}

      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div bann-img-height">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/NRI Investor.jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Creating Meaningful Change</h6> */}
                <h1 className="banner-title ">
                  Process drive, consistent performance
                </h1>
                {/* <p className="banner-para">
                        Our commitment to making a positive impact drives everything
                        we do. Through innovative solutions, community engagement, and
                        sustainable initiatives, we strive to make a lasting
                        difference in the lives we touch and the environments we care
                        for.{" "}
                      </p> */}

                {/* <NavLink to="#offerings" className="banner-btn">
                  Read More
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container">
          <div className="row">
            <h5 className="section-subtitle mb-4">What we do</h5>

            <p className="para">
              Piper Serica is a long-only active equity asset manager that
              employs various equity investment strategies in India. We manage
              multiple funds that invest in Indian listed companies for domestic
              and foreign individuals and institutions. We also manage a fund
              that invests in Indian startups that are building business models
              based on deep tech. We have been investing in Indian companies for
              over 30 years and have a very solid understanding of how to
              succeed while investing in India navigating through various risks,
              most of them unique to India as an emerging market. The funds that
              we manage cater to different risk-return profiles and objectives
              of our investors. We have an edge over our peers due to our deep
              research and disciplined approach to investing. Our research team
              is extensively trained in our proprietary research processes which
              we have developed and largely automated. To ensure skin in the
              game, our fund management team makes all their public and private
              investments through the funds managed by Piper Serica. We are a
              fund management company owned by our management team, with a
              majority stake held by women.
            </p>

            {/* <div className="col-lg-4">
            
              <h2 className="section-title mt-5">
                Unlocking differentiated growth opportunities across market
                cycles
              </h2>
            </div>
            <div className="col-lg-7 offset-lg-1 mt-lg-0 mt-5">
            
            </div> */}
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
                          <p className="facts-small">
                            {fundNumbers.fund_subtitle3}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                {/* <div className="col-12">
                <p className="para-txt mt-2">Since Feb 2025</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section nri-why-section">
        <div className="container">
          <div className="desktop-row">
            <div className="row">
              <div className="col-lg-4">
                <div className="why-us-div">
                  <div className="why-us-content">
                    <h2 className="banner-title why-content-main-title">
                      Research Process
                    </h2>
                    <h6 className="read-more">
                      Read More <i className="fa-solid fa-plus"></i>
                    </h6>
                  </div>

                  <div className="why-content-para">
                    <h6 className="section-subtitle why-content-subtitle">
                      Why us
                    </h6>

                    <h4 className="why-content-title">Research Process</h4>
                    <p className="para why-para">
                      We have a very strong on-ground research presence, which
                      is essential for success in an Emerging Market like India.
                      Our research team understands local nuances while engaging
                      with investee company management and their stakeholders.
                      We have built deep and meaningful networks across
                      industries that allow us to assess investment
                      opportunities in depth. This enables us to understand
                      long-term trends as we build our investment thesis. We
                      have built a blue-chip reputation as an asset manager over
                      three decades which provides us with market access that is
                      not available to new fund managers. Our fund management
                      team has a combined experience of almost 100 years, making
                      it one of the most experienced teams in the country.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="why-us-div ">
                  <div className="why-us-content">
                    <h2 className="banner-title why-content-main-title">
                      Focus on risk-adjusted returns
                    </h2>
                    <h6 className="read-more">
                      Read More <i className="fa-solid fa-plus"></i>
                    </h6>
                  </div>

                  <div className="why-content-para">
                    <h6 className="section-subtitle why-content-subtitle">
                      Why us
                    </h6>

                    <h4 className="why-content-title">
                      Focus on risk-adjusted returns
                    </h4>
                    <p className="para why-para">
                      We focus not only on returns but also on the systemic and
                      non-systemic risks while building our model portfolio. We
                      have built strict guardrails of risk metrics that have
                      helped us deliver steady, long-term returns. Our portfolio
                      management process is devoid of human biases due to highly
                      objective decision-making processes that we have developed
                      over three decades.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="why-us-div">
                  <div className="why-us-content">
                    <h2 className="banner-title why-content-main-title">
                      Investor Friendliness
                    </h2>
                    <h6 className="read-more">
                      Read More <i className="fa-solid fa-plus"></i>
                    </h6>
                  </div>

                  <div className="why-content-para">
                    <h6 className="section-subtitle why-content-subtitle">
                      Why us
                    </h6>

                    <h4 className="why-content-title">Investor Friendliness</h4>
                    <p className="para why-para">
                      We love to communicate with our investors on a regular
                      basis. While regulatory compliance requires us to send
                      standard portfolio and valuation reports to our investors,
                      we go beyond that. Through monthly, quarterly, and annual
                      investor letters, as well as regular webinars we share our
                      portfolio strategy and market outlook on a regular basis
                      with our investors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mobile-row">
            <div className="accordion" id="accordionExample">
              {/* Accordion Item 1 */}
              <div
                className={`accordion-item why-accordion-item ${
                  openAccordion === 0 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' class
              >
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    openAccordion === 0 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>
                      <h4 className="why-content-title">Research Process</h4>
                      <p className="para why-para">
                        We have a very strong on-ground research presence, which
                        is essential for success in an Emerging Market like
                        India. Our research team understands local nuances while
                        engaging with investee company management and their
                        stakeholders. We have built deep and meaningful networks
                        across industries that allow us to assess investment
                        opportunities in depth. This enables us to understand
                        long-term trends as we build our investment thesis. We
                        have built a blue-chip reputation as an asset manager
                        over three decades which provides us with market access
                        that is not available to new fund managers. Our fund
                        management team has a combined experience of almost 100
                        years, making it one of the most experienced teams in
                        the country.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={`accordion-button why-accordion-button ${
                    openAccordion === 0 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(0)}
                  aria-expanded={openAccordion === 0 ? "true" : "false"}
                  aria-controls="collapseTwo"
                >
                  <h2
                    className={`accordion-header ${
                      openAccordion === 0 ? "d-none" : ""
                    }`}
                  >
                    Research Process
                  </h2>
                  {openAccordion === 0 ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Accordion Item 2 */}
              <div
                className={`accordion-item why-accordion-item ${
                  openAccordion === 1 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' class
              >
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${
                    openAccordion === 1 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>
                      <h4 className="why-content-title">
                        Focus on risk-adjusted returns
                      </h4>
                      <p className="para why-para">
                        We focus not only on returns but also on the systemic
                        and non-systemic risks while building our model
                        portfolio. We have built strict guardrails of risk
                        metrics that have helped us deliver steady, long-term
                        returns. Our portfolio management process is devoid of
                        human biases due to highly objective decision-making
                        processes that we have developed over three decades.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={`accordion-button why-accordion-button ${
                    openAccordion === 1 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(1)}
                  aria-expanded={openAccordion === 1 ? "true" : "false"}
                  aria-controls="collapseOne"
                >
                  {" "}
                  <h2
                    className={`accordion-header ${
                      openAccordion === 1 ? "d-none" : ""
                    }`}
                  >
                    Focus on risk-adjusted returns
                  </h2>
                  {openAccordion === 1 ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Accordion Item 3 */}
              <div
                className={`accordion-item why-accordion-item ${
                  openAccordion === 2 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' class
              >
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${
                    openAccordion === 2 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="why-content-para">
                      <h6 className="section-subtitle why-content-subtitle">
                        Why us
                      </h6>
                      <h4 className="why-content-title">
                        Investor Friendliness
                      </h4>
                      <p className="para why-para">
                        We love to communicate with our investors on a regular
                        basis. While regulatory compliance requires us to send
                        standard portfolio and valuation reports to our
                        investors, we go beyond that. Through monthly,
                        quarterly, and annual investor letters, as well as
                        regular webinars we share our portfolio strategy and
                        market outlook on a regular basis with our investors.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className={`accordion-button why-accordion-button ${
                    openAccordion === 2 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(2)}
                  aria-expanded={openAccordion === 2 ? "true" : "false"}
                  aria-controls="collapseThree"
                >
                  <h2
                    className={`accordion-header ${
                      openAccordion === 2 ? "d-none" : ""
                    }`}
                  >
                    Investor Friendliness
                  </h2>
                  {openAccordion === 2 ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-offerings-section" id="offerings">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="section-subtitle">Our Offerings</h5>
            <h2 className="banner-title offerings-title mt-3">
              Knowledge. Wisdom. Wealth.
            </h2>

            {/* <h3 className="section-title my-lg-3 my-4">
              Private Markets Funds
            </h3> */}
            <div className="row align-items-center my-lg-3 my-4">
              <div className="col-lg-9">
                <p className="para small-para">
                  Our NRI investors have the option to invest in our model
                  portfolio strategy either through the FPI fund or the onshore
                  PMS. The FPI fund is denominated in USD, while the PMS is
                  denominated in INR. Our team will be happy to guide NRI
                  investors through both options and help them choose the most
                  appropriate one.
                </p>
              </div>
              {/* <div className="col-lg-3">
                <NavLink to="/" className="banner-btn blue-btn mt-0">
                  All funds
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
              </div> */}
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="offerings-div">
                  {/* <h6 className="section-subtitle">Investment Strategy</h6> */}

                  {offeringsItems.map((item, index) => (
                    <div key={index}>
                      {/* Add key to the outermost element */}
                      <div className="strategy-title-div">
                        <h5>{item.strategy_title}</h5>{" "}
                      </div>
                      <div className="strategy-funds-div">
                        {/* Check if funds_list exists before mapping */}
                        {item.funds_list?.map((fund, fundIndex) => (
                          <div className="funds-container" key={fundIndex}>
                            {/* Add key here */}
                            <NavLink
                              to={fund.link}
                              className="mt-2"
                              id={fund.btn_id}
                            >
                              <div className="funds-div">
                                <h5>{fund.funds}</h5>
                                <i className="fa-solid fa-arrow-right"></i>
                              </div>
                            </NavLink>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="outlook-section">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="section-subtitle">Updates</h5>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="banner-title offerings-title mt-3">
                  Investor Letters
                </h2>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-4">
                <div>
                  <NavLink
                    to="/investor-letters"
                    className="banner-btn blue-btn mt-0"
                    id="investor-letters"
                  >
                    Discover all
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-news-section">
        <NewsSection />
      </section>

      <SubscribeLetter />

      <section className="contact-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-content">
                <h6 className="banner-subtitle">Contact us</h6>
                <h2 className="banner-title why-content-main-title">
                  Get in touch
                </h2>
                <p className="para contact-para">
                  To discuss investment opportunities and funds or for more
                  information, please contact us and a member of our team will
                  be in touch.
                </p>

                <NavLink to="/contact" className="banner-btn">
                  contact
                  <i className="fa-solid fa-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NRIInvestor;
