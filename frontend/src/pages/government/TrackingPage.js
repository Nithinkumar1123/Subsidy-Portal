import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Footer from '../Footer';

const TrackingPage = () => {
  const [subsidies, setSubsidies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSubsidies, setFilteredSubsidies] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch all subsidies on component mount
  useEffect(() => {
    const fetchSubsidies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/subsidy/requests');
        setSubsidies(response.data);
        setFilteredSubsidies(response.data);
      } catch (err) {
        console.error('Error fetching subsidies:', err);
        setError('Failed to fetch subsidy data.');
      }
    };

    fetchSubsidies();
  }, []);

  // Handle search functionality
  useEffect(() => {
    const results = subsidies.filter((subsidy) =>
      subsidy.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subsidy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subsidy.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subsidy.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSubsidies(results);
  }, [searchTerm, subsidies]);

  // Navigate to the TrackingStatus page for a specific subsidy
  const handleSubsidyClick = (id) => {
    navigate(`/tracking-status/${id}`);
  };

  // Navigate back to the "/government" page
  const handleGoBack = () => {
    navigate('/government');
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-header text-center ">
            <h1>Track Subsidy</h1>
            <p>Here you can track your subsidy application status.</p>
          </div>
          <div className="card-body">
            {error && <div className="alert alert-danger text-center">{error}</div>}

            {/* Back Button */}
            <div className="mb-4 text-start">
              <button
                className="btn btn-secondary"
                onClick={handleGoBack}
              >
                <i className="bi bi-arrow-left"></i> Back to Government Page
              </button>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Application Number, Name, Type, or Status"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {filteredSubsidies.length === 0 ? (
              <div className="text-center">
                <p className="text-muted">No subsidies found.</p>
              </div>
            ) : (
              <table className="table table-bordered table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>Application Number</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubsidies.map((subsidy) => (
                    <tr key={subsidy._id}>
                      <td>{subsidy.applicationNumber}</td>
                      <td>{subsidy.name}</td>
                      <td>{subsidy.type}</td>
                      <td>
                        <span
                          className={`badge ${
                            subsidy.status === 'Subsidy is approved and go to next step on bank'
                              ? 'bg-success'
                              :subsidy.status === 'User got subsidy and verified successfully'
                              ? 'bg-success'
                              :subsidy.status === 'the subsidy reach the user'
                              ? 'bg-success'
                              : subsidy.status === 'In the process'
                              ? 'bg-warning'
                              : 'bg-danger'
                          }`}
                        >
                          {subsidy.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleSubsidyClick(subsidy._id)}
                        >
                          View Status
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrackingPage;
