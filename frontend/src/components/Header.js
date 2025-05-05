// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import TopBar from "../components/TopBar";

// const Header = () => {
//   const [isFixed, setIsFixed] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const location = useLocation(); // Get current route
//   useEffect(() => {
//     const handleScroll = () => {
//       if (location.pathname === "/") {
//         setIsFixed(false); // Keep absolute on home page
//       } else {
//         setIsFixed(window.scrollY > 50);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location.pathname]);

//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const sectionId = hash.replace("#", ""); // Remove '#' from hash
//       setTimeout(() => {
//         // Delay ensures React renders the section first
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 100);
//     }
//   }, [hash]); // Runs whenever hash changes

//   const handleScrollToSection = (event, sectionId) => {
//     event.preventDefault(); // Prevent default anchor behavior

//     if (window.location.pathname === "/about") {
//       // If already on the about page, update hash manually
//       window.history.pushState(null, "", `/about#${sectionId}`);

//       // Scroll smoothly
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     } else {
//       // Navigate to About page with hash
//       window.location.href = `/about#${sectionId}`;
//     }
//   };

//   return (
//     <div>
//       {/* Desktop Navbar */}
//       <nav
//         className={`navbar navbar-expand-lg desktop-navbar ${
//           location.pathname === "/"
//             ? "absolute-navbar"
//             : isFixed
//             ? "fixed-navbar"
//             : ""
//         }`}
//       >
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/Piper-Serica-logo-1.png`}
//               alt="logo"
//               width={"100px"}
//               height="100%"
//             />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasNavbar"
//             aria-controls="offcanvasNavbar"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav mb-2 mb-lg-0 ">
//               <li className="nav-item dropdown desktop-dropdown">
//                 <NavLink
//                   className="nav-link dropdown-toggle"
//                   to="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   About
//                 </NavLink>
//                 <ul className="dropdown-menu desktop-dropdown-menu">
//                   <li>
//                     <NavLink className="dropdown-item" to="/about">
//                       About Us
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="/about#history-section"
//                       onClick={(e) =>
//                         handleScrollToSection(e, "history-section")
//                       }
//                     >
//                       History
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="/about#purpose-section"
//                       onClick={(e) =>
//                         handleScrollToSection(e, "purpose-section")
//                       }
//                     >
//                       Purpose
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="/about#philosophy-div"
//                       onClick={(e) =>
//                         handleScrollToSection(e, "philosophy-div")
//                       }
//                     >
//                       Philosophy
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="/about#note-section"
//                       onClick={(e) => handleScrollToSection(e, "note-section")}
//                     >
//                       Founder's Note
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="/about#team-section"
//                       onClick={(e) => handleScrollToSection(e, "team-section")}
//                     >
//                       Team
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item dropdown desktop-dropdown">
//                 <NavLink
//                   className="nav-link dropdown-toggle"
//                   to="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Our Services
//                 </NavLink>
//                 <ul className="dropdown-menu desktop-dropdown-menu">
//                   <li>
//                     <NavLink className="dropdown-item" to="/public-market">
//                       Public Market
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/private-market">
//                       Private Market
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/our-impact">
//                   Our Impact
//                 </NavLink>
//               </li>

//               <li className="nav-item dropdown desktop-dropdown">
//                 <NavLink
//                   className="nav-link dropdown-toggle"
//                   to="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Insights
//                 </NavLink>
//                 <ul className="dropdown-menu desktop-dropdown-menu">
//                   <li>
//                     <NavLink className="dropdown-item" to="/insights">
//                       Blogs
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/news-article">
//                       News Articles
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/">
//                       Videos
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/careers">
//                   Careers
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact">
//                   Contact
//                 </NavLink>
//               </li>
//               <li className="nav-item login-btn">
//                 <NavLink
//                   className="nav-link"
//                   to="https://piperserica.com/"
//                   target="_blank"
//                 >
//                   Login <i className="fa-solid fa-arrow-right"></i>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <nav className="navbar fixed-top mobile-navbar">
//         <div className="container-fluid">
//           <NavLink className="navbar-brand" to="/">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/Piper-Serica-logo-1.png`}
//               alt="logo"
//               width={"100px"}
//               height="100%"
//             />
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasNavbar"
//             aria-controls="offcanvasNavbar"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="offcanvas offcanvas-end"
//             tabindex="-1"
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//           >
//             <div className="offcanvas-header">
//               <NavLink className="navbar-brand" to="/">
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/Piper-Serica-logo-1.png`}
//                   alt="logo"
//                   width={"100px"}
//                   height="100%"
//                 />
//               </NavLink>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="offcanvas-body">
//               <TopBar />
//               <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//                 <li className="nav-item dropdown">
//                   <NavLink
//                     className="nav-link dropdown-toggle"
//                     to="/"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     About
//                   </NavLink>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <NavLink className="dropdown-item" to="/about">
//                         About Us
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         className="dropdown-item"
//                         to="/about#history-section"
//                       >
//                         History
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         className="dropdown-item"
//                         to="/about#purpose-section"
//                       >
//                         Purpose
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         className="dropdown-item"
//                         to="/about#philosophy-div"
//                       >
//                         Philosophy
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         className="dropdown-item"
//                         to="/about#note-section"
//                       >
//                         Founder’s Note
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         className="dropdown-item"
//                         to="/about#team-section"
//                       >
//                         Team
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <NavLink
//                     className="nav-link dropdown-toggle"
//                     to="/"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Our Services
//                   </NavLink>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <NavLink className="dropdown-item" to="/public-market">
//                         Public Market
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink className="dropdown-item" to="/private-market">
//                         Private Market
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink
//                     className="nav-link"
//                     to="/our-impact"
//                     // onClick={closeOffcanvas}
//                   >
//                     Our Impact
//                   </NavLink>
//                 </li>

//                 <li className="nav-item dropdown">
//                   <NavLink
//                     className="nav-link dropdown-toggle"
//                     to="/"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Insights
//                   </NavLink>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <NavLink className="dropdown-item" to="/insights">
//                         Blogs
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink className="dropdown-item" to="/news-article">
//                         News Article
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink className="dropdown-item" to="/">
//                         Videos
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </li>

//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/careers">
//                     Careers
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/contact">
//                     Contact
//                   </NavLink>
//                 </li>
//                 <li className="nav-item login-btn">
//                   <NavLink
//                     className="nav-link"
//                     to="https://piperserica.com/"
//                     target="_blank"
//                   >
//                     Login
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current route
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (location.hash) {
      setHash(location.hash);
    }
  }, [location]);

  useEffect(() => {
    if (hash) {
      const sectionId = hash.replace("#", "");

      const adjustScroll = () => {
        const section = document.getElementById(sectionId);
        const headerHeight =
          document.querySelector(".fixed-navbar")?.offsetHeight || 80; // Adjust header height dynamically

        if (section) {
          const sectionPosition =
            section.getBoundingClientRect().top +
            window.scrollY -
            headerHeight -
            20;

          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
      };

      if (location.state?.prevPath !== "/about") {
        setTimeout(adjustScroll, 300); // Delay to allow page load
      } else {
        adjustScroll();
      }
    }
  }, [hash, location]);

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();

    // Close the menu immediately when a link is clicked
    setIsMenuOpen(false);

    if (location.pathname !== "/about") {
      navigate(`/about#${sectionId}`, {
        state: { prevPath: location.pathname },
      });
    } else {
      window.history.pushState(null, "", `/about#${sectionId}`);
      const section = document.getElementById(sectionId);
      const headerHeight =
        document.querySelector(".fixed-navbar")?.offsetHeight || 80;

      if (section) {
        const sectionPosition =
          section.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          20;

        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(pathname !== "/" && window.scrollY > 50);
    };

    if (pathname !== "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // useEffect(() => {
  //   if (hash) {
  //     const sectionId = hash.replace("#", "");
  //     setTimeout(() => {
  //       const element = document.getElementById(sectionId);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }
  //     }, 100);
  //   }
  // }, [hash]);

  // const handleScrollToSection = (event, sectionId) => {
  //   event.preventDefault();
  //   setIsMenuOpen(false);

  //   if (pathname === "/about") {
  //     window.history.pushState(null, "", `/about#${sectionId}`);

  //     const section = document.getElementById(sectionId);
  //     const headerHeight =
  //       document.querySelector(".fixed-navbar")?.offsetHeight || 80;

  //     if (section) {
  //       const sectionPosition =
  //         section.getBoundingClientRect().top +
  //         window.scrollY -
  //         headerHeight -
  //         20;
  //       window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  //     }
  //   } else {
  //     window.location.href = `/about#${sectionId}`;
  //   }
  // };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav
        className={`navbar navbar-expand-lg desktop-navbar ${
          location.pathname === "/"
            ? "absolute-navbar"
            : isFixed
            ? "fixed-navbar"
            : ""
        }`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/Piper-Serica-logo-1.png`}
              alt="logo"
              width={"100px"}
              height="100%"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item dropdown desktop-dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </NavLink>
                <ul className="dropdown-menu desktop-dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={`${process.env.PUBLIC_URL}/about#banner-div`}
                      onClick={(e) => handleScrollToSection(e, "banner-div")}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={`${process.env.PUBLIC_URL}/about#history-section`}
                      onClick={(e) =>
                        handleScrollToSection(e, "history-section")
                      }
                    >
                      History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={`${process.env.PUBLIC_URL}/about#purpose-section`}
                      onClick={(e) =>
                        handleScrollToSection(e, "purpose-section")
                      }
                    >
                      Purpose
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={`${process.env.PUBLIC_URL}/about#philosophy-div`}
                      onClick={(e) =>
                        handleScrollToSection(e, "philosophy-div")
                      }
                    >
                      Philosophy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={`${process.env.PUBLIC_URL}/about#note-section`}
                      onClick={(e) => handleScrollToSection(e, "note-section")}
                    >
                      Founder's Note
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={`${process.env.PUBLIC_URL}/about#team-section`}
                      onClick={(e) => handleScrollToSection(e, "team-section")}
                    >
                      Team
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown desktop-dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </NavLink>
                <ul className="dropdown-menu desktop-dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/public-market-funds"
                    >
                      Public Market Funds
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/private-market-funds"
                    >
                      Private Market Funds
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/our-impact">
                  Our impact
                </NavLink>
              </li>
              <li className="nav-item dropdown desktop-dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Insights
                </NavLink>
                <ul className="dropdown-menu desktop-dropdown-menu">
                  {/* <li>
                    <NavLink className="dropdown-item" to="/insights">
                      Blogs
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/investor-letters"
                      id="investor-letters"
                    >
                      Investor Letters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/news-and-more">
                      News & More
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink className="dropdown-item" to="/videos">
                      Videos
                    </NavLink>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/careers" id="careers">
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown login-btn">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://faconnect.kotak.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PMS Kotak
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://eclientreporting.nuvamaassetservices.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PMS Nuvama
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://portal.piperserica.vc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Angel Fund
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar fixed-top mobile-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/Piper-Serica-logo-1.png`}
              alt="logo"
              width={"100px"}
              height="100%"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-end ${isMenuOpen ? "show" : ""}`}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <NavLink className="navbar-brand" to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Piper-Serica-logo-1.png`}
                  alt="logo"
                  width={"100px"}
                  height="100%"
                />
              </NavLink>
              <button
                type="button"
                className="btn-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div
                className={`mobile-top-bar 
               ${location.pathname === "/" ? "d-none" : "d-block"}`}
              >
                <TopBar
                  className={`mobile-top-bar 
               ${location.pathname === "/" ? "d-none" : "d-block"}`}
                />
              </div>

              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}/about#banner-div`}
                        onClick={(e) => handleScrollToSection(e, "banner-div")}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}/about#history-section`}
                        onClick={(e) =>
                          handleScrollToSection(e, "history-section")
                        }
                      >
                        History
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}/about#purpose-section`}
                        onClick={(e) =>
                          handleScrollToSection(e, "purpose-section")
                        }
                      >
                        Purpose
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}/about#philosophy-div`}
                        onClick={(e) =>
                          handleScrollToSection(e, "philosophy-div")
                        }
                      >
                        Philosophy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}/about#note-section`}
                        onClick={(e) =>
                          handleScrollToSection(e, "note-section")
                        }
                      >
                        Founder’s Note
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`${process.env.PUBLIC_URL}/about#team-section`}
                        onClick={(e) =>
                          handleScrollToSection(e, "team-section")
                        }
                      >
                        Team
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Services
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/public-market-funds"
                      >
                        Public Market Funds
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/private-market-funds"
                      >
                        Private Market Funds
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/our-impact"
                    // onClick={closeOffcanvas}
                  >
                    Our Impact
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Insights
                  </NavLink>
                  <ul className="dropdown-menu">
                    {/* <li>
                      <NavLink className="dropdown-item" to="/insights">
                        Blogs
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/investor-letters"
                        id="investor-letters"
                      >
                        Investor Letters
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/news-and-more">
                        News & More
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/careers"
                    id="careers"
                    // onClick={closeOffcanvas}
                  >
                    Career
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    // onClick={closeOffcanvas}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item dropdown login-btn">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://faconnect.kotak.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        PMS Kotak
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://eclientreporting.nuvamaassetservices.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        PMS Nuvama
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://portal.piperserica.vc/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Angel Fund
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
