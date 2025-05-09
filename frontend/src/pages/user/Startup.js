import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import OfferingsSlider from "../../components/OfferingsSlider";
import NewsSection from "../../components/NewsSection";
import CompanyPortfolio from "../../components/CompanyPortfolio";
import CompanySlider from "../../components/CompanySlider";
import SubscribeLetter from "../../components/SubscribeLetter";
import TestimonialVideoSection from "../../components/TestimonialVideo";
import axios from "axios";
import MetaTagComponent from "../../components/MetaTagComponent";
import ArticleSection from "../../components/ArticleSection";
const Startup = () => {
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
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function for each accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleAccordionOne = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Focus on Early-Stage Startups",
      content:
        "Piper Serica Angel Fund is a strategic investment partner dedicated to empowering early-stage startups with proprietary deep technologies and robust intellectual property. The fund focuses on ventures that have advanced beyond pure research, targeting companies with demonstrated commercial potential through initial revenue or sophisticated product development. By identifying startups at the critical intersection of innovation and market viability, Piper Serica supports entrepreneurs in transforming groundbreaking scientific advances into scalable business models. The fund’s approach bridges the complex gap between technological breakthrough and market success, carefully selecting ventures with the potential to convert innovative concepts into tangible, market-ready solutions.",
      extrapara: "",
    },
    {
      title: "Sector-Agnostic with Key Focus Areas",
      content:
        "Piper Serica Angel Fund strategically navigates the technological frontier by concentrating investments in sectors at the forefront of global innovation. While maintaining flexibility across industries, the fund deliberately targets high-impact domains that are fundamentally transforming technological landscapes: fintech - revolutionary financial technologies, spacetech – from upstream to downstream, advanced electronics, next-generation computational solutions, cybersecurity's critical infrastructures, electric vehicles' sustainable transportation technologies, and semiconductor design.",
      extrapara: "",
    },
    {
      title: "Investment Criteria",
      content:
        "Piper Serica Angel Fund meticulously identifies startups that transcend traditional early-stage limitations by demonstrating exceptional product-market alignment and clear customer value propositions. The fund prioritizes ventures that exhibit not just innovative potential, but tangible market validation through robust customer engagement, repeatable sales models, and a demonstrable ability to solve critical industry challenges. With investment tickets ranging from INR 6-10 crore, Piper Serica provides capital that enables portfolio companies to accelerate product development, expand market reach, and drive meaningful organizational growth.",
      extrapara: "",
    },
    {
      title: "Flexible Investment Strategy",
      content:
        "Piper Serica Angel Fund demonstrates investment flexibility, positioning itself as both a collaborative partner and a potential lead investor. The fund's approach is deeply rooted in alignment with founders' strategic visions, allowing for nuanced investment structures that best serve each unique startup's growth trajectory. Whether joining forces with established lead investors or taking a lead role, Piper Serica evaluates opportunities through a comprehensive lens that prioritizes technological potential, market impact, and entrepreneurial excellence.",
      extrapara: "",
    },
    {
      title: "Swift and Data-Driven Decision-Making",
      content:
        "Piper Serica Angel Fund employs Yoda.ai, a proprietary AI-driven screening platform, to accelerate and optimize investment decisions. The tool systematically filters potential investments by analyzing key performance metrics, market data, and startup fundamentals. This technology enables the fund to quickly assess opportunities, reducing decision-making time from weeks to days while maintaining rigorous evaluation standards. By combining machine learning insights with expert human judgment, the fund identifies and validates high-potential startups with unprecedented speed and precision.",
      extrapara: "",
    },
    {
      title: "Collaborative Investment Philosophy",
      content:
        "Piper Serica Angel Fund adopts a partnership-driven model, collaborating with co-investors while making investments. By aligning with other venture capitalists, corporate investors, and domain experts, the fund ensures startups gain not just capital but also strategic support. This network provides access to industry insights, market opportunities, and operational guidance, accelerating commercialization. The approach minimizes risk through diversified expertise while maximizing growth potential for early-stage deep-tech ventures.",
      extrapara:
        "This structured and disciplined approach enables Piper Serica Angel Fund to invest in exceptional early-stage startups, driving innovation and growth across key industries.",
    },
  ];

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
      strategy_title: "Private Market Funds",
      funds_list: [
        //  Add a key for the array
        {
          funds: "Piper Serica Angel Fund",
          link: "/private-market/piper-serica-angel-fund",
        },
      ],
    },
  ];

  const [fundNumbers, setFundNumbers] = useState([]);

  useEffect(() => {
    const fetchFundNumbers = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        const fundName = "startup-founder-&-enterpreneur";

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
              src={`${process.env.PUBLIC_URL}/images/banners/Startup Founder.jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Creating Meaningful Change</h6> */}
                <h1 className="banner-title ">
                  Shaping the future. Empowering next-gen enterprises
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
              The Fund invests in early-stage companies that have developed
              proprietary deep IP or deep tech and are in the early stages of
              commercialization. We are sector-agnostic, though our focus areas
              include spacetech, AI, advanced electronics, semiconductor design,
              and fintech. We prefer to invest in startups that deliver
              significant value to their customers. We look for some level of
              product-market fit, even if early. Our typical ticket size is ₹10
              crore. While we are happy to co-invest with another lead investor,
              there are instances where we act as the lead or sole investor. Our
              decision-making process is fairly quick. We take a collaborative
              approach to investing and prefer to work with multiple
              co-investors who bring diverse value to the startup.
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

      <TestimonialVideoSection />

      <section className="why-us-section startup-why-section">
        <div className="container">
          <div className="desktop-row">
            <div className="row">
              <div className="col-lg-4">
                <div className="why-us-div why-us-div-one">
                  <div className="why-us-content">
                    <h2 className="banner-title why-content-main-title">
                      Value added partners
                    </h2>
                    <h6 className="read-more">
                      Read More <i className="fa-solid fa-plus"></i>
                    </h6>
                  </div>

                  <div className="why-content-para">
                    <h6 className="section-subtitle why-content-subtitle">
                      Why us
                    </h6>

                    <h4 className="why-content-title">Value added partners</h4>
                    <p className="para why-para">
                      Our founders see us as value-added partners beyond the
                      financial capital we bring. We work closely with them to
                      scale the company by helping build the organization,
                      acquire customers, and raise further funding.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="why-us-div why-us-div-one">
                  <div className="why-us-content">
                    <h2 className="banner-title why-content-main-title">
                      Network
                    </h2>
                    <h6 className="read-more">
                      Read More <i className="fa-solid fa-plus"></i>
                    </h6>
                  </div>

                  <div className="why-content-para">
                    <h6 className="section-subtitle why-content-subtitle">
                      Why us
                    </h6>

                    <h4 className="why-content-title">Network</h4>
                    <p className="para why-para">
                      We believe the greatest value we bring to founders is our
                      extensive network, which spans multiple industries and
                      skill sets. We have a highly diverse set of LPs, and
                      through our public market funds, we are connected with
                      some of the largest companies in the country.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="why-us-div why-us-div-one">
                  <div className="why-us-content">
                    <h2 className="banner-title why-content-main-title">
                      Founder first approach
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
                      Founder first approach
                    </h4>
                    <p className="para why-para">
                      We love getting in the trenches with founders and helping
                      them navigate tough times. Every startup faces significant
                      challenges, and our founders always find us by their side
                      as they work through them.
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
                  id="collapseOne"
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
                      <h4 className="why-content-title">
                        Value added partners
                      </h4>
                      <p className="para why-para">
                        Our founders see us as value-added partners beyond the
                        financial capital we bring. We work closely with them to
                        scale the company by helping build the organization,
                        acquire customers, and raise further funding.
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
                  aria-controls="collapseOne"
                >
                  {" "}
                  <h2
                    className={`accordion-header ${
                      openAccordion === 0 ? "d-none" : ""
                    }`}
                  >
                    Value added partners
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
                  id="collapseTwo"
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
                      <h4 className="why-content-title">Network</h4>
                      <p className="para why-para">
                        We believe the greatest value we bring to founders is
                        our extensive network, which spans multiple industries
                        and skill sets. We have a highly diverse set of LPs, and
                        through our public market funds, we are connected with
                        some of the largest companies in the country.
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
                  aria-controls="collapseTwo"
                >
                  {" "}
                  <h2
                    className={`accordion-header ${
                      openAccordion === 1 ? "d-none" : ""
                    }`}
                  >
                    Network
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
                        Founder first approach
                      </h4>
                      <p className="para why-para">
                        We love getting in the trenches with founders and
                        helping them navigate tough times. Every startup faces
                        significant challenges, and our founders always find us
                        by their side as they work through them.
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
                  {" "}
                  <h2
                    className={`accordion-header ${
                      openAccordion === 2 ? "d-none" : ""
                    }`}
                  >
                    Founder first approach
                  </h2>
                  {openAccordion === 2 ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-thesis-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                {/* <h6 className="section-subtitle mb-4">Growth Strategy</h6> */}
                <h3 className="section-title mb-lg-3 mb-4">
                  Investment Thesis and Approach
                </h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="accordion" id="accordionExample">
                {accordionData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        onClick={() => toggleAccordionOne(index)}
                      >
                        <span className="accord-title-one">
                          <i className="fas fa-diamond me-2"></i> {item.title}
                        </span>
                        <i
                          className={`custom-arrow fas fa-arrow-down ms-auto ${
                            openIndex === index ? "rotate" : ""
                          }`}
                        ></i>
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        openIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        {item.content}
                        <p className="mt-2">{item.extrapara}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="our-offerings-section" id="offerings">
        <div className="container">
          <div className="row align-items-center">
            <h5 className="section-subtitle">Our Offerings</h5>
            <h2 className="banner-title offerings-title mt-3">
              Knowledge. Wisdom. Wealth.
            </h2> */}

      {/* <h3 className="section-title my-lg-3 my-4">
                  Private Markets Funds
                </h3> */}
      {/* <div className="row align-items-center my-lg-3 my-4">
              <div className="col-lg-9">
                <p className="para small-para">
                  We provide investors access to unique investment opportunities
                  that deliver superior risk-adjusted returns in today's
                  challenging markets. We have developed expertise across
                  alternative investment strategies with an eye on
                  sustainability, focusing on resilient sectors within the Asian
                  markets. Our investments provide growth capital and
                  infrastructure, resulting in a broader progressive impact
                  within the region.
                </p>
              </div> */}
      {/* <div className="col-lg-3">
                    <NavLink to="/" className="banner-btn blue-btn mt-0">
                      All funds
                      <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>
                  </div> */}
      {/* </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="offerings-div"> */}
      {/* <h6 className="section-subtitle">Investment Strategy</h6> */}

      {/* {offeringsItems.map((item, index) => (
                    <div key={index}> */}
      {/* Add key to the outermost element */}
      {/* <div className="strategy-title-div">
                        <h5>{item.strategy_title}</h5>{" "}
                      </div>
                      <div className="strategy-funds-div"> */}
      {/* Check if funds_list exists before mapping */}
      {/* {item.funds_list?.map((fund, fundIndex) => (
                          <div className="funds-container" key={fundIndex}> */}
      {/* Add key here */}
      {/* <NavLink to={fund.link} className="mt-2">
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
      </section> */}

      <section className="sticky-contact-section sim-bg-ch">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h4 className="section-title">
                Understand more about Piper Serica Angel Fund
              </h4>
            </div>

            <div className="col-lg-4 mt-lg-0 mt-3">
              <NavLink
                to="/private-market/piper-serica-angel-fund"
                className="banner-btn blue-btn mt-0"
                id="cat1-angel-fund"
              >
                View Fund
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="startup-news-section">
        <CompanyPortfolio />
      </section>

      <section className="py-5 mb-5">
        <ArticleSection />
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
                  If you are a founder or entrepreneur seeking funding, we would
                  love to hear about your vision. Reach out to us to explore
                  investment opportunities, and our team will connect with you
                  soon.
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

export default Startup;
