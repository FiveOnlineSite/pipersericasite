import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]); // Dependency on location ensures it runs whenever the route changes

  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-2 col-12">
            <div className="d-flex flex-column align-items-lg-center align-items-start ps-lg-0 ps-2">
              <NavLink className="navbar-brand" to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/footer-logo.png`}
                  alt="logo"
                  width={"100px"}
                  height="100%"
                />
              </NavLink>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-12 d-flex justify-content-lg-end justify-content-md-end justify-content-start mt-lg-0 mt-5">
            <div className="row">
              <div className="footer-links">
                <ul className="d-lg-flex d-md-flex d-block ps-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                    <NavLink className="nav-link" to="/public-market-funds">
                      Public Market Funds
                    </NavLink>
                  </li>
                  <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                    <NavLink className="nav-link" to="/private-market-funds">
                      Private Market Funds
                    </NavLink>
                  </li>
                  <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                    <NavLink className="nav-link" to="/our-impact">
                      Our Impact
                    </NavLink>
                  </li>
                  <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                    <NavLink className="nav-link" to="/news-and-more">
                      News & More
                    </NavLink>
                  </li>
                  <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                    <NavLink className="nav-link" to="/careers">
                      Careers
                    </NavLink>
                  </li>

                  <li className="nav-item mt-lg-0 mt-md-0 mt-3">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-lg-center align-items-start">
          <div className="col-lg-3 d-flex align-items-lg-center justify-content-lg-start">
            <div className="social-icons-div ps-lg-0 ps-2 mt-lg-0 mt-2">
              <NavLink
                to="https://www.linkedin.com/company/piper-serica-advisors-pvt-ltd/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </NavLink>
              <NavLink to="https://x.com/PiperSerica" target="_blank">
                <i class="fa-brands fa-x-twitter"></i>
              </NavLink>
              <NavLink
                to="https://www.youtube.com/@piperserica"
                target="_blank"
              >
                <i class="fa-brands fa-youtube"></i>
              </NavLink>
              <NavLink
                to="https://www.facebook.com/PiperSerica"
                target="_blank"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </NavLink>
              <NavLink
                to="https://www.instagram.com/pipersericaofficial/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink
                to="https://open.spotify.com/show/5qtn5uSgGhxVVqbJmWKflq"
                target="_blank"
              >
                <i class="fa-brands fa-spotify"></i>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-9 d-flex justify-content-end mt-4">
            <div className="row ps-lg-0 ps-2">
              <div className="col-lg-3">
                <div className="location-links mt-lg-0 mt-3">
                  <NavLink to="tel:022-66545370">
                    <i class="fa-solid fa-phone"></i> 022-66545370
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="location-links mt-lg-0 mt-3">
                  <NavLink to="mailto:contact@piperserica.com">
                    <i class="fa-solid fa-envelope"></i> contact@piperserica.com
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1">
                <div className="location-links mt-lg-0 mt-3">
                  <NavLink
                    to="https://maps.app.goo.gl/2pP2WxzAcmueuKmG8"
                    target="_blank"
                  >
                    <i class="fa-solid fa-location-dot"></i> A Wing, 905/906,
                    Marathon Innova Nextgen, Ganpatrao Kadam Marg, Opp-Peninsula
                    Corporate Park, Lower Parel, Mumbai – 400013
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="privacy-policy-row">
            <div className="footer-links ">
              <ul className="d-flex justify-content-lg-end justify-content-md-end justify-content-start ps-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/privacy-policy">
                    Privacy Policy
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/disclaimer">
                    Disclaimer
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/disclosure">
                    Disclosure
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
