import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Footer from '../Footer';

const RequestDetail = () => {
  const { id } = useParams();
  const [requestDetails, setRequestDetails] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/subsidy/requests/${id}`);
        setRequestDetails(response.data);
      } catch (err) {
        console.error('Error fetching request details:', err);
        setError('Failed to fetch request details.');
      }
    };
    fetchDetails();
  }, [id]);

  // Handle Accept button click
  const handleAccept = async () => {
    try {
      const updatedRequest = { status: "Subsidy is approved and go to next step on bank" };
      const response = await axios.put(`http://localhost:5000/subsidy/requests/${id}`, updatedRequest);
      setRequestDetails(response.data);
      navigate('/government'); // Navigate to the GovernmentPage after success
    } catch (err) {
      console.error('Error updating request status to accepted:', err);
      setError('Failed to update request status.');
    }
  };

  // Handle Reject button click
  const handleReject = async () => {
    try {
      const updatedRequest = { status: "Subsidy is rejected try next time" };
      const response = await axios.put(`http://localhost:5000/subsidy/requests/${id}`, updatedRequest);
      setRequestDetails(response.data);
      navigate('/government'); // Navigate to the GovernmentPage after success
    } catch (err) {
      console.error('Error updating request status to rejected:', err);
      setError('Failed to update request status.');
    }
  };

  // Navigate back to the GOV request-page
  const handleGoBack = () => {
    navigate('/request-page');
  };

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  if (!requestDetails) {
    return <div className="text-center mt-5">
      <p className="text-muted">Loading request details...</p>
    </div>;
  }

  return (
    <>
    <Header />
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header   text-center">
          <h1>Request Details</h1>
          <p>View and manage subsidy request information.</p>
        </div>
        <div className="card-body">
          <p><strong>Application Number:</strong> {requestDetails.applicationNumber}</p>
          <p><strong>Name:</strong> {requestDetails.name}</p>
          <p><strong>Email:</strong> {requestDetails.email}</p>
          <p><strong>Phone:</strong> {requestDetails.phone}</p>
          <p><strong>Details:</strong> {requestDetails.details}</p>
          <p><strong>Status:</strong> {requestDetails.status}</p>
          <p><strong>Type:</strong> {requestDetails.type}</p>
          <p><strong>Submitted On:</strong> {new Date(requestDetails.createdAt).toLocaleString()}</p>

          <div className="text-center mt-4">
            <button
              className="btn btn-success me-2"
              onClick={handleAccept}
            >
              <i className="bi bi-check-circle"></i> Accept Subsidy
            </button>
            <button
              className="btn btn-danger me-2"
              onClick={handleReject}
            >
              <i className="bi bi-x-circle"></i> Reject Subsidy
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleGoBack}
            >
              <i className="bi bi-arrow-left"></i> Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default RequestDetail;
