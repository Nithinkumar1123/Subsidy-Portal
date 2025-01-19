import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; // Import animate.css for animations

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(""); // Date of birth
  const [gender, setGender] = useState(""); // Gender
  const [email, setEmail] = useState(""); // Email
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!username || !password || !dob || !gender || !email) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login/signup", {
        username,
        password,
        role: "user", // Default role is 'user'
        dob,
        gender,
        email,
      });
      // Redirect back to login page with success message
      navigate("/login/user", {
        state: { message: "Sign up successful! Please log in." },
      });
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f3f1f6, #2575fc)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card shadow-lg border-0 rounded-4 animate__animated animate__fadeIn animate__delay-1s"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="card-body p-5">
                <h2 className="text-center mb-4  fw-bold">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="form-label text-danger fw-bold"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control form-control-lg shadow-sm"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="form-label text-danger fw-bold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg shadow-sm"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="dob"
                      className="form-label text-danger fw-bold"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      className="form-control form-control-lg shadow-sm"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="gender"
                      className="form-label text-danger fw-bold"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      className="form-select form-select-lg shadow-sm"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="form-label text-danger fw-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg shadow-sm"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-danger fw-bold btn-lg"
                      style={{
                        transition: "transform 0.3s ease-in-out",
                        borderRadius: "30px",
                        padding: "12px",
                      }}
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing up..." : "Sign Up"}
                    </button>
                  </div>
                </form>
                {error && (
                  <p className="text-danger text-center mt-3 animate__animated animate__fadeIn">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
