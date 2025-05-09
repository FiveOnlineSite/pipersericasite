import React, { useState } from "react";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
// import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";
import axios from "axios";
import MetaTagComponent from "../../components/MetaTagComponent";

const Contact = () => {
  // const formRef = useRef();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  //   investor: "",
  // });

  const [phoneError, setPhoneError] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [investor, setInvestor] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   if (name === "phone") {
  //     if (value === "") {
  //       setPhoneError(""); // Clear error when input is empty
  //     } else {
  //       const phoneRegex = /^\d{7,12}$/;
  //       if (!phoneRegex.test(value)) {
  //         setPhoneError("Phone number must be between 7 and 12 digits.");
  //       } else {
  //         setPhoneError("");
  //       }
  //     }
  //   }

  //   setFormData({ ...formData, [name]: value });
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneError) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);
      formData.append("investor_type", investor);

      const access_token = localStorage.getItem("access_token");

      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios({
        method: "POST",
        baseURL: `${apiUrl}/api/`,
        url: "contact",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      // const response = await axios.post("/api/team/createteam", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      console.log(response.data);
      setSuccessModal(true);
      setName("");
      setEmail("");
      setPhone("");
      setInvestor("");
      setMessage("");
      // console.log("Success modal should be set to true");

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessModal(false);
      }, 3000);

      // setTimeout(() => {
      // }, 2000);
    } catch (error) {
      console.error("Error creating team:", error.message);
    }

    // const emailParams = {
    //   name: formData.name,
    //   email: formData.email,
    //   phone: formData.phone,
    //   message: formData.message,
    //   investor: formData.investor,
    // };

    // emailjs
    //   .send(
    //     process.env.REACT_APP_CONTACT_SERVICE_ID,
    //     process.env.REACT_APP_CONTACT_TEMPLATE_ID,
    //     emailParams,
    //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    //   )
    // .then(
    //   (response) => {
    //     console.log(
    //       "Email sent successfully!",
    //       response.status,
    //       response.text
    //     );
    //     setSuccessModal(true);
    //     console.log("Success modal should be set to true");

    //     // Clear success message after 5 seconds
    //     setTimeout(() => {
    //       setSuccessModal(false);
    //     }, 5000);

    //     setFormData({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       message: "",
    //       investor: "",
    //     });
    //     formRef.current.reset();
    //   },
    //   (err) => {
    //     console.error("Failed to send email:", err);
    //   }
    // );
  };

  return (
    <Layout>
      <MetaTagComponent />
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/Contact.jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6> */}
                <h1 className="banner-title">Contact</h1>
                {/* <p className="banner-para">
                  Piper Serica is a distinguished investment management firm
                  committed to delivering long-term value through meticulous
                  research, strategic asset allocation, and a disciplined
                  investment approach, catering to investors seeking sustainable
                  growth and financial security.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <h6 className="section-subtitle">Get in touch</h6>
                <h2 className="section-title mt-lg-3 mt-4">Let's Talk</h2>
                <p className="para small-para">
                  Our team of experts is here to assist you. Share your details
                  with us, and we’ll connect you with the right specialist to
                  address your needs.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label for="name" className="form-label">
                          Name*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          // placeholder="eg: john"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label for="phone" className="form-label">
                          Phone Number*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => {
                            const value = e.target.value;
                            setPhone(value);

                            if (value === "") {
                              setPhoneError(""); // Clear error when input is empty
                            } else {
                              const phoneRegex = /^\d{7,12}$/;
                              if (!phoneRegex.test(value)) {
                                setPhoneError(
                                  "Phone number must be between 7 and 12 digits."
                                );
                              } else {
                                setPhoneError("");
                              }
                            }
                          }}
                          // placeholder="0000000000"
                          required
                        />
                        {phoneError && (
                          <p className="text-danger">{phoneError}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label for="select" className="form-label">
                          I am*
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="investor_type"
                          value={investor}
                          onChange={(e) => setInvestor(e.target.value)}
                        >
                          <option value="" disabled>
                            Select option
                          </option>
                          <option value="Investor">Investor</option>
                          <option value="Distributor">Distributor</option>
                          <option value="Start-up Founder">
                            Start-up Founder
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label for="email" className="form-label">
                          Email*
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          required
                          // placeholder="eg: johndoe@xyz.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label for="message" className="form-label">
                          Message*
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="message"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows="4"
                          required
                          // placeholder="start typing....."
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-3 d-flex justify-content-start">
                          <button
                            className="banner-btn blue-btn mt-0 mb-3"
                            type="submit"
                            id="contact-form"
                          >
                            Send Enquiry
                          </button>
                        </div>
                        <div className="col-lg-9">
                          <p className="para subscribe-para mb-0">
                            <i>
                              *By submitting the contact form, you consent to
                              all data in the form being used in accordance with
                              <NavLink to="/privacy-policy">
                                {" "}
                                Piper Serics's data privacy policy
                              </NavLink>
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/* <h6 className="section-subtitle">our locations</h6> */}
              <h2 className="section-title">India</h2>

              <div className="location-div mt-5">
                <h6 className="section-subtitle mb-4">
                  Piper Serica Advisors Pvt. Ltd.
                </h6>
                {/* 
                <p className="para small-para">
                  Name of the fund: Piper Serica Angel Fund
                </p>

                <p className="para small-para">
                  Category: Category I AIF – Venture Capital Fund – Angel Fund
                </p>

                <p className="para small-para">
                  Address: A Wing, 905/906, Marathon Innova Nextgen, Ganpatrao
                  Kadam Marg, Opp-Peninsula Corporate Park, Lower Parel, Mumbai
                  – 400013
                </p>

                <p className="para small-para">
                  Registration Number: IN/AIF1/21-22/1028
                </p>

                <p className="para small-para ">
                  Name of the investment manager: Piper Serica Advisors Private
                  Limited
                </p>

                <p className="para small-para">
                  Address of the investment manager: A Wing, 905/906, Marathon
                  Innova Nextgen, Ganpatrao Kadam Marg, Opp-Peninsula Corporate
                  Park, Lower Parel, Mumbai – 400013
                </p> */}

                <div className="social-media-div mt-4">
                  <NavLink
                    to="tel:022-66545370"
                    className="single-social-media"
                  >
                    <i className="fa-solid fa-phone"></i>
                    <p className="para small-para">022-66545370</p>
                  </NavLink>
                  <NavLink
                    to="mailto:contact@piperserica.com"
                    className="single-social-media"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <p className="para small-para">contact@piperserica.com</p>
                  </NavLink>
                  <NavLink
                    to="https://maps.app.goo.gl/2pP2WxzAcmueuKmG8"
                    className="single-social-media"
                    target="_blank"
                  >
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="para small-para">
                      Office No. 905 & 906, A Wing, Marathon Innova Nextgen,
                      Ganpatrao Kadam Marg, Lower Parel, Mumbai – 400013
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-4">
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.522508434842!2d72.824925!3d18.9966839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf0da9017b63%3A0x3ffea97698ac957c!2sPiper%20Serica!5e0!3m2!1sen!2sin!4v1742453967362!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}

      {successModal ? (
        <Modal
          centered
          show={successModal}
          onHide={() => setSuccessModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Thank you!</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p className="thankyou-msg">
                Thank you for reaching out! We have received your message and
                will get back to you soon.
              </p>
              {/* <button onClick={() => setSuccessModal(false)}>Close</button> */}
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </Layout>
  );
};

export default Contact;
