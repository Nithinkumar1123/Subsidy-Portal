import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaTimesCircle, FaArrowRight } from 'react-icons/fa'; // Import icons
import Header from '../Header';
import Footer from '../Footer';

const TrackingStatus = () => {
  const { applicationNumber } = useParams();
  const [statusDetails, setStatusDetails] = useState(null);
  const [error, setError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const statusSteps = [
    "In the process",
    "Subsidy is approved and go to next step on bank",
    "Subsidy is rejected try next time",
    "The subsidy reached the user",
    "User got subsidy and verified successfully"
  ];

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/subsidy/requests/${applicationNumber}`);
        setStatusDetails(response.data);
      } catch (err) {
        console.error('Error fetching subsidy status:', err);
        if (err.response && err.response.status === 404) {
          setError('Subsidy not found.');
        } else {
          setError('Failed to fetch subsidy status.');
        }
      }
    };

    fetchStatus();
  }, [applicationNumber]);

  const handleVerifySubsidy = async () => {
    if (statusDetails.status === "The subsidy reached the user") {
      setIsUpdating(true);
      try {
        const updatedStatus = { status: "User got subsidy and verified successfully" };
        await axios.put(`http://localhost:5000/subsidy/update/${applicationNumber}`, updatedStatus);

        setStatusDetails((prevStatus) => ({
          ...prevStatus,
          status: "User got subsidy and verified successfully"
        }));
      } catch (err) {
        console.error('Error updating subsidy status:', err);
        setError('Failed to update subsidy status.');
      } finally {
        setIsUpdating(false);
      }
    }
  };

  if (error) {
    return <p className="text-danger text-center font-weight-bold">{error}</p>;
  }

  if (!statusDetails) {
    return <p className="text-center font-italic">Loading subsidy status...</p>;
  }

  const currentStepIndex = statusSteps.indexOf(statusDetails.status);

  return (
    <>
    < Header />
    <div className="container mt-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary font-weight-bold" style={{ letterSpacing: '2px' }}>Subsidy Tracking</h1>
        <p className="lead text-muted"><strong>Application Number:</strong> {statusDetails.applicationNumber}</p>
      </div>

      {/* Status Steps - Card */}
      <div className="card shadow-lg mb-4 border-light">
        <div className="card-header bg-primary text-white rounded-top">
          <h3 className="m-0">Tracking Steps</h3>
        </div>

         {/* Progress Bar */}
      <div className="mb-4">
        <h5 className="text-center">Process Progress</h5>
        <div className="progress" style={{ height: '12px' }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${((currentStepIndex + 1) / statusSteps.length) * 100}%` }}
            aria-valuenow={currentStepIndex + 1}
            aria-valuemin="0"
            aria-valuemax={statusSteps.length}
          >
            {`${Math.round(((currentStepIndex + 1) / statusSteps.length) * 100)}%`}
          </div>
        </div>
      </div>


        <div className="card-body p-4">
          <ul className="list-group">
            {statusSteps.map((step, index) => {
              if (statusDetails.status === "Subsidy is rejected try next time") {
                if (step === "Subsidy is rejected try next time") {
                  return (
                    <li key={index} className="list-group-item text-white bg-danger">
                      <FaTimesCircle className="mr-2" /> {step}
                    </li>
                  );
                }
                return null;
              }

              if (step === "Subsidy is rejected try next time") {
                return null;
              }

              return (
                <li
                  key={index}
                  className={`list-group-item ${index <= currentStepIndex ? 'bg-success text-white' : 'bg-light text-secondary'}`}
                  style={{ transition: 'all 0.3s ease-in-out' }}
                >
                  {index <= currentStepIndex ? (
                    <FaCheckCircle className="mr-2" />
                  ) : (
                    <FaArrowRight className="mr-2" />
                  )}
                  {step}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

     

      {/* Verify Subsidy Button */}
      {statusDetails.status === "The subsidy reached the user" && (
        <div className="text-center">
          <button
            onClick={handleVerifySubsidy}
            disabled={isUpdating}
            className="btn btn-success btn-lg px-5 py-3"
            style={{ borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            {isUpdating ? (
              <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
            ) : null}
            {isUpdating ? "Updating..." : "Verify Subsidy"}
          </button>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default TrackingStatus;
