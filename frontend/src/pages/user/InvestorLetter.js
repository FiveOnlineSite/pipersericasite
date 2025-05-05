import React, { useState } from "react";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";

const InvestorLetter = () => {
  const letters = [
    {
      date: "January 2025",
      filepath: "/docs/Piper-Serica-Investor-Letter-January-2025-new.pdf",
    },

    {
      date: "January 2024",
      filepath:
        "/docs/2024-1-piper-serica-investor-letter-january-2024-min.pdf",
    },

    {
      date: "January 2023",
      filepath:
        "/docs/2023-1-piper-serica-investor-letter-january-2023-min.pdf",
    },

    {
      date: "January 2022",
      filepath: "/docs/2022-1-piper-serica-investor-letter-jan-2022-min.pdf",
    },

    {
      date: "January 2021",
      filepath: "/docs/2021-1-piper-serica-investor-letter-jan-min.pdf",
    },

    {
      date: "January 2020",
      filepath: "/docs/2020-1-jan2020-min.pdf",
    },

    {
      date: "February 2022",
      filepath: "/docs/2022-2-piper-serica-investor-letter-feb-2022-min.pdf",
    },

    {
      date: "February 2021",
      filepath: "/docs/2021-2-feb2021-min.pdf",
    },

    {
      date: "February 2020",
      filepath: "/docs/2020-2-feb2020-min.pdf",
    },

    // {
    //   date: "March 2024",
    //   filepath: "/docs/Piper-Serica-Portfolio-Note-Mar-2024.pdf",
    // },

    {
      date: "March 2022",
      filepath: "/docs/2022-3-piper-serica-investor-letter-march-2022-min.pdf",
    },

    {
      date: "March 2021",
      filepath: "/docs/2021-3-mar2021-min.pdf",
    },
    {
      date: "March 2020",
      filepath: "/docs/2020-3-mar2020-min.pdf",
    },
    {
      date: "April 2022",
      filepath: "/docs/2022-4-piper-serica-investor-letter-april-2022-min.pdf",
    },
    {
      date: "April 2021",
      filepath: "/docs/2021-4-april2021-min.pdf",
    },
    {
      date: "April 2020",
      filepath: "/docs/2020-4-april2020-min.pdf",
    },

    {
      date: "May 2022",
      filepath: "/docs/2022-5-piper-serica-investor-letter-may-2022-min.pdf",
    },
    {
      date: "May 2021",

      filepath: "/docs/2021-5-may2021-min.pdf",
    },
    {
      date: "May 2020",

      filepath: "/docs/2020-5-may2020-min.pdf",
    },
    {
      date: "June 2022",

      filepath: "/docs/2022-6-piper-serica-investor-letter-june-2022-min.pdf",
    },
    {
      date: "June 2021",

      filepath: "/docs/2021-6-june2021-min.pdf",
    },
    {
      date: "July 2023",

      filepath: "/docs/2023-7-piper-serica-investor-letter-july-2023-1-min.pdf",
    },
    {
      date: "July 2022",

      filepath: "/docs/2022-7-piper-serica-investor-letter-july-2022-min.pdf",
    },
    {
      date: "July 2021",

      filepath: "/docs/2021-7-piper-serica-investor-letter-july-2021-min.pdf",
    },
    {
      date: "August 2022",

      filepath: "/docs/2022-8-piper-serica-investor-letter-august-2022-min.pdf",
    },
    {
      date: "August 2021",

      filepath: "/docs/2021-8-piper-serica-investor-letter-august-2021-min.pdf",
    },
    {
      date: "August 2020",

      filepath: "/docs/2020-8-aug2020-min.pdf",
    },
    {
      date: "August 2019",

      filepath: "/docs/2019-8-aug2019-min.pdf",
    },
    {
      date: "September 2023",

      filepath: "/docs/2023-9-investor-letter-min.pdf",
    },
    {
      date: "September 2022",

      filepath: "/docs/2022-9-piper-serica-investor-letter-sep-2022-min.pdf",
    },
    {
      date: "September 2021",

      filepath:
        "/docs/2021-9-piper-serica-investor-letter-september-2021-min.pdf",
    },
    {
      date: "October 2024",

      filepath: "/docs/Piper-Serica-Investor-Letter-October-2024-new.pdf",
    },
    {
      date: "October 2022",

      filepath: "/docs/2022-10-piper-serica-investor-letter-oct-2022-min.pdf",
    },
    {
      date: "October 2021",
      filepath: "/docs/Piper-Serica-Investor-Letter-October-2021.pdf",
    },
    {
      date: "October 2020",
      filepath: "/docs/2020-10-oct2020-min.pdf",
    },
    {
      date: "October 2019",
      filepath: "/docs/2019-10-oct2019-min.pdf",
    },
    {
      date: "November 2022",

      filepath:
        "/docs/2022-11-piper-serica-investor-letter-november-2022-min.pdf",
    },
    {
      date: "November 2021",

      filepath:
        "/docs/2021-11-piper-serica-investor-letter-november-2021-min.pdf",
    },
    {
      date: "November 2020",

      filepath: "/docs/2020-11-nov2020-min.pdf",
    },
    {
      date: "November 2019",

      filepath: "/docs/2019-11-nov2019-min.pdf",
    },
    // {
    //   date: "November 2018",

    //   filepath: "/docs/2018-11-nov2018-min.pdf",
    // },
    {
      date: "December 2022",

      filepath: "/docs/2022-12-piper-serica-investor-letter-dec-2022-min.pdf",
    },
    {
      date: "December 2021",

      filepath:
        "/docs/2021-12-piper-serica-investor-letter-december-2021-min.pdf",
    },
    {
      date: "December 2020",

      filepath: "/docs/2020-12-dec2020-min.pdf",
    },
    {
      date: "December 2019",

      filepath: "/docs/Piper-Serica-PMS-December-2019-Letter.pdf",
    },
    {
      date: "December 2016",

      filepath: "/docs/Piper-Serica-Investor-Letter-December-2016.pdf",
    },
    {
      date: "November 2018",

      filepath: "/docs/Piper-Serica-Investor-Letter-November-2018.pdf",
    },
    {
      date: "July 2019",

      filepath: "/docs/Piper-Serica-Investor-Letter-July2019.pdf",
    },
    {
      date: "June 2020",

      filepath: "/docs/Piper-Serica-PMS-Monthly-Letter-June-2020.pdf",
    },
    {
      date: "July 2020",

      filepath: "/docs/Piper-Serica-Investor Letter-July-2020.pdf",
    },
    {
      date: "September 2020",

      filepath: "/docs/Piper-Serica-PMS-Monthly-Letter-September-2020.pdf",
    },
    {
      date: "April 2024",

      filepath: "/docs/Piper-Serica-Investor-Letter-April-2024.pdf",
    },
    {
      date: "July 2024",

      filepath: "/docs/Piper-Serica-Investor-Letter-July-2024-new.pdf",
    },
  ];

  // Function to parse dates properly for sorting
  const parseDate = (dateStr) => {
    const [month, year] = dateStr.split(" ");
    return new Date(`${month} 1, ${year}`);
  };

  // Sort letters by date (latest first)
  const sortedLetters = [...letters].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const [selectedFilter, setSelectedFilter] = useState("");

  // Function to filter by Financial Year (April–March)
  const filteredLetters = sortedLetters.filter((letter) => {
    if (!selectedFilter) return true; // Show all if no filter is selected

    // Extract financial year start and end
    const [startYear, endYear] = selectedFilter.split("-").map(Number);

    // Define financial year start (April YYYY) and end (March YYYY+1)
    const financialYearStart = new Date(`April 1, ${startYear}`);
    const financialYearEnd = new Date(`March 31, ${endYear}`);

    // Get letter date
    const letterDate = parseDate(letter.date);

    // Check if the letter falls within the financial year range
    return letterDate >= financialYearStart && letterDate <= financialYearEnd;
  });

  const handleClearFilters = () => {
    setSelectedFilter("");
  };

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/Investor Letters.jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">Performance Review</h6> */}
                <h1 className="banner-title"> Investor Letters</h1>
                {/* <p className="banner-para">
                  Investor letters are formal communications that provide
                  shareholders with insights into a company's financial
                  performance, strategic direction, and future outlook.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-letters-section">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-6 mt-lg-0 mt-0 ">
              <div className="industries-filter-div">
                <select
                  className="form-select"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="">All Years</option>
                  <option value="2024-2025">2024-2025</option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2022-2023">2022-2023</option>
                  <option value="2021-2022">2021-2022</option>
                  <option value="2020-2021">2020-2021</option>
                  <option value="2019-2020">2019-2020</option>
                  <option value="2018-2019">2018-2019</option>
                  <option value="2017-2018">2017-2018</option>
                  <option value="2016-2017">2016-2017</option>
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
          <div className="row">
            {filteredLetters.map((letter, index) => (
              <div className="col-lg-3 col-md-6 col-12" key={index}>
                <NavLink
                  to={`${process.env.PUBLIC_URL}${letter.filepath}`}
                  target="_blank"
                >
                  <div className="letter-div mb-4">
                    <h5 className="section-subtitle">{letter.date}</h5>
                    <h3>
                      Piper Serica Leader Portfolio Strategy {letter.date}
                    </h3>
                    {/* <div className="letter-options py-3 pt-5">
                    
                      <i class="fa-solid fa-eye"></i>
                   
                    <a href={letter.filepath} download>
                      <i className="fa-solid fa-cloud-arrow-down"></i>
                    </a>
                  </div> */}
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

export default InvestorLetter;
