import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import axios from "axios";

const NewsSlider = ({ settings }) => {
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

        // Sort the newsItems by date in descending order (latest first)
        const sortedNewsItems = newsData.sort(
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

  return (
    <div>
      <Slider {...settings}>
        {news.map((item, index) => (
          <a
            href={
              item.news_url.startsWith("http")
                ? item.news_url
                : `https://${item.news_url}`
            }
            target="_blank"
            className="text-decoration-none"
            rel="noreferrer"
          >
            <div key={index} className="news-div">
              <div className="news-img-div">
                <img
                  src={`${
                    process.env.REACT_APP_API_URL
                  }/${item.thumbnail[0].filepath.replace(/\\/g, "/")}`} // Assuming filepath contains the path to the image
                  alt={`${item.thumbnail[0].filename}`}
                  className="news-img w-100"
                />
                {/* <div className="news-type">
                <h6 className="section-subtitle">{item.insight_type}</h6>
              </div> */}
              </div>
              <div className="news-content-div">
                <h5>{item.news_category_id.news_category}</h5>
                <h3 className="section-title mt-3">{item.title}</h3>
                <h6 className="mt-5">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h6>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
