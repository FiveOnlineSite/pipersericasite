import React from "react";
import Layout from "../../components/Layout";
import { Link, NavLink } from "react-router-dom";
import NewsSection from "../../components/NewsSection";

const BlogDetails = () => {
  return (
    <Layout>
      <section className="banner-section pb-0">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/blogdetail-banner.jpg`}
              alt="banner-img"
            />

            {/* <div className="banner-content-div">
              <div className="container">
                <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6>
                <h1 className="banner-title">Contact</h1>
                <p className="banner-para">
                  Piper Serica is a distinguished investment management firm
                  committed to delivering long-term value through meticulous
                  research, strategic asset allocation, and a disciplined
                  investment approach, catering to investors seeking sustainable
                  growth and financial security.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="blog-detail-section ">
        <div className="container">
          <div className="blog-detail-div">
            <NavLink
              to="/insights"
              className="back-div d-flex align-items-baseline"
            >
              <i class="fa-solid fa-arrow-left pe-3"></i>
              <p className="para small-para">BACK</p>
            </NavLink>
            <div className="news-content-div border-0">
              <h5>Investment Insights</h5>

              <h6 className="para mt-4">30.01.2025</h6>

              <h2 className="mt-5 section-title blog-detail-title">
                Equity Insight: Tech Titans at a Crossroads - The Growing Divide
                Between Meta and Microsoft
              </h2>

              <h4 className="news-blog para mt-3 mb-0">
                Drishtant Chakraberty
              </h4>
              <h4 className="news-blog para">
                Senior Associate, Investment Consulting, Lighthouse Canton
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-detail-para">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <p className="blog-para">
                <strong>
                  Investing in AI is one thing but actually driving meaningful
                  returns out of this investment is a completely different
                  challenge.
                </strong>
              </p>
              <p className="blog-para">
                <strong>
                  Last night's earnings report from Microsoft and Meta are a
                  testament to the above, with Microsoft struggling to justify
                  its large AI related spending bill on one hand and Meta
                  clearly showcasing its ability to leverage AI & ML to drive
                  revenues and earnings higher on the other hand.
                </strong>
              </p>
              <p className="blog-para">
                <strong>
                  With Wall Street having made a decisive shift from looking at
                  how much spending the mega-cap tech companies are doing on AI
                  to trying to get a sense of what kind of ROI will be generated
                  from these massive investments, the stock price reaction of
                  the two companies says it all (MSFT: -4% & META: +2%). Even
                  though Microsoft's earnings call started off with CEO Satya
                  Nadella emphasizing on how they are trying to unlock the full
                  ROI of AI, the Street seems to have developed the ability to
                  look through their marketing prowess and focus on what is
                  actually being delivered.
                </strong>
              </p>

              <h6 className="key-takeaways">
                <strong>Key takeaways from Microsoft's earnings :-</strong>
              </h6>

              <img
                src={`${process.env.PUBLIC_URL}/images/blog-detail.jpeg`}
                alt="key-takeaway"
                className="w-100"
              />

              <div className="d-flex align-items-baseline blog-para-div mt-5">
                <div>
                  <span></span>
                </div>

                <p className="blog-para">
                  <strong>
                    Azure growth failed to meet lofty expectations primarily due
                    to execution challenges on the non-AI side of the business:
                  </strong>
                  We see Microsoft's attempt to split Azure's growth between AI
                  and non-AI related workloads to be more of a marketing ploy to
                  highlight the benefits of their AI spending than anything else
                  as inherently Azure continues to be a cloud infrastructure
                  business in our opinion, where a broad based transition from
                  general purpose computing to advanced computing was bound to
                  happen. What clearly comes to light from last night's earnings
                  print is that while the wallet size / spend being allocated by
                  large scale enterprises is definitely growing, it is not
                  growing simultaneously across both AI and non-AI related
                  workloads as enterprises begin prioritizing the development of
                  AI related workloads at the expense of general computing
                  requirements.
                </p>
              </div>

              <div className="d-flex align-items-baseline blog-para-div">
                <div>
                  <span></span>
                </div>

                <p className="blog-para">
                  <strong>
                    Azure growth failed to meet lofty expectations primarily due
                    to execution challenges on the non-AI side of the business:
                  </strong>
                  We see Microsoft's attempt to split Azure's growth between AI
                  and non-AI related workloads to be more of a marketing ploy to
                  highlight the benefits of their AI spending than anything else
                  as inherently Azure continues to be a cloud infrastructure
                  business in our opinion, where a broad based transition from
                  general purpose computing to advanced computing was bound to
                  happen. What clearly comes to light from last night's earnings
                  print is that while the wallet size / spend being allocated by
                  large scale enterprises is definitely growing, it is not
                  growing simultaneously across both AI and non-AI related
                  workloads as enterprises begin prioritizing the development of
                  AI related workloads at the expense of general computing
                  requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-1 mt-lg-0 mt-5">
              <div className="social-media-blog">
                <Link to="https://www.linkedin.com/company/piper-serica-advisors-pvt-ltd">
                  <i class="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="https://x.com/PiperSerica">
                  <i class="fa-brands fa-square-twitter"></i>
                </Link>
                <Link to="https://www.youtube.com/@piperserica">
                  <i class="fa-brands fa-square-youtube"></i>
                </Link>
                <Link to="https://www.facebook.com/PiperSerica">
                  <i class="fa-brands fa-square-facebook"></i>
                </Link>
                <Link to="https://www.instagram.com/pipersericaofficial/">
                  <i class="fa-brands fa-square-instagram"></i>
                </Link>
                <Link to="https://open.spotify.com/show/5qtn5uSgGhxVVqbJmWKflq">
                  <i class="fa-brands fa-spotify"></i>
                </Link>
              </div>

              <div className="blog-form-div">
                <h4 className="section-title subscribe-text">
                  {" "}
                  Subscribe to our Insights & Updates
                </h4>

                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div class="mb-3">
                        <label for="name" class="form-label">
                          Name*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          // placeholder="eg: john"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="mb-3">
                        <label for="phone" class="form-label">
                          Phone Number*
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          // placeholder="0000000000"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="mb-3">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          // placeholder="eg: johndoe@xyz.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="mb-3">
                        <label for="message" class="form-label">
                          Message <span>(optional)</span>
                        </label>
                        <textarea
                          type="text"
                          class="form-control"
                          id="message"
                          rows={"4"}
                          // placeholder="start typing....."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 d-block">
                      <div className="d-block">
                        <NavLink
                          to="/"
                          className="banner-btn blue-btn subscribe-blog-btn"
                        >
                          Subscribe
                        </NavLink>
                      </div>
                    </div>
                    <div className="col-lg-12 d-block w-100">
                      <p className="para subscribe-para mt-3 d-block">
                        <i>
                          *By submitting the contact form, you consent to all
                          data in the form being used in accordance with
                          <a href="#"> Piper Serics's data privacy policy</a>
                        </i>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-detail-news">
        <NewsSection />
      </section>
    </Layout>
  );
};

export default BlogDetails;
