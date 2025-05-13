import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const [contact, setContact] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        // const response = await axios.get("/api/user/allUsers");
        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "contact",
        });

        const contactData = response.data.contacts;

        const sortedContact = [...contactData].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        console.log(response.data.contacts);
        setContact(sortedContact);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchContact();
  }, []);

  const handleDelete = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `contact/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setContact(null); // Update user state to null after deletion
      // setTimeout(() => {
      //   navigate("/admin/FactsheetPresentation");
      // }, 2000);
      console.log(response.data);
      setContact(contact.filter((contact) => contact._id !== id));
      setTimeout(() => {
        navigate("/admin/contact");
      }, 3000);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
  return (
    <AdminLayout>
      <div className="pages-headers ">
        <h2>Contact Us</h2>
      </div>
      <div className="row mobilerows">
        <div className="col-md-12">
          <div className="infos-table">
            <div className="table-responsive">
              <table id="example" className="table nowrap">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Phone</th>
                    <th className="text-center">Investor Type</th>

                    <th className="text-center">Message</th>
                    <th className="text-center">Date & Time</th>

                    {/* <th className="text-center">Delete</th> */}
                  </tr>
                </thead>
                <tbody>
                  {contact &&
                    contact.map((contact) => (
                      <tr key={contact._id}>
                        <td>{contact.name}</td>
                        <td className="text-center">{contact.email}</td>
                        <td className="text-center">{contact.phone}</td>
                        <td className="text-center">{contact.investor_type}</td>
                        <td className="text-center">{contact.message}</td>
                        <td className="text-center">
                          {new Date(contact.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              timeZone: "Asia/Kolkata", // Specify the time zone as IST
                            }
                          )}{" "}
                          at{" "}
                          {new Date(contact.createdAt).toLocaleTimeString(
                            "en-IN",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "Asia/Kolkata", // Specify the time zone as IST
                            }
                          )}
                        </td>

                        {/* <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(contact._id)}
                          >
                            <i class="las la-trash"></i>{" "}
                          </button>
                        </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ContactUs;
