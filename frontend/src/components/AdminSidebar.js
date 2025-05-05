import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminSidebar = () => {
  const { auth, setAuth } = useAuth();

  console.log("Auth:", auth);
  console.log("User:", auth.user);
  console.log("Access Token:", auth.access_token);
  console.log("LocalStorage - auth:", localStorage.getItem("auth"));
  console.log(
    "LocalStorage - access_token:",
    localStorage.getItem("access_token")
  );

  const handleLogout = () => {
    setAuth({
      user: null,
      access_token: "",
    });
    localStorage.removeItem("access_token");
  };

  if (!auth) {
    // Handle case when auth is not defined
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="sidebar-brand">
        <NavLink to="/admin/dashboard">
          <img
            className="admin-logo"
            src="/images/Piper-Serica-logo.png"
            alt="Logo"
            loading="lazy"
          />{" "}
          <span>Piper Serica</span>
        </NavLink>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <NavLink to="/admin/dashboard" className="nav-link" title="Home">
              <span className="las la-home"></span> <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/factsheet-presentation" title="Services">
              <span className="las la-hands-helping"></span>{" "}
              <span>Factsheet / Presentation</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/fund-number" title="Gallery Name">
              <span className="las la-images"></span> <span>Fund Numbers</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/company" title="Project">
              <span className="las la-briefcase"></span>{" "}
              <span>Company Portfolio</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/news-category" title="Project Detail">
              <span className="las la-tasks"></span> <span>News Category</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/news" title="Passwords">
              <span className="las la-lock"></span> <span>News & More</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/investor-letter" title="About Us">
              <span className="las la-user-friends"></span>{" "}
              <span>Investor Letter</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/team" title="Team">
              <span className="las la-users"></span> <span>Team</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/contact-us" title="Career">
              <span className="las la-user-tie"></span> <span>Contact</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/factsheet-form" title="Opportunities">
              <span className="las la-rocket"></span>{" "}
              <span>Factsheet Form</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/presentation-form" title="Applications">
              <span className="las la-book"></span>{" "}
              <span>Presentation Form</span>
            </NavLink>
          </li>

          <li className="logout-menu" title="Logout">
            <NavLink to="/login" onClick={handleLogout}>
              <span className="las la-sign-out-alt"></span> <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
