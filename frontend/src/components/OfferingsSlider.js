import React from "react";
import Slider from "react-slick";

const OfferingsSlider = ({ settings, item }) => {
  return (
    <div>
      <Slider {...settings}>
        {item.map((item, index) => (
          <div key={index} className="offerings-div">
            <h6 className="section-subtitle">Investment Strategy</h6>
            <div className="strategy-title-div">
              <h5>{item.strategy_title}</h5>{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="strategy-funds-div">
              <h6 className="section-subtitle mt-5">funds</h6>
              <div className="funds-div">
                <h5>{item.funds}</h5>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferingsSlider;
