import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const [contact, setContact] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        const response = await axios({
          method: "GET",
          baseURL: `${apiUrl}/api/`,
          url: "contact",
        });

        const contactData = response.data.contacts;

        const sortedContact = [...contactData].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

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

      await axios({
        method: "DELETE",
        baseURL: `${apiUrl}/api/`,
        url: `contact/${id}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setContact((prev) => prev.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const filteredContacts = contact.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="pages-headers">
        <div className="row">
          <div className="col-lg-6">
            <h2>Contact Us</h2>
          </div>
          <div className="col-lg-6">
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control"
                type="search"
                placeholder="Search by name"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>

      <div className="row mobilerows">
        <div className="col-md-12">
          <div className="infos-table">
            <div className="table-responsive">
              <table className="table nowrap">
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
                  {filteredContacts.length > 0 ? (
                    filteredContacts.map((contact) => (
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
                              timeZone: "Asia/Kolkata",
                            }
                          )}{" "}
                          at{" "}
                          {new Date(contact.createdAt).toLocaleTimeString(
                            "en-IN",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "Asia/Kolkata",
                            }
                          )}
                        </td>
                        {/* <td className="text-center">
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(contact._id)}
                          >
                            <i className="las la-trash"></i>
                          </button>
                        </td> */}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No contact cata found.
                      </td>
                    </tr>
                  )}
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
