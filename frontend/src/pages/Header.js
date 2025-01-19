import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Required for dropdown functionality
import { FaHome, FaInfoCircle, FaPhoneAlt, FaQuestionCircle, FaUser } from "react-icons/fa";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          {/* Navbar Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/images/emblem.jpg"
              alt="Emblem"
              style={{ width: "35px", height: "35px", marginRight: "10px" }}
            />
            <span className="fw-bold">Subsidy Portal</span>
          </Link>

          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              {/* Home */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FaHome className="me-2" />
                  Home
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <FaInfoCircle className="me-2" />
                  About
                </Link>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <FaPhoneAlt className="me-2" />
                  Contact
                </Link>
              </li>

              {/* Help */}
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  <FaQuestionCircle className="me-2" />
                  Help
                </Link>
              </li>

              {/* Dropdown Login Menu */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUser className="me-2" />
                  Login
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/login/user">
                      User Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login/mediator">
                      Mediator Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login/government">
                      Government Login
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
