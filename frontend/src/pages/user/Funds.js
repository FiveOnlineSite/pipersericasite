import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
import StickyContact from "../../components/StickyContact";
import CompanyPortfolio from "../../components/CompanyPortfolio";
import ArticleSection from "../../components/ArticleSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TestimonialVideoSection from "../../components/TestimonialVideo";
import axios from "axios";
import MetaTagComponent from "../../components/MetaTagComponent";

const Funds = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
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

  const [fundNumbers, setFundNumbers] = useState([]);

  useEffect(() => {
    const fetchFundNumbers = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        const fundName = "aif";

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
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/Angel Fund (AIF).jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                <h6 className="banner-subtitle">CAT-1 AIF</h6>
                <h1 className="banner-title">Piper Serica Angel Fund</h1>
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
                About Piper Serica Angel Fund
              </h6>
              <p className="para justify-para">
                Piper Serica Angel Fund, launched in 2022 with a ₹300 crore
                corpus, is a SEBI-registered Category 1 AIF. It invests in
                early-stage startups with proprietary deep tech or IP, focusing
                on Spacetech, AI, advanced electronics, semiconductor design,
                and fintech. The fund seeks startups with early product-market
                fit and significant customer value. The fund’s ticket size is up
                to ₹10 crore, with flexibility to co-invest or co-lead. With
                swift decision making, the fund follows a collaborative
                investment approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row">
                {/* <div className="col-lg-4">
                  <div className="facts-div">
                    <h2 className="facts-title">22</h2>
                    <h6 className="para">Companies</h6>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-4">
                  <div className="facts-div">
                    <h2 className="facts-title">INR 300 Cr</h2>
                    <h6 className="para">Fund Size</h6>
                  </div>
                </div> */}
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

      <TestimonialVideoSection />

      <section className="features-section funds-features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="feature-title-div">
                {/* <h6 className="section-subtitle mb-4">features</h6> */}
                <h3 className="section-title mb-lg-3 mb-4">Why This Fund</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="features-content-div">
                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para justify-para">
                    <strong>Value added partners:</strong> Our founders look at
                    us as value added partners beyond the financial capital that
                    we bring. We work with the founders to scale up the company
                    by helping build the organization, acquire customers and
                    help with further fund raises.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para justify-para">
                    <strong>Network:</strong> We believe that the biggest help
                    we bring to the founders is our extensive network that spans
                    many industries and skill sets. We have a very varied set of
                    LPs and through our public market funds we are connected
                    with some of the largest companies in the country.
                  </p>
                </div>

                <div className="single-feature">
                  <div>
                    <span></span>
                  </div>
                  <p className="para justify-para">
                    <strong>Founder first approach:</strong> We love to get in
                    the trenches with the founders and help the founders ride
                    through the tough times. Every start up faces tough
                    challenges. Our Founders always find us by their side as
                    they meet these challenges.
                  </p>
                </div>
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
                        onClick={() => toggleAccordion(index)}
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
                      <div className="accordion-body justify-para">
                        {item.content}
                        <p className="mt-2 justify-para">{item.extrapara}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

      {/* <section className="fund-info-section mb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="fund-title-div">
                <h6 className="section-subtitle mb-4">Insights</h6>
                <h3 className="section-title mb-lg-3 mb-4">Fund Information</h3>
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <div className="fund-content-div">
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Name of The Fund: </strong> Piper Serica Angel Fund
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Category: </strong> Category I AIF - Venture Capital
                    Fund - Angel Fund
                  </p>
                </div>

                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Address: </strong> A Wing, 905/906, Marathon Innova
                    Nextgen, Ganpatrao Kadam Marg, Opp-Peninsula Corporate Park,
                    Lower Parel, Mumbai – 400013
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Registration Number: </strong> IN/AIF1/21-22/1028
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Name of the investment manager: </strong> Piper
                    Serica Advisors Private Limited
                  </p>
                </div>
                <div className="single-fund">
                  <div>
                    <span></span>
                  </div>
                  <p className="para">
                    <strong>Address of the investment manager: </strong> A Wing,
                    905/906, Marathon Innova Nextgen, Ganpatrao Kadam Marg,
                    Opp-Peninsula Corporate Park, Lower Parel, Mumbai – 400013
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <StickyContact title="Want to know more about Piper Serica Angel Fund?" />
    </Layout>
  );
};

export default Funds;
