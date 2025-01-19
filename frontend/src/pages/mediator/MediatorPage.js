import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Footer from '../Footer';
import Header from '../Header';

const MediatorPage = () => {
  const [subsidies, setSubsidies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApprovedSubsidies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/subsidy/approved-subsidies');
        setSubsidies(response.data);
      } catch (err) {
        console.error('Error fetching approved subsidies:', err);
        setError('Failed to fetch approved subsidies.');
      }
    };
    fetchApprovedSubsidies();
  }, []);

  const handleApprove = async (id) => {
    try {
      const updatedStatus = { status: "The subsidy reached the user" };
      await axios.put(`http://localhost:5000/subsidy/requests/${id}`, updatedStatus);
      setSubsidies(subsidies.filter((subsidy) => subsidy._id !== id)); // Remove the approved subsidy from the list
    } catch (err) {
      console.error('Error updating subsidy status:', err);
      setError('Failed to update subsidy status.');
    }
  };

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    );
  }

  if (subsidies.length === 0) {
    return (
      <div className="alert alert-info text-center" role="alert">
        No subsidies available for approval.
      </div>
    );
  }

  return (
    <>
    <Header />
    <div className="container mt-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary font-weight-bold">Mediator Dashboard</h1>
        <p className="lead text-muted">Manage Subsidy Requests</p>
      </div>

      {/* Table of Subsidies */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Application Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Details</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subsidies.map((subsidy) => (
              <tr key={subsidy._id}>
                <td>{subsidy.applicationNumber}</td>
                <td>{subsidy.name}</td>
                <td>{subsidy.email}</td>
                <td>{subsidy.phone}</td>
                <td>{subsidy.details}</td>
                <td>{subsidy.type}</td>
                <td>
                  <span className={subsidy.status === "The subsidy reached the user" ? 'text-success' : 'text-warning'}>
                    {subsidy.status}
                  </span>
                </td>
                <td>
                  {subsidy.status !== "The subsidy reached the user" && (
                    <button
                      onClick={() => handleApprove(subsidy._id)}
                      className="btn btn-success"
                    >
                      <FaCheckCircle className="mr-2" />
                      Approve
                    </button>
                  )}
                  {subsidy.status === "The subsidy reached the user" && (
                    <button className="btn btn-secondary" disabled>
                      <FaCheckCircle className="mr-2" />
                      Approved
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MediatorPage;
