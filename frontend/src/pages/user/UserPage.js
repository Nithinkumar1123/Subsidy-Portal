import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const UserPage = () => {
  const location = useLocation();
  const username = location.state?.username || "Guest"; // Fallback to 'Guest' if username is not passed

  return (
    <>
      <Header />

      {/* Welcome Section */}
      <div
        className="text-center  py-5" // for blue - bg-primary
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
           Welcome, {username}! .
        </h1>
        
        <p style={{ fontSize: "1.2rem" }}>
          Access your dashboard to manage subsidies effortlessly.
        </p>
      </div>

      {/* Main Content Section */}
      <main
        style={{
          backgroundColor: "#f8f9fa",
          padding: "40px 20px",
          minHeight: "calc(100vh - 250px)",
        }}
      >
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontWeight: "600", fontSize: "1.8rem", marginBottom: "20px" }}>
            What would you like to do today?
          </h2>
          <p style={{ fontSize: "1rem", color: "#6c757d" }}>
            Easily apply for subsidies or track the progress of your applications.
            Choose an option below to get started.
          </p>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Apply for Subsidy */}
          <Link
            to="/apply-subsidy"
            state={{ username }} // Pass username to the next page
            style={{
              display: "block",
              width: "300px",
              padding: "20px",
              textDecoration: "none",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 6px 20px rgba(0, 123, 255, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(0, 123, 255, 0.3)";
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>Apply for Subsidy</h3>
            <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
              Submit a new subsidy application quickly and easily.
            </p>
          </Link>

          {/* Track Subsidy */}
          <Link
            to="/track-subsidy"
            state={{ username }} // Pass username to the next page
            style={{
              display: "block",
              width: "300px",
              padding: "20px",
              textDecoration: "none",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(40, 167, 69, 0.3)",
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 6px 20px rgba(40, 167, 69, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(40, 167, 69, 0.3)";
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>Track Subsidy</h3>
            <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
              Check the status of your submitted applications.
            </p>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default UserPage;
