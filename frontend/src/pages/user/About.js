import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { NavLink, useLocation } from "react-router-dom";
import "../../../src/svg.css";
import "../../../src/target.css";
import "../../../src/arrows.css";
import "../../../src/rocket.css";
import "../../../src/dollar.css";
import GatewaySvg from "../../components/GatewaySvg";
import SvgComponent from "./svgcomponent";
import TargetSvg from "../../components/TargetSvg";
import UpArrowSvg from "../../components/UpArrowSvg";
import DollarSvg from "../../components/DollarSvg";
import RocketSvg from "../../components/RocketSvg";
import GatewayAnimation from "../../components/atoms/GatewayAnimation";
import VerticalTabs from "../../components/templates/VerticalTabs";

const About = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  // Toggle function for each accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const teamContent = [
    {
      image: "/images/team/abhay-agarwal-560x560.jpeg",
      name: "Abhay Agarwal",
      linkedin_url: "https://www.linkedin.com/in/abhay-agarwal-piper/",
      designation: "Founder & Fund Manager",
    },
    {
      image: "/images/team/rajni-560x560.jpeg",
      name: "Rajni Agarwal",
      linkedin_url: "https://www.linkedin.com/in/rajni-agarwal-99352218b/",
      designation: "Director, Research",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Ajay Modi",
      linkedin_url: "https://www.linkedin.com/in/ajmodi/",
      designation: "Director, Investments",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Rahul Chaudhari",
      linkedin_url: "https://www.linkedin.com/in/rahulchaudhari73/",
      designation: "Head - Ops & Compliance",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Hardik Dua",
      linkedin_url: "https://www.linkedin.com/in/hardik-dua/",
      designation: "Associate",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Satyadeep Singh",
      linkedin_url: "https://www.linkedin.com/in/thesatyadeepsingh/",
      designation: "Associate",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Preet Malde",
      linkedin_url: "https://www.linkedin.com/in/preet-malde-4a37991ba/",
      designation: "Analyst",
    },
    // {
    //   image: "/images/team/Ajay-modi-560x560.jpeg",
    //   name: "Mukund Agarwal",
    //   linkedin_url: "https://www.linkedin.com/in/mukundagarwal3/",
    //   designation: "Analyst",
    // },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Akshay Kadam",
      linkedin_url: "https://www.linkedin.com/in/akshay-kadam-98363525b/",
      designation: "Senior Manager - Investor Relations",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Anuja Mohare",
      linkedin_url: "https://www.linkedin.com/in/anuja-mohare-8a5150147/",
      designation: "Senior Manager - Operations",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Yash Gandhi",
      linkedin_url: "https://www.linkedin.com/in/yash-gandhi-28576a357/",
      designation: "Manager - Finance & Operations",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Rahul Mishra",
      linkedin_url: "https://www.linkedin.com/in/rahul-mishra02/",
      designation: "Manager - Operations & Client Servicing",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Vishal Kudtarkar",
      linkedin_url: "https://www.linkedin.com/in/vishal-kudtarkar-262273246/",
      designation: "Assistant Manager - Finance",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Shubham Kumbhar",
      linkedin_url: "https://www.linkedin.com/in/11shubhamk/",
      designation: "Manager - Marketing",
    },
    {
      image: "/images/team/Ajay-modi-560x560.jpeg",
      name: "Abhijeet Gaonkar",
      linkedin_url: "https://www.linkedin.com/in/abhijeet-gaonkar-446315339/",
      designation: "Senior Manager - Administration",
    },
  ];

  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the DOM to update before trying to scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay ensures the element is rendered
    }
  }, [hash, pathname]); // Re-run when pathname or hash changes

  const handleNavClick = (event, targetHash) => {
    if (hash === targetHash) {
      event.preventDefault(); // Prevent scrolling when already at the target section
    }
  };

  const [activeTab, setActiveTab] = useState("fifteen");
  // const [gifSources, setGifSources] = useState({
  //   four: "/images/history/Getway-of-India-2004-GIF (2).gif",
  //   fifteen: "/images/history/Target-2015-GIF.gif",
  //   nineteen: "/images/history/UpArrow-2019-GIF (1).gif",
  //   twenty: "/images/history/Dollar-2020-GIF (2).gif",
  //   "twenty-two": "/images/history/Rocket-2024-GIF.gif",
  // });

  // useEffect(() => {
  //   Object.values(gifSources).forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }, []);

  // const baseGifSources = {
  //   four: "/images/history/Getway-of-India-2004-GIF (2).gif",
  //   fifteen: "/images/history/Target-2015-GIF.gif",
  //   nineteen: "/images/history/UpArrow-2019-GIF (1).gif",
  //   twenty: "/images/history/Dollar-2020-GIF (2).gif",
  //   "twenty-two": "/images/history/Rocket-2024-GIF (1) (1).gif",
  // };

  // ✅ Initialize gifSources with timestamp only for the initial activeTab
  // const [gifSources, setGifSources] = useState(() => {
  //   const sourcesWithTimestamp = { ...baseGifSources };
  //   sourcesWithTimestamp[activeTab] = `${
  //     baseGifSources[activeTab]
  //   }?t=${Date.now()}`;
  //   return sourcesWithTimestamp;
  // });

  // ✅ On tab click, only update GIF if tab is different
  const handleTabClick = (tab, event) => {
    event.preventDefault();
    if (tab === activeTab) return;

    setActiveTab(tab);
    // setGifSources((prev) => ({
    //   ...prev,
    //   [tab]: `${baseGifSources[tab]}?t=${Date.now()}`,
    // }));
  };

  // // ✅ Preload all base GIFs once on mount
  // useEffect(() => {
  //   Object.values(baseGifSources).forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }, []);

  return (
    <Layout>
      <section className="banner-section" id="banner-div">
        <div className="row">
          <div className="banner-img-div">
            <video
              src={`${process.env.PUBLIC_URL}/videos/AboutPageVideo 2.mp4`}
              muted
              autoPlay
              loop
              alt="banner-img"
              playsInline
              preload="auto"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6> */}
                <h1 className="banner-title">About Piper Serica</h1>
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
      <section className="investment-journey-section">
        <div className="container">
          <h6 className="section-subtitle mb-4">
            Investing in future. Backing emerging companies.
          </h6>

          <p className="para justify-para">
            Piper Serica is a long-only active equity asset manager that employs
            various equity investment strategies in India. We manage multiple
            funds that invest in Indian listed companies for domestic and
            foreign individuals and institutions. We also manage a fund that
            invests in Indian startups that are building business models based
            on deep tech. We have been investing in Indian companies for over 30
            years and have a very solid understanding of how to succeed while
            investing in India navigating through various risks, most of them
            unique to India as an emerging market.
          </p>
          <p className="para justify-para">
            The funds that we manage cater to different risk-return profiles and
            objectives of our investors. We have an edge over our peers due to
            our deep research and disciplined approach to investing. Our
            research team is extensively trained in our proprietary research
            processes which we have developed and largely automated. To ensure
            skin in the game, our fund management team makes all their public
            and private investments through the funds managed by Piper Serica.
            We are a fund management company owned by our management team, with
            a majority stake held by women.
          </p>
          {/* <div className="row align-items-start"> */}
          {/* <div className="col-lg-5">
              <h2 className="section-title mt-5 journey-text">
                <i className="fa-solid fa-quote-left journey-left-quote"></i>
                We commit to being the <strong>lighthouse</strong> for our
                investors and clients across asset management, wealth
                management, and founder ecosystems.
                <i className="fa-solid fa-quote-right journey-right-quote"></i>
              </h2>
            </div> */}
          {/* <div className="col-lg-7"> */}
          {/* <NavLink
                to="#history-div"
                className="banner-btn blue-btn tabs-btn mt-lg-3 mt-5"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  const element = document.querySelector("#history-div");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                our history
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </section>
      <div id="history-section"></div>

      {/* HISTORY TABS SECTION START */}
      <VerticalTabs />
      {/* HISTORY TABS SECTION CLOSE */}

      <div id="purpose-section"></div>
      <section className="why-us-section vision-mission-section">
        <div className="container">
          <div className="desktop-row">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="why-us-div vision-mission-div vision-mission-div-one ">
                      {/* <div className="why-us-content">
                          <h2 className="banner-title why-content-main-title">
                            Vision
                          </h2>
                          <h6 className="read-more">
                            Read More <i className="fa-solid fa-plus"></i>
                          </h6>
                        </div> */}

                      <div className="why-content-para vision-mission-para why-content-para-one">
                        <h2 className="banner-title why-content-main-title">
                          Vision
                        </h2>
                        <p className="para why-para justify-para">
                          To be a highly respected long-only equity asset
                          management company offering multiple strategies that
                          cater to the diverse objectives of our investors.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="why-us-div vision-mission-div vision-mission-div-one">
                      {/* <div className="why-us-content">
                          <h2 className="banner-title why-content-main-title">
                            Mission
                          </h2>
                          <h6 className="read-more">
                            Read More <i className="fa-solid fa-plus"></i>
                          </h6>
                        </div> */}

                      <div className="why-content-para vision-mission-para why-content-para-one">
                        <h2 className="banner-title why-content-main-title">
                          Mission
                        </h2>
                        <p className="para why-para justify-para">
                          At Piper Serica, we empower investors to achieve their
                          financial goals through a diverse portfolio of
                          actively managed strategies. Committed to
                          transparency, rigorous analysis, and strategic asset
                          allocation, we balance growth and risk to deliver
                          consistent returns. Our mission extends beyond wealth
                          creation—we strive to foster financial literacy,
                          ensure long-term stability, and drive sustainable
                          economic progress. Through innovation and discipline,
                          we create enduring value for our investors and the
                          broader ecosystem.
                        </p>
                      </div>
                    </div>
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
                }`} // Conditionally apply the 'bordered' className
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
                      <h4 className="why-content-title">Vision</h4>
                      <p className="para why-para justify-para">
                        To be a highly respected long-only equity asset
                        management company offering multiple strategies that
                        cater to the diverse objectives of our investors.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  id="btn-one"
                  className={`accordion-button why-accordion-button ${
                    openAccordion === 0 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(0)}
                  aria-expanded={openAccordion === 0 ? "true" : "false"}
                  aria-controls="collapseOne"
                >
                  <h2
                    className={`accordion-header ${
                      openAccordion === 0 ? "d-none" : ""
                    }`}
                  >
                    Vision
                  </h2>
                  {openAccordion === 0 ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Accordion Item 2 */}
              <div
                className={`accordion-item why-accordion-item ${
                  openAccordion === 1 ? "bordered" : ""
                }`} // Conditionally apply the 'bordered' className
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
                      <h4 className="why-content-title">Mission</h4>
                      <p className="para why-para justify-para">
                        At Piper Serica, we empower investors to achieve their
                        financial goals through a diverse portfolio of actively
                        managed strategies. Committed to transparency, rigorous
                        analysis, and strategic asset allocation, we balance
                        growth and risk to deliver consistent returns. Our
                        mission extends beyond wealth creation—we strive to
                        foster financial literacy, ensure long-term stability,
                        and drive sustainable economic progress. Through
                        innovation and discipline, we create enduring value for
                        our investors and the broader ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  id="btn-one"
                  className={`accordion-button why-accordion-button ${
                    openAccordion === 1 ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(1)}
                  aria-expanded={openAccordion === 1 ? "true" : "false"}
                  aria-controls="collapseTwo"
                >
                  <h2
                    className={`accordion-header ${
                      openAccordion === 1 ? "d-none" : ""
                    }`}
                  >
                    Mission
                  </h2>
                  {openAccordion === 1 ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="philosophy-div"></div>
      <section className="philosophy-section">
        <div className="container">
          <h5 className="section-subtitle mb-5">our philosophy</h5>
          <div className="row image-row align-items-center">
            <div className="col-lg-12 order-lg-1 order-2">
              <h2 className="para mt-lg-0 justify-para">
                Our core philosophy is to benefit from long-term investment
                opportunities while ignoring market cycles. We like to identify
                and invest in companies that are leaders in emerging spaces led
                by a change in consumer behaviour, technology changes, and
                product innovations. Once we identify such companies, we like to
                stay invested as they create shareholder value while moving from
                small-cap to mid-cap and ultimately large-cap. We believe that
                companies like these—with great management, good corporate
                governance, financial discipline, and a shareholder-friendly
                approach—are quite rare and should not be looked at through the
                same valuation prism as the rest of the market. We like to
                interact with the management of our portfolio companies
                regularly to stay abreast of the trends shaping their industry
                and explore other investment opportunities. We believe that
                long-term investing requires deep knowledge and good
                temperament. Our team members are always curious to learn more,
                while at the same time tuning out noise. We see market
                volatility as an opportunity to increase our equity allocations
                rather than reduce them. We believe that conviction comes only
                from deep research and understanding of our portfolio companies.
              </h2>
            </div>
            {/* <div className="col-lg-6 order-lg-2 order-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund1.webp`}
                alt="philosophy-img"
                className="w-100"
              />
            </div> */}
          </div>

          {/* <div className="row mt-5 image-row">
            <div className="col-lg-6">
              <p className="">
                We manage and advise on a range of investment strategies and
                products which touch the lives of investors, communities,
                corporate borrowers, investee companies, and our people. We act
                as investment partners to a diverse set of investors, from
                pension funds and insurance companies to single-family offices.
                Some of our institutional investors or LPs manage funds on
                behalf of the state or the public. When we invest or make an
                investment recommendation, we ensure that our investment
                philosophy directs decision-making.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="para">
                Our fund investment strategies unlock unique opportunities,
                which deliver enhanced returns with capital preservation to our
                investors and positively impact our stakeholders, society, and
                the economy. Our clients’ advisory portfolios result from
                careful curation led by our experienced investment advisors, who
                constantly strive to allocate to investment opportunities that
                offer attractive risk-adjusted returns. Our advisors apply
                quantitative methods to monitor and manage portfolio risk and
                work closely with our clients to increase diversification
                without compromising returns.
              </p>
            </div>
          </div> */}

          {/* <div className="row mt-3 align-items-center">
            <div className="col-lg-6">
              <h2 className="para mt-lg-0">
                We like to interact with the management of our portfolio
                companies regularly to stay abreast of the trends shaping their
                industry and explore other investment opportunities. We believe
                that long term investing requires deep knowledge and good
                temperament. Our team members are always curious to learn more
                at the same time tune out noise. We see market volatility as an
                opportunity to increase our equity allocations rather than
                reduce them. We believe that conviction comes only from deep
                research and understanding of our portfolio companies.
              </h2>
            </div>

            <div className="col-lg-6 d-lg-block d-none">
              <img
                src={`${process.env.PUBLIC_URL}/images/banners/market-fund2.webp`}
                alt="philosophy-img"
                className="w-100"
              />
            </div>
          </div> */}
        </div>
      </section>
      <div id="note-section"></div>
      <section className="founders-note-section">
        <div className="container">
          <div className="row">
            <h6 className="section-subtitle pb-4">Founder’s note</h6>
            <div className="col-lg-11">
              {/* <h2 className="banner-title offerings-title founders-text px-5">
                <i className="fa-solid fa-quote-left founders-left-quote"></i>
                Our courage to go beyond conventions and constantly explore new
                possibilities has been one of our core strengths.
                <i className="fa-solid fa-quote-right founders-right-quote"></i>
              </h2> */}
            </div>
          </div>

          <div className="row align-items-center ">
            <div className="col-lg-5">
              <div className="founders-img-div pe-lg-5 pe-auto">
                <img
                  src={`${process.env.PUBLIC_URL}/images/team/abhay_agarwal_website_photo.jpg`}
                  className="w-100"
                  alt="founders-img"
                />
              </div>
            </div>
            <div className="col-lg-7 mt-lg-0 mt-4">
              <p className="para justify-para">
                Our journey began with a simple yet powerful vision: to create
                an investment company that not only delivers superior financial
                performance but also fosters innovation and positive economic
                impact. With decades of combined experience in public equities,
                asset management, and financial markets, our team is uniquely
                positioned to identify high-potential opportunities and create
                lasting value for our investors.
              </p>

              <p className="para justify-para">
                Our approach is rooted in discipline, transparency, and
                alignment of interests. We deploy a research-driven methodology,
                leveraging data insights and industry expertise to make informed
                investment decisions. Our portfolio is curated to ensure
                diversification, resilience, and adaptability in a dynamic
                market landscape.
              </p>

              <p className="para justify-para">
                At Piper Serica, we prioritize partnerships and long-term
                relationships. We work closely with industry experts to support
                strategic growth, risk management, and sustainable financial
                outcomes. Our commitment to responsible investing ensures that
                we not only seek financial returns but also contribute to
                broader societal and economic progress.
              </p>
              <p className="para justify-para">
                We are excited about the opportunities ahead and deeply
                appreciate the trust and confidence that our investors place in
                us. Together, we build a legacy of success, innovation, and
                enduring value.
              </p>

              <h6 className="founders-name">
                <em>- Abhay Agarwal, Founder & Fund Manager, Piper Serica</em>
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="teams-bg-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/banners/Team.jpg`}
          alt="team-bg"
          className="w-100"
        />
      </section>
      <div id="team-section"></div>
      <section className="teams-section">
        <div className="container">
          <h6 className="section-subtitle">Meet the team</h6>
          {/* <h2 className="section-title mt-lg-3 mt-4">The Driving Force</h2> */}
          {/* <div className="row mt-3 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="team-div"> */}
          {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/abhay-agarwal-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
          {/* <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Abhay Agarwal</h3>
                    <NavLink to="https://www.linkedin.com/in/abhay-agarwal-piper/">
                      <i className="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>

                  <h5 className="team-designation">Managing Director, CIO</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-0 mt-4">
              <div className="team-div"> */}
          {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/rajni-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
          {/* <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Rajni Agarwal</h3>
                    <NavLink to="https://www.linkedin.com/in/rajni-agarwal-99352218b/">
                      <i className="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>
                  <h5 className="team-designation">Director, Research</h5>
                </div>
              </div>
            </div> */}

          {/* <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-3 mt-4">
              <div className="team-div"> */}
          {/* <img
                  src={`${process.env.PUBLIC_URL}/images/team/Ajay-modi-560x560.jpeg`}
                  alt="team-img"
                  className="w-100"
                /> */}
          {/* <div className="team-content">
                  <div className="team-title-div">
                    <h3 className="section-title team-name">Ajay Modi</h3>
                    <NavLink to="https://www.linkedin.com/in/ajmodi/">
                      <i className="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>
                  <h5 className="team-designation">Director, Investments</h5>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row mb-5">
            {teamContent.map((team, index) => (
              <div className="col-xxl-3 col-xl-4 col-md-6 col-12" key={index}>
                <div className="team-div img-team-one">
                  {/* <img
                    src={`${process.env.PUBLIC_URL}${team.image}`}
                    alt="team-img"
                    className="w-100"
                  /> */}
                  <div className="team-content">
                    <div className="team-title-div">
                      <h3 className="section-title team-name">{team.name}</h3>
                      <NavLink to={team.linkedin_url} target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                      </NavLink>
                    </div>

                    <h5 className="section-subtitle small-txt">
                      {team.designation}
                    </h5>
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

export default About;
