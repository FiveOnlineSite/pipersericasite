import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = ({ closeOffcanvas }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedInvestor, setSelectedInvestor] = useState("");
  const [prevInvestor, setPrevInvestor] = useState(""); // Track previous value
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown open state

  const pathToInvestorMap = {
    "/foreign-investor": "foreign",
    "/nri-investor": "nri",
    "/family-office-and-indian-investor": "family",
    "/startup-founder-entrepreneur": "startup",
  };

  const investorToPathMap = {
    foreign: "/foreign-investor",
    nri: "/nri-investor",
    family: "/family-office-and-indian-investor",
    startup: "/startup-founder-entrepreneur",
  };

  useEffect(() => {
    const storedInvestor = localStorage.getItem("selectedInvestor");
    if (storedInvestor) {
      setSelectedInvestor(storedInvestor);
      setPrevInvestor(storedInvestor); // Save the initial value as previous value
    }

    const currentInvestor = pathToInvestorMap[location.pathname];
    if (currentInvestor) {
      setSelectedInvestor(currentInvestor);
      setPrevInvestor(currentInvestor);
      localStorage.setItem("selectedInvestor", currentInvestor);
    }
  }, [location.pathname]);

  const handleInvestorChange = (e) => {
    const newSelection = e.target.value;
    setSelectedInvestor(newSelection);
    setPrevInvestor(newSelection); // Update previous value
    localStorage.setItem("selectedInvestor", newSelection);
    navigate(investorToPathMap[newSelection], { replace: true });

    if (typeof closeOffcanvas === "function") {
      closeOffcanvas();
    }

    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const handleDropdownFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownBlur = () => {
    setIsDropdownOpen(false);
    // Restore previous value if user does not select anything
    setSelectedInvestor(prevInvestor);
    localStorage.setItem("selectedInvestor", prevInvestor);
  };

  const [isFixed, setIsFixed] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(pathname !== "/" && window.scrollY > 30);
    };

    if (pathname !== "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div
      className={`topbar-section ${
        location.pathname === "/"
          ? "absolute-topbar"
          : isFixed && window.innerWidth > 992
          ? "fixed-topbar"
          : ""
      }`}
    >
      <div className="container">
        <div className="select-div">
          <h6>I am: </h6>
          <select
            className="form-select"
            value={isDropdownOpen ? "" : selectedInvestor} // Show empty when dropdown opens
            onChange={handleInvestorChange}
            onFocus={handleDropdownFocus} // Track when dropdown opens
            onBlur={handleDropdownBlur} // Restore if not selected
          >
            <option value="" disabled>
              Select a investor type
            </option>
            <option value="foreign" id="foreign-investor">
              Foreign Investor
            </option>
            <option value="nri" id="nri-investor">
              NRI Investor
            </option>
            <option value="family" id="indian-investor">
              Family Office & Indian Investor
            </option>
            <option value="startup" id="startup-founder">
              Startup Founder & Entrepreneur
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
