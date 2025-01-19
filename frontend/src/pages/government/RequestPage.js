import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer';
import Header from '../Header';

const RequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch subsidy requests on component mount
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/subsidy/requests');
        
        // Filter requests with status "In the process"
        const filteredRequests = response.data.filter(
          (request) => request.status === "In the process"
        );
        setRequests(filteredRequests);
        setFilteredRequests(filteredRequests);
      } catch (err) {
        console.error('Error fetching subsidy requests:', err);
        setError('Failed to fetch subsidy requests.');
      }
    };
    fetchRequests();
  }, []);

  // Handle search functionality
  useEffect(() => {
    const results = requests.filter(
      (request) =>
        request.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRequests(results);
  }, [searchTerm, requests]);

  // Navigate to detail page
  const handleRequestClick = (id) => {
    navigate(`/request/${id}`);
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
        <div className="card-header   text-center">
          <h1>Government Dashboard</h1>
          <p>Manage and track subsidy requests efficiently.</p>
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger text-center">{error}</div>}

          {/* Back Button */}
          <div className="mb-4 text-start">
            <button
              className="btn btn-secondary"
              onClick={handleGoBack}
            >
              <i className="bi bi-arrow-left"></i> Back to Main Dashboard
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Application Number, Name, or Type"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Requests Table */}
          {filteredRequests.length === 0 ? (
            <div className="text-center">
              <p className="text-muted">No subsidy requests found.</p>
            </div>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="thead-light">
                <tr>
                  <th>Application Number</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request._id}>
                    <td>{request.applicationNumber}</td>
                    <td>{request.name}</td>
                    <td>{request.type}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleRequestClick(request._id)}
                      >
                        View Details
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

export default RequestPage;
