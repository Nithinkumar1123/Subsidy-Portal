import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowRight, FaHandshake } from 'react-icons/fa'; // Icons for the buttons
import Header from '../Header';
import Footer from '../Footer';

const GovernmentPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
    <div
      style={{
        background: 'linear-gradient(135deg, rgb(243, 241, 246), #2575fc)', // Smooth gradient background
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        position: 'relative',
      }}
    >
      {/* Overlay to darken the background for better contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // background: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
        }}
      />

      <Container className="text-center text-white position-relative">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card
              className="shadow-lg rounded-4 p-4"
              style={{
                background: 'rgba(255, 255, 255, 0.9)', // Light card with opacity for contrast
              }}
            >
              <Card.Body>
                {/* Header */}
                <h1
                  className="text-primary mb-4"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '36px',
                    fontWeight: '700',
                    color: '#007bff',
                  }}
                >
                  Welcome to the Government Dashboard
                </h1>

                <Row className="mb-4">
                  {/* Track Subsidy Button */}
                  <Col>
                    <Button
                      variant="primary"
                      size="lg"
                      block
                      onClick={() => navigate('/tracking-page')}
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        padding: '12px 25px',
                        borderRadius: '50px',
                        boxShadow: '0 10px 20px rgba(0, 123, 255, 0.3)',
                        transition: 'all 0.3s ease-in-out',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.backgroundColor = '#0056b3';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.backgroundColor = '#007bff';
                      }}
                    >
                      <FaArrowRight style={{ marginRight: '10px', fontSize: '20px' }} />
                      Track Subsidy
                    </Button>
                  </Col>
                </Row>

                <Row>
                  {/* Request Subsidy Button */}
                  <Col>
                    <Button
                      variant="success"
                      size="lg"
                      block
                      onClick={() => navigate('/request-page')}
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        padding: '12px 25px',
                        borderRadius: '50px',
                        boxShadow: '0 10px 20px rgba(40, 167, 69, 0.3)',
                        transition: 'all 0.3s ease-in-out',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.backgroundColor = '#218838';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.backgroundColor = '#28a745';
                      }}
                    >
                      <FaHandshake style={{ marginRight: '10px', fontSize: '20px' }} />
                      Subsidy Request
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
    </>
  );
};

export default GovernmentPage;
