import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; // Import animate.css for animations

function LoginPage() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset error and message state
    setError("");
    setMessage("");

    // Basic validation
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true); // Set loading state

    try {
      const response = await axios.post("http://localhost:5000/login", {
        role,
        username,
        password,
      });

      setMessage(response.data.message);

      // Navigate to the next page with username
      switch (role) {
        case "government":
          navigate("/government", { state: { username } });
          break;
        case "user":
          navigate("/user", { state: { username } });
          break;
        case "mediator":
          navigate("/mediator", { state: { username } });
          break;
        default:
          setError("Invalid role");
      }
    } catch (error) {
      // Display server error or fallback error
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleSignUp = () => {
    // Navigate to the SignUpPage for the 'user' role
    navigate("/signup");
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
                background: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)", // Soft shadow for depth
              }}
            >
              <div className="card-body p-5">
                <h2 className="text-center mb-4 text-primary fw-bold">
                  {role.charAt(0).toUpperCase() + role.slice(1)} Login
                </h2>

                {/* Form */}
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="form-label text-primary fw-bold"
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
                      style={{
                        transition: "border-color 0.3s ease-in-out",
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="form-label text-primary fw-bold"
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
                      style={{
                        transition: "border-color 0.3s ease-in-out",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary fw-bold btn-lg hover-zoom"
                      style={{
                        transition: "transform 0.3s ease-in-out",
                        borderRadius: "30px",
                        padding: "12px",
                      }}
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </form>

                {/* Messages */}
                {message && (
                  <p className="text-success text-center mt-3 animate__animated animate__fadeIn">
                    {message}
                  </p>
                )}
                {error && (
                  <p className="text-danger text-center mt-3 animate__animated animate__fadeIn">
                    {error}
                  </p>
                )}

                {/* Sign Up Button */}
                {role === "user" && (
                  <div className="d-grid mt-4">
                    <button
                      onClick={handleSignUp}
                      className="btn btn-outline-primary fw-bold btn-lg"
                      style={{
                        transition: "background-color 0.3s ease-in-out",
                        borderRadius: "30px",
                        padding: "12px",
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
