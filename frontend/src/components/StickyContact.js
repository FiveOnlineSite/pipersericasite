import React from "react";
import { NavLink } from "react-router-dom";

const StickyContact = ({ title }) => {
  return (
    <section className="sticky-contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h4 className="section-title">{title}</h4>
          </div>

          <div className="col-lg-4 mt-lg-0 mt-3">
            <NavLink to="/contact" className="banner-btn blue-btn mt-0">
              Contact us
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyContact;
