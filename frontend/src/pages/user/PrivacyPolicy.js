import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="banner-section pb-0">
        <div className="row">
          <div className="banner-img-div other-banner-div">
            {/* <img src="/images/banners/blogdetail-banner.jpg" alt="banner-img" /> */}

            <div className="banner-content-div other-banner-content-div">
              <div className="container">
                <h1 className="banner-title">
                  Personal Data Protection Statement
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title offerings-title mt-4">
                Introduction
              </h2>
            </div>
            <div className="col-lg-12">
              <p className="para medium-para">
                At Piper Serica Advisors Pvt. Ltd. ("Piper Serica," "we," "our,"
                or "us"), we are committed to protecting your privacy and
                ensuring the security of your personal information. This Data
                Privacy Policy outlines how we collect, use, store, and protect
                your data when you visit our website or engage with our
                services.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h6 className="section-subtitle mt-4">Information We Collect</h6>
              <p>We may collect the following types of information:</p>
            </div>
            <div className="col-12">
              <div className="single-disclaimer-para">
                <div>
                  <span></span>
                </div>
                <p className="para medium-para">
                  <strong>Personal Information: </strong>Name, email address,
                  phone number, and any details you provide when filling out
                  contact forms or subscribing to our communications.
                </p>
              </div>
              <div className="single-disclaimer-para">
                <div>
                  <span></span>
                </div>
                <p className="para medium-para">
                  <strong>Financial Information:</strong> Investment-related
                  details when you engage with our services.
                </p>
              </div>
              <div className="single-disclaimer-para">
                <div>
                  <span></span>
                </div>
                <p className="para medium-para">
                  <strong>Technical Data:</strong> IP address, browser type, and
                  usage data collected through cookies and analytics tools.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h6 className="section-subtitle mt-4">
                How We Use Your Information
              </h6>
              <p>We use the collected data to:</p>
            </div>
            <div className="col-12">
              <div className="single-disclaimer-para">
                <div>
                  <span></span>
                </div>
                <p className="para medium-para">
                  Provide investment insights and services tailored to your
                  interests.
                </p>
              </div>
              <div className="single-disclaimer-para">
                <div>
                  <span></span>
                </div>
                <p className="para medium-para">
                  Improve our website, services, and customer experience.
                </p>
              </div>
              <div className="single-disclaimer-para">
                <div>
                  <span></span>
                </div>
                <p className="para medium-para">
                  Respond to inquiries and process investor-related queries.
                </p>
              </div>
              <div className="single-disclaimer-para">
                <div>
                  <span></span>
                </div>
                <p className="para medium-para">
                  Comply with legal and regulatory obligations.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title offerings-title mt-4">
                Data Security
              </h2>
            </div>
            <div className="col-lg-12">
              <p className="para medium-para">
                We take appropriate technical and organizational measures to
                protect your data from unauthorized access, misuse, or
                disclosure. Our security protocols ensure the confidentiality
                and integrity of your personal information.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title offerings-title mt-4">
                Third-Party Sharing
              </h2>
            </div>
            <div className="col-lg-12">
              <p className="para medium-para">
                We do not sell, however, we may share your personal data with
                third parties for our marketing purposes to help manage the
                delivery of and enhance our products and services, including
                analysing current customer needs and identifying potential
                future needs. However, we may disclose your information to
                regulatory authorities, service providers, or legal entities
                when required by law.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title offerings-title mt-4">
                Cookies and Tracking Technologies
              </h2>
            </div>
            <div className="col-lg-12">
              <p className="para medium-para">
                Our website may use cookies to enhance user experience, track
                website performance, and analyze visitor behavior. You can
                manage your cookie preferences through your browser settings.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title offerings-title mt-4">
                Policy Updates
              </h2>
            </div>
            <div className="col-lg-12">
              <p className="para medium-para">
                We may update this Privacy Policy periodically. Any changes will
                be reflected on this page with a revised effective date.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title offerings-title mt-4">Contact Us</h2>
            </div>
            <div className="col-lg-12">
              <p className="para medium-para">
                If you have any questions about our Data Privacy Policy or how
                we handle your data, please{" "}
                <Link to="/contact">contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
