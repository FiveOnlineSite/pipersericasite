import React, { useRef, useState } from "react";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import TestimonialSlider from "../../components/TestimonialSlider";
import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";

const Career = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 15000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 900, // At 900px and below, switch to horizontal
        settings: {
          vertical: false, // Disable vertical mode
          verticalSwiping: false, // Disable vertical swiping
          slidesToShow: 2, // Keep the same or adjust for smaller screens
          slidesToScroll: 1,
          centerMode: true, // Keep center mode if needed
          centerPadding: "10px",
          cssEase: "linear",
        },
      },
    ],
  };

  const careerSlide = [
    {
      image:
        "/images/banners/6217ce3945ea82a627a21d6f_USE pexels-kampus-production-8636596-p-1080.webp",
    },
    {
      image:
        "/images/banners/6217ce3945ea82a627a21d6f_USE pexels-kampus-production-8636596-p-1080.webp",
    },
    {
      image:
        "/images/banners/6217ce3945ea82a627a21d6f_USE pexels-kampus-production-8636596-p-1080.webp",
    },
    {
      image:
        "/images/banners/6217ce3945ea82a627a21d6f_USE pexels-kampus-production-8636596-p-1080.webp",
    },
  ];

  const testimonialSettings = {
    centerMode: false, // Enable center mode
    slidesToShow: 2, // Number of slides to show
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialItems = [
    {
      image: "/images/testimonials/testi1.webp",
      name: "Antoine Bracq",
      designation: "Managing Director, Global Head of Investment Advisory",
      content:
        "Being independent and result-oriented, I was impressed by Lighthouse Canton’s entrepreneurial culture and flexibility. As an illustration, I joined Lighthouse Canton as an Investment Consultant while doing my Executive MBA at INSEAD. I was then awarded the responsibility to develop our proprietary stock selection methodology which led to my promotion.",
    },
    {
      image: "/images/testimonials/testi2.webp",
      name: "Yinghui Lim",
      designation: "VP, Client Advisor, Wealth Management",
      content:
        "Empowering growth to me is the freedom and support to take ownership/charge of what I do. One of the core values at Lighthouse Canton is Entrepreneurship and I think this truly reflects the meaning of empowering growth within the organization. I have extremely supportive and nurturing leaders and colleagues who believe in me and constantly pushing me to take charge. They say, sky's the limit and I know these are the people who fuel me the confidence to take flight.",
    },
    {
      image: "/images/testimonials/testi1.webp",
      name: "Antoine Bracq",
      designation: "Managing Director, Global Head of Investment Advisory",
      content:
        "Being independent and result-oriented, I was impressed by Lighthouse Canton’s entrepreneurial culture and flexibility. As an illustration, I joined Lighthouse Canton as an Investment Consultant while doing my Executive MBA at INSEAD. I was then awarded the responsibility to develop our proprietary stock selection methodology which led to my promotion.",
    },
    {
      image: "/images/testimonials/testi2.webp",
      name: "Yinghui Lim",
      designation: "VP, Client Advisor, Wealth Management",
      content:
        "Empowering growth to me is the freedom and support to take ownership/charge of what I do. One of the core values at Lighthouse Canton is Entrepreneurship and I think this truly reflects the meaning of empowering growth within the organization. I have extremely supportive and nurturing leaders and colleagues who believe in me and constantly pushing me to take charge. They say, sky's the limit and I know these are the people who fuel me the confidence to take flight.",
    },
    {
      image: "/images/testimonials/testi1.webp",
      name: "Antoine Bracq",
      designation: "Managing Director, Global Head of Investment Advisory",
      content:
        "Being independent and result-oriented, I was impressed by Lighthouse Canton’s entrepreneurial culture and flexibility. As an illustration, I joined Lighthouse Canton as an Investment Consultant while doing my Executive MBA at INSEAD. I was then awarded the responsibility to develop our proprietary stock selection methodology which led to my promotion.",
    },
    {
      image: "/images/testimonials/testi2.webp",
      name: "Yinghui Lim",
      designation: "VP, Client Advisor, Wealth Management",
      content:
        "Empowering growth to me is the freedom and support to take ownership/charge of what I do. One of the core values at Lighthouse Canton is Entrepreneurship and I think this truly reflects the meaning of empowering growth within the organization. I have extremely supportive and nurturing leaders and colleagues who believe in me and constantly pushing me to take charge. They say, sky's the limit and I know these are the people who fuel me the confidence to take flight.",
    },
  ];

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const [phoneError, setPhoneError] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (value === "") {
        setPhoneError(""); // Clear error when input is empty
      } else {
        const phoneRegex = /^\d{7,12}$/;
        if (!phoneRegex.test(value)) {
          setPhoneError("Phone number must be between 7 and 12 digits.");
        } else {
          setPhoneError("");
        }
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [resume, setResume] = useState(null);

  // Handle file input
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    // Check if the file is a PDF
    if (file && file.type === "application/pdf") {
      // Check if the file size is less than 500 KB (500 * 1024 bytes)
      if (file.size > 500 * 1024) {
        setUploadError("File size must be less than 500 KB.");
        setResume(null); // Reset the resume file if the size is too large
        return; // Stop the upload process
      } else {
        setUploadError(""); // Clear any previous error
        setResume(file); // Set the valid resume
      }
    } else {
      setUploadError("Only PDF files are allowed.");
      setResume(null); // Reset the resume if the file is not a PDF
    }

    if (file) {
      const fileData = new FormData();
      fileData.append("file", file);
      fileData.append("upload_preset", process.env.REACT_APP_PRESET_NAME);
      fileData.append("resource_type", "raw");

      setUploading(true); // Set uploading to true when the upload starts
      setUploadError(""); // Clear any previous error

      try {
        const response = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
          method: "POST",
          body: fileData,
        });
        const data = await response.json();

        if (data.secure_url) {
          console.log("Resume uploaded successfully: ", data.secure_url);
          setFormData((prevData) => {
            const updatedData = { ...prevData, resume: data.secure_url };
            console.log("Updated form data with resume: ", updatedData);
            return updatedData;
          });
        } else {
          throw new Error("Invalid Cloudinary response");
        }
      } catch (error) {
        console.error("Resume upload failed", error);
        setUploadError("Failed to upload resume. Please try again.");
      } finally {
        setUploading(false); // Set uploading to false once upload finishes
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Resume data being passed:", resume);

    if (phoneError || !resume) {
      return; // Prevent submission if resume isn't uploaded yet
    }

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      resume: formData.resume,
    };

    emailjs
      .send(
        process.env.REACT_APP_CAREER_SERVICE_ID,
        process.env.REACT_APP_CAREER_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setSuccessModal(true);
          setTimeout(() => {
            setSuccessModal(false);
          }, 5000);

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            resume: null, // Reset resume after successful form submission
          });
          setResume(null);
          formRef.current.reset();
        },
        (err) => {
          console.error("Failed to send email:", err);
        }
      );
  };

  const handleResumeDisplay = () => {
    // Only show resume link if resume URL exists
    if (formData.resume) {
      return <p>Resume uploaded successfully</p>;
    }

    if (uploading) {
      return <p>Uploading...</p>; // Show "Uploading..." if file is being uploaded
    }

    if (uploadError) {
      return <p style={{ color: "red" }}>{uploadError}</p>; // Show any upload error
    }

    return null;
  };

  return (
    <Layout>
      <section className="banner-section">
        <div className="row">
          <div className="banner-img-div">
            <img
              src={`${process.env.PUBLIC_URL}/images/banners/Career.jpg`}
              alt="banner-img"
            />

            <div className="banner-content-div">
              <div className="container">
                {/* <h6 className="banner-subtitle">
                  Empowering Investors with Expert Insights
                </h6> */}
                <h1 className="banner-title">Careers</h1>
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

      <section className="life-section">
        <div className="container">
          <div className="row align-items-center">
            <h6 className="section-subtitle mb-4">Life at Piper Serica</h6>

            <h3 className="section-title mt-3 mt-lg-3">
              Grow in a culture of innovation, collaboration, and excellence
            </h3>

            <p className="para medium-para mt-lg-4 mt-4 justify-para">
              At Piper Serica, we foster a dynamic and collaborative work
              environment where innovation, integrity, and passion drive our
              success. Our team thrives on intellectual curiosity, analytical
              rigor, and a shared commitment to creating lasting value for
              investors. We believe in continuous learning, empowering our
              people with opportunities to grow, lead, and make an impact.
              Whether it’s exploring new investment frontiers, engaging with
              visionary entrepreneurs, or shaping market-leading strategies,
              life at Piper Serica is both challenging and rewarding. We
              cultivate an inclusive culture that values diverse perspectives,
              teamwork, and work-life balance, ensuring that every team member
              feels inspired to contribute to our collective vision.
            </p>
          </div>
        </div>
      </section>

      <section className="resume-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              {/* <h6 className="section-subtitle">Get in touch</h6> */}
              <h2 className="section-title mt-lg-3 mt-4">Join The Team</h2>
              {/* <p className="para small-para">
                Our global team of specialists is available to help with your
                enquiry. Please provide us more details of what we can help with
                and a member of the team will be in touch.
              </p> */}
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      {phoneError && (
                        <p className="text-danger">{phoneError}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="resume" className="form-label">
                        Resume*
                      </label>
                      <input
                        type="file"
                        required
                        className="form-control"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf"
                      />

                      {handleResumeDisplay()}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message <span>(optional)</span>
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 d-flex justify-content-start">
                        <button
                          className="banner-btn blue-btn mt-0 mb-3"
                          type="submit"
                          id="career-form"
                        >
                          Submit
                        </button>
                      </div>
                      <div className="col-lg-9">
                        <p className="para subscribe-para mb-0">
                          <i>
                            *By submitting the contact form, you consent to all
                            data in the form being used in accordance with
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
              <h4>Thank you for your application!</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p className="thankyou-msg">
                We have received your details and will review your profile. Our
                team will reach out to you if there is a suitable opportunity.
                Stay connected, and we appreciate your interest in joining Piper
                Serica!
              </p>
              {/* <button onClick={() => setSuccessModal(false)}>Close</button> */}
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </Layout>
  );
};

export default Career;
