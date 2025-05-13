import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NewsSlider from "./NewsSlider";
import axios from "axios";
import AngelSlider from "./AngelSlider";

const ArticleSection = () => {
  const articleSettings = {
    centerMode: false, // Enable center mode
    slidesToShow: 3, // Number of slides to show
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const articleItems = [
  //   {
  //     news_img: "/images/banners/news1.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  //   {
  //     news_img: "/images/banners/news2.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  //   {
  //     news_img: "/images/banners/news1.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  //   {
  //     news_img: "/images/banners/news2.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  //   {
  //     news_img: "/images/banners/news1.png",
  //     news_type: "Venture Debt",
  //     news_subtitle: "Investments Insights",
  //     news_title:
  //       "Equity Insight: Tech Titans at a Crossroads - The Growing Divide Between Meta and Microsoft",
  //     date: "January 30, 2025",
  //   },
  // ];

  const articleItems = [
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
      date: "April 02, 2025",
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
      date: "January 30, 2025",
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
    // {
    //   // insight_type: "Investments Insights",
    //   news_img: "/images/news/1630600049443.webp",
    //   content_type: "Angel Fund",
    //   news_title:"Space-tech firm Astrogate Labs raises $1.3 million in pre-series round led by Piper Serica",
    //   date: "april 1, 2025",
    //   link: "https://economictimes.indiatimes.com/tech/funding/space-tech-firm-astrogate-labs-raises-1-3-million-in-pre-series-round-led-by-piper-serica/articleshow/118601900.cms",
    // },
    // {
    //   news_img: "/images/news/imUkA8Iz2IpmzaEI3mcm.webp",
    //   // insight_type: "News and More",
    //   content_type: "Angel Fund",
    //   news_title: "Astrogate Labs raises $1.3 Mn led by Piper Serica",
    //   date: "January 30, 2025",
    //   link: "https://entrackr.com/snippets/astrogate-labs-raises-13-mn-led-by-piper-serica-8760743",
    // },
    // {
    //   news_img: "/images/news/IMG_0039-760x570.jpg",
    //   // insight_type: "Company Updates",
    //   content_type: "Angel Fund",
    //   news_title:
    //     "Spacetech Startup Astrogate Bags Funding To Develop Laser Communication Terminals",
    //   date: "april 4, 2025",
    //   link: "https://inc42.com/buzz/spacetech-startup-astrogate-bags-funding-to-develop-laser-communication-terminals",
    // },
    // {
    //   // insight_type: "Angel Fund",
    //   news_img:
    //     "/images/news/Rupeeflow_founders_20250210224601_original_image_24.webp",
    //   content_type: "Angel Fund",
    //   news_title: "Rupeeflo Raises $1 Mn From Piper Serica Angel Fund",
    //   date: "January 30, 2025",
    //   link: "https://www.bwdisrupt.com/article/rupeeflo-raises-1-mn-from-piper-serica-angel-fund-547569",
    // },
    // {
    //   news_img:
    //     "/images/news/Rupeeflow_founders_20250210224601_original_image_24.webp",
    //   // insight_type: "Angel Fund",
    //   content_type: "Angel Fund",
    //   news_title: "Rupeeflo raises $1 Mn from Piper Serica",
    //   date: "January 30, 2025",
    //   link: "https://entrackr.com/snippets/rupeeflo-raises-1-mn-from-piper-serica-8706125",
    // },
    // {
    //   news_img:
    //     "/images/news/rupeeflo-raised-1-million-in-pre-seed-round-led-by-piper-serica-angel-fund.webp",
    //   // insight_type: "Company Updates",
    //   content_type: "Angel Fund",
    //   news_title:
    //     "Rupeeflo raised $1 million in pre-seed round led by Piper Serica Angel Fund",
    //   date: "January 30, 2025",
    //   link: "https://economictimes.indiatimes.com/tech/funding/rupeeflo-raised-1-million-in-pre-seed-round-led-by-piper-serica-angel-fund/articleshow/118119714.cms",
    // },
    // {
    //   // insight_type: "Investments Insights",
    //   news_img: "/images/news/maxresdefault (1).jpg",
    //   content_type: "Videos",
    //   news_title:
    //     "Piper Serica x Astrogate Labs: The Next Big Leap in Space Tech",
    //   date: "January 10, 2025",
    //   link: "https://youtu.be/XykqfFfr67c",
    // },
    // {
    //   news_img: "/images/news/maxresdefault.jpg",
    //   // insight_type: "News and More",
    //   content_type: "Videos",
    //   news_title: "Piper Serica x Rupeeflo: Fintech Revolution Unlocked!",
    //   date: "January 20, 2025",
    //   link: "https://youtu.be/h5ys474Z460",
    // },
    // {
    //   news_img: "/images/news/V5DCqNsUIO8-HD.jpg",
    //   // insight_type: "Company Updates",
    //   content_type: "Videos",
    //   news_title:
    //     "The Next 10 Years of India: A Roadmap for Long-Term Investors",
    //   date: "January 3, 2025",
    //   link: "https://youtu.be/V5DCqNsUIO8",
    // },
    // {
    //   // insight_type: "Investments Insights",
    //   news_img: "/images/news/maxresdefault (2).jpg",
    //   content_type: "Videos",
    //   news_title: "Auto Industry Shake-Up: Opportunities Before Budget 2025",
    //   date: "January 22, 2025",
    //   link: "https://youtu.be/05Crr5bFAlM",
    // },
    // {
    //   news_img: "/images/news/maxresdefault (3).jpg",
    //   // insight_type: "News and More",
    //   content_type: "Videos",
    //   news_title:
    //     "US Fed Rate Cuts: Impact on Indian Economy & Emerging Sectors to Watch!",
    //   date: "January 24, 2025",
    //   link: "https://youtu.be/lOfL087qO_E",
    // },
  ];

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: `news`,
        });

        const newsData = response.data.news;

        const filteredNewsItems = newsData.filter(
          (item) => item.news_category_id.news_category === "Angel Fund"
        );

        // Sort the newsItems by date in descending order (latest first)
        const sortedNewsItems = [...filteredNewsItems].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        // Slice to get the top 6 latest news
        const newsItemsOne = sortedNewsItems.slice(0, 6);
        console.log("News", response.data.news);
        setNews(newsItemsOne);
      } catch (error) {
        console.error("Error fetching news", error);
      }
    };

    fetchNews();
  }, []);

  // const filteredNewsItems = articleItems.filter(
  //   (item) => item.content_type === "Angel Fund"
  // );

  // // Sort the newsItems by date in descending order (latest first)
  // const sortedNewsItems = [...filteredNewsItems].sort(
  //   (a, b) => new Date(b.date) - new Date(a.date)
  // );

  // // Slice to get the top 6 latest news
  // const newsItemsOne = sortedNewsItems.slice(0, 6);

  return (
    <div className="news-insights-section pb-5">
      <div className="container">
        <div className="row align-items-center">
          <h5 className="section-subtitle">News & Articles</h5>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="banner-title offerings-title mt-3">
                Get all the latest updates
              </h2>
            </div>
            <div className="col-lg-6">
              <NavLink to="/news-and-more" className="banner-btn blue-btn mt-0">
                View all
              </NavLink>
            </div>
          </div>

          <div className="row mt-5">
            <AngelSlider settings={articleSettings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
