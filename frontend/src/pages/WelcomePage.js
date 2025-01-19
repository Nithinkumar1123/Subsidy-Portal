import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function WelcomePage() {
  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section
        className="text-center text-white bg-primary py-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')",
        }}
      >
        <div className="container position-relative">
          <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeIn">
            Welcome to the Subsidy Portal
          </h1>
          <p className="lead animate__animated animate__fadeIn animate__delay-1s">
            A professional platform to apply, manage, and track government subsidies.
          </p>
          
        </div>
      </section>

      {/* Main Section */}
      <main className="container py-5">
        {/* Choose Role Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary display-6 mb-3">
            Choose Your Role
          </h2>
          <p className="text-muted fs-5 mb-4">
            Select your role to proceed with the login and access your relevant services.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="row justify-content-center g-4">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded h-100 text-center hover-zoom animate__animated animate__fadeIn animate__delay-0.5s">
              <div className="card-body py-5">
                <h4 className="card-title text-primary fw-bold">User</h4>
                <p className="card-text text-muted">
                  Easily apply for subsidies, track your applications, and receive assistance.
                </p>
                <a href="/login/user" className="btn btn-primary fw-bold text-white">
                  Login as User
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded h-100 text-center hover-zoom animate__animated animate__fadeIn animate__delay-1s">
              <div className="card-body py-5">
                <h4 className="card-title text-info fw-bold">Mediator</h4>
                <p className="card-text text-muted">
                  Assist users in the application process, validate documents, and facilitate approvals.
                </p>
                <a href="/login/mediator" className="btn btn-info fw-bold text-white">
                  Login as Mediator
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded h-100 text-center hover-zoom animate__animated animate__fadeIn animate__delay-1.5s">
              <div className="card-body py-5">
                <h4 className="card-title text-danger fw-bold">Government</h4>
                <p className="card-text text-muted">
                  Oversee applications, validate requests, and approve or reject subsidy applications.
                </p>
                <a href="/login/government" className="btn btn-danger fw-bold text-white">
                  Login as Government
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="py-5 mt-5 bg-light rounded shadow-lg animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="fw-bold text-center mb-4 text-primary">About the Subsidy Portal</h2>
          <p className="text-center text-muted fs-5 mb-5">
            This portal simplifies accessing government subsidies by providing easy access for users, mediators, and government officials.
            It makes the application process transparent, secure, and quick.
          </p>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100 hover-zoom">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">For Users</h5>
                  <p className="card-text text-muted">
                    Apply for subsidies, check your application status, and receive instant notifications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100 hover-zoom">
                <div className="card-body">
                  <h5 className="card-title text-info fw-bold">For Mediators</h5>
                  <p className="card-text text-muted">
                    Guide users through the process, validate documents, and manage applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100 hover-zoom">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">For Government</h5>
                  <p className="card-text text-muted">
                    Manage applications, review requests, and approve subsidies with transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default WelcomePage;
