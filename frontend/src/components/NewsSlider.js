import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const NewsSlider = ({ settings, item }) => {
  return (
    <div>
      <Slider {...settings}>
        {item.map((item, index) => (
          
          <NavLink to={item.link} target="_blank" className="text-decoration-none">
          <div key={index} className="news-div">
            <div className="news-img-div">
              <img
                src={`${process.env.PUBLIC_URL}${item.news_img}`}
                alt="news"
                className="news-img w-100"
              />
              {/* <div className="news-type">
                <h6 className="section-subtitle">{item.insight_type}</h6>
              </div> */}
            </div>
            <div className="news-content-div">
              <h5>{item.content_type}</h5>
              <h3 className="section-title mt-3">{item.news_title}</h3>
              <h6 className="mt-5">{item.date}</h6>
            </div>
          </div>
          </NavLink>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
