import React from "react";
import Slider from "react-slick";

const TestimonialSlider = ({ item, settings }) => {
  return (
    <div>
      <Slider {...settings}>
        {item.map((item, index) => (
          <div key={index} className="testimonial-div">
            <div className="testimonial-img-div">
              <img src={`${process.env.PUBLIC_URL}${item.image}`} alt="news" />
              <div className="testimonial-data">
                <h6 className="section-title">{item.name}</h6>
                <p className="para small-para">{item.designation}</p>
              </div>
            </div>
            <div className="testimonial-content-div p-lg-4 p-3">
              <p className="para medium-para">{item.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
