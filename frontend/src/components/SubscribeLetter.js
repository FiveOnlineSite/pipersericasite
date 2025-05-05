import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Modal } from "react-bootstrap";

const SubscribeLetter = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Check if the email already exists in Brevo
      const checkResponse = await axios.get(
        `https://api.brevo.com/v3/contacts/${email}`,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.REACT_APP_BREVO_API_KEY,
          },
        }
      );

      // If the contact exists, show "Already Subscribed" modal
      if (checkResponse.status === 200) {
        console.log("Email already exists in Brevo.");
        setErrorModal(true);
        // Clear form fields
        setFirstname("");
        setLastname("");
        setEmail("");
        return; // Stop further execution
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Step 2: Email does not exist, proceed with subscription
        try {
          const response = await axios.post(
            "https://api.brevo.com/v3/contacts",
            {
              email: email,
              attributes: {
                FIRSTNAME: firstname,
                LASTNAME: lastname,
              },
              listIds: [Number(process.env.REACT_APP_BREVO_LIST_ID)],
              updateEnabled: true,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "api-key": process.env.REACT_APP_BREVO_API_KEY,
              },
            }
          );

          if (response.status === 201) {
            setSuccessModal(true);
            setTimeout(() => {
              setSuccessModal(false);
            }, 5000);

            setFirstname("");
            setLastname("");
            setEmail("");
          }
        } catch (subscribeError) {
          console.error("Subscription Error:", subscribeError);
        }
      } else {
        console.error("Error checking email in Brevo:", error);
      }
    }
  };

  return (
    <>
      <section className="newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="banner-title blue-title mt-3">
                Subscribe to our insights & updates
              </h2>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="newsletter-div">
                <form onSubmit={handleSubscribe}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label
                          htmlFor="firstname"
                          className="form-label section-subtitle"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control subscribe-control"
                          id="firstname"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <label
                          htmlFor="last-name"
                          className="form-label section-subtitle"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control subscribe-control"
                          id="last-name"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="form-label section-subtitle"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control subscribe-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-4 d-flex justify-content-start">
                          <button
                            type="submit"
                            className="banner-btn blue-btn mt-0 mb-3"
                          >
                            Subscribe
                          </button>
                        </div>
                        <div className="col-lg-8">
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

      {/* Success Modal */}
      <Modal centered show={successModal} onHide={() => setSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Thank you for subscribing!</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="section-subtitle pop-msg-one thankyou-msg">
            Stay tuned for exclusive insights and updates delivered to your
            inbox.
          </p>
        </Modal.Body>
      </Modal>

      <Modal centered show={errorModal} onHide={() => setErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Already Subscribed</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="thankyou-msg">This email is already subscribed.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SubscribeLetter;
