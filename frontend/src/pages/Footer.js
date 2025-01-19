import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-light text-dark text-lg-start mt-5 border-top">
      {/* Top Section with Logo and Quick Links */}
      <div className="container py-4">
        <div className="row">
          {/* Government Logo and Description */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <img
              src="/Images/emblem.jpg" // Replace with actual government logo URL
              alt="Government Emblem"
              style={{ height: "70px", marginBottom: "10px" }}
            />
            <h5 className="fw-bold">Government of India</h5>
            <p className="mb-0">
              Official Subsidy Portal providing access to government schemes and benefits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="text-dark text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#schemes" className="text-dark text-decoration-none">
                  Government Schemes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-dark text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">Subsidy Portal Helpline</p>
            <p className="mb-1">
              Email:{" "}
              <a
                href="mailto:support@gov.in"
                className="text-dark text-decoration-none"
              >
                support@gov.in
              </a>
            </p>
            <p className="mb-1">Phone: 1800-123-456</p>
            <p className="mb-1">Working Hours: 9 AM - 6 PM (Mon-Fri)</p>
          </div>
        </div>
      </div>

      {/* Accessibility and Copyright Section */}
      <div className="text-center p-3 bg-secondary text-white">
        <div>
          <a href="#accessibility" className="text-white text-decoration-none">
            Accessibility Statement
          </a>{" "}
          |{" "}
          <a href="#disclaimer" className="text-white text-decoration-none">
            Disclaimer
          </a>
        </div>
        <p className="mb-0 mt-2">
          &copy; {new Date().getFullYear()} Subsidy Portal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
