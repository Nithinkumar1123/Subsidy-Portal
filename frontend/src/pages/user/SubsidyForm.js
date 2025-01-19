import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Card, Button, Form, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import {  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaRegFileAlt,
  FaMoneyCheckAlt,
  FaGraduationCap,
  FaTractor,
  FaHeartbeat,
  FaGlobe,
  FaHome,
  FaCar,
  FaBolt,
  FaArrowLeft, // Adding an arrow icon for the back button
  FaFilePdf
} from 'react-icons/fa';
import 'animate.css';
import Header from '../Header';
import Footer from '../Footer';



const SubsidyForm = () => {
  const { type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'Guest'; // Retrieve username from state or fallback to 'Guest'
  ; // For navigating back
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    income: '',
    educationLevel: '',
    landSize: '',
    healthCondition: '',
    region: '',
    houseType: '',
    rentOrLoan: '',
    dependents: '',
    vehicleType: '',
    transportationCost: '',
    commuteDistance: '',
    energySource: '',
    energyBill: '',
    energyConsumption: '',
    documents: '', // New field
    bankAccount: '', // New field
    bankIFSC: '', // New field
    bankName: '', // New field
    accountHolder: '', // New field
  });
  const [applicationNumber, setApplicationNumber] = useState(null);
  const [error, setError] = useState(
    
  );
  const [loading, setLoading] = useState(false);
  const handleTrackSubsidy = () => {
    // Redirect to tracking page with application number
    window.location.href = `/subsidy-status/${applicationNumber}`;
  };


  // Mapping form types to background images
  const bgImages = {
    education: '/images/education-bg.jpg',
    agriculture: '/images/agriculture-bg.jpg',
    health: '/images/health-bg.jpg',
    housing: '/images/housing-bg.jpg',
    transportation: '/images/transportation-bg.jpg',
    energy: '/images/energy-bg.jpg',
    default: '/images/default-bg.jpg',
  };

  // Get the background image based on the form type
  const bgImage = bgImages[type] || bgImages.default;

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setApplicationNumber(null);
    setLoading(true);

    const phoneRegex = /^[6-9][0-9]{9}$/;
  if (!phoneRegex.test(formData.phone)) {
    setError('Please enter a valid phone number.(number should start from 6 to 9 and it should contain only 10 digit number) ');
    setLoading(false);
    return;
  }

    try {
      const response = await axios.post('https://subsidy-portal.onrender.com/subsidy', {
        username,
        type,
        ...formData,
      });
      setApplicationNumber(response.data.applicationNumber);
      setFormData({
        name: '',
        email: '',
        phone: '',
        details: '',
        income: '',
        educationLevel: '',
        landSize: '',
        healthCondition: '',
        region: '',
        houseType: '',
        rentOrLoan: '',
        dependents: '',
        vehicleType: '',
        transportationCost: '',
        commuteDistance: '',
        energySource: '',
        energyBill: '',
        energyConsumption: '',
      });
    } catch (error) {
      setError('Failed to submit the subsidy form. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderDynamicFields = () => {
    switch (type) {
      case 'education':
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEducationLevel" className="mb-4">
                  <Form.Label>
                    <FaGraduationCap /> Highest Level of Education
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    required
                    placeholder="E.g., Undergraduate, Postgraduate"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formIncome" className="mb-4">
                  <Form.Label>
                    <FaMoneyCheckAlt /> Parent's Annual Income (INR)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    required
                    placeholder="Enter annual income"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
  <Form.Group controlId="formPanAadhar" className="mb-4">
    <Form.Label>
      <FaFilePdf /> PAN/Aadhar (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="panAadhar"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, panAadhar: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="form10thMarksheet" className="mb-4">
    <Form.Label>
      <FaFilePdf /> 10th Marksheets (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="tenthMarksheet"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, tenthMarksheet: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="form12thMarksheet" className="mb-4">
    <Form.Label>
      <FaFilePdf /> 12th Marksheets (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="twelfthMarksheet"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, twelfthMarksheet: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formDegreeMarksheet" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Degree Marksheets if you have (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="degreeMarksheet"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, degreeMarksheet: e.target.files[0] });
      }}
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formAdmitLetter" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Admit Letter (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="admitLetter"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, admitLetter: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formParentsPanAadhar" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Parent's PAN & Aadhar (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="parentsPanAadhar"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, parentsPanAadhar: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formParentsPaySlip" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Parent's 3-month Pay Slip (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="parentsPaySlip"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, parentsPaySlip: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formParentsBankStatement" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Parent's 6-month Bank Statement (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="parentsBankStatement"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, parentsBankStatement: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formPassport" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Passport (PDF), if you have
    </Form.Label>
    <Form.Control
      type="file"
      name="passport"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, passport: e.target.files[0] });
      }}
    />
  </Form.Group>
</Col>


              
            </Row>

            
          </>
        );

      case 'agriculture':
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formLandSize" className="mb-4">
                  <Form.Label>
                    <FaTractor /> Land Size (in acres)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleChange}
                    required
                    placeholder="Enter land size"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formRegion" className="mb-4">
                  <Form.Label>
                    <FaGlobe /> Region/Location
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    placeholder="Enter your region"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
  <Form.Group controlId="formLandOwnership" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Land Ownership Document (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="landOwnership"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, landOwnership: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formSoilTestReport" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Recent Soil Test Report (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="soilTestReport"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, soilTestReport: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formAgriculturalIncomeProof" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Agricultural Income Proof (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="agriculturalIncomeProof"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, agriculturalIncomeProof: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formFarmIdentityCard" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Farm Identity Card (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formFarmingEquipment" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Farming Equipment Proof (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formFarmRegistration" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Farm Registration Certificate (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>


            </Row>
          </>
        );

      case 'health':
        return (
          <>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formHealthCondition" className="mb-4">
                  <Form.Label>
                    <FaHeartbeat /> Health Condition
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="healthCondition"
                    value={formData.healthCondition}
                    onChange={handleChange}
                    required
                    placeholder="Describe your health condition"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
  <Form.Group controlId="formMedicalCertificate" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Medical Certificate (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="medicalCertificate"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, medicalCertificate: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formHealthInsurance" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Health Insurance Document (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="healthInsurance"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, healthInsurance: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formIncomeProof" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Income Proof (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formIdentityProof" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Identity Proof (Aadher/Pan) (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formAddressProof" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Address Proof (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formPrescriptionReport" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Prescription/Medical Report (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

            </Row>
          </>
        );

      case 'housing':
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formHouseType" className="mb-4">
                  <Form.Label>
                    <FaHome /> House Type
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="houseType"
                    value={formData.houseType}
                    onChange={handleChange}
                    required
                    placeholder="E.g., Rented, Owned"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formRentOrLoan" className="mb-4">
                  <Form.Label>
                    <FaMoneyCheckAlt /> Monthly Rent/Loan (INR)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="rentOrLoan"
                    value={formData.rentOrLoan}
                    onChange={handleChange}
                    required
                    placeholder="Enter monthly rent or loan"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formDependents" className="mb-4">
                  <Form.Label>
                    <FaUser /> Number of Dependents
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="dependents"
                    value={formData.dependents}
                    onChange={handleChange}
                    required
                    placeholder="Enter number of dependents"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
  <Form.Group controlId="formProofOwnership" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Proof of Ownership or Rent Agreement (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="proofOwnership"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, proofOwnership: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formHouseTaxReceipts" className="mb-4">
    <Form.Label>
      <FaFilePdf /> House Tax Receipts (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="houseTaxReceipts"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, houseTaxReceipts: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formPropertyRegistration" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Property Registration Documents (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formIncomeProof" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Income Proof (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formUtilityBills" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Utility Bills (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formFamilyMemberDeclaration" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Family Member Declaration (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>
            </Row>
          </>
        );

      case 'transportation':
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formVehicleType" className="mb-4">
                  <Form.Label>
                    <FaCar /> Vehicle Type
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                    placeholder="E.g., Car, Bike, Public Transport"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formTransportationCost" className="mb-4">
                  <Form.Label>
                    <FaMoneyCheckAlt /> Monthly Transportation Cost ( INR)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="transportationCost"
                    value={formData.transportationCost}
                    onChange={handleChange}
                    required
                    placeholder="Enter monthly transportation cost"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCommuteDistance" className="mb-4">
                  <Form.Label>
                    <FaGlobe /> Commute Distance (km)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="commuteDistance"
                    value={formData.commuteDistance}
                    onChange={handleChange}
                    required
                    placeholder="Enter commute distance"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
  <Form.Group controlId="formVehicleRegistration" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Vehicle Registration Document (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="vehicleRegistration"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, vehicleRegistration: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formFuelBill" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Fuel Bill or Maintenance Receipts (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="fuelBill"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, fuelBill: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formIncomeProof" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Income Proof (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formVehicleInsurance" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Vehicle Insurance Document (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formDriversLicense" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Driver's License (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

            </Row>
          </>
        );

      case 'energy':
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEnergySource" className="mb-4">
                  <Form.Label>
                    <FaBolt /> Energy Source
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="energySource"
                    value={formData.energySource}
                    onChange={handleChange}
                    required
                    placeholder="E.g., Solar, Electricity"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEnergyBill" className="mb-4">
                  <Form.Label>
                    <FaMoneyCheckAlt /> Monthly Energy Bill ( INR)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="energyBill"
                    value={formData.energyBill}
                    onChange={handleChange}
                    required
                    placeholder="Enter monthly energy bill"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEnergyConsumption" className="mb-4">
                  <Form.Label>
                    <FaRegFileAlt /> Energy Consumption (kWh)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="energyConsumption"
                    value={formData.energyConsumption}
                    onChange={handleChange}
                    required
                    placeholder="Enter energy consumption"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
  <Form.Group controlId="formRecentEnergyBills" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Recent Energy Bills (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="recentEnergyBills"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, recentEnergyBills: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formEnergyReports" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Energy Consumption Reports (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="energyReports"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, energyReports: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formIncomeProof" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Income Proof (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formElectricityMeterDetails" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Electricity Meter Details (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

<Col md={6}>
  <Form.Group controlId="formProofOfResidence" className="mb-4">
    <Form.Label>
      <FaFilePdf /> Proof of Residence (PDF)
    </Form.Label>
    <Form.Control
      type="file"
      name="documents"
      accept="application/pdf"
      onChange={(e) => {
        setFormData({ ...formData, documents: e.target.files[0] });
      }}
      required
    />
  </Form.Group>
</Col>

            </Row>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div
        className="subsidy-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <Container className="my-5 animate__animated animate__fadeIn">
          <Row className="justify-content-center">
            <Col md={12} lg={10}>
              <Card className="shadow-lg rounded-4 subsidy-card">
                <Card.Body>
                  <h1 className="text-center text-gradient mb-4">
                    Apply for {type.charAt(0).toUpperCase() + type.slice(1)} Subsidy
                  </h1>

                  

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="formName" className="mb-4">
                          <Form.Label>
                            <FaUser /> Full Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formEmail" className="mb-4">
                          <Form.Label>
                            <FaEnvelope /> Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="formPhone" className="mb-4">
                          <Form.Label>
                            <FaPhoneAlt /> Phone Number
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formDetails" className="mb-4">
                          <Form.Label>
                            <FaRegFileAlt /> Additional Details
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            placeholder="Provide additional info"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    {renderDynamicFields()}
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-50 py-2 mt-3 d-flex justify-content-center align-items-center mx-auto  "
                      disabled={loading}
                      
                    >
                      {loading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </Form>
                  {applicationNumber && (
                    <Alert variant="success" className="mt-4">
                      Application submitted successfully! Application Number:{' '}
                      <strong>{applicationNumber}</strong> 
                      <div class="d-flex justify-content-center">
                      <button 
                      onClick={handleTrackSubsidy}
                      className="btn btn-success btn-lg mt-3 px-4 shadow "

                      >
                        Track Your Subsidy</button>
                        </div>
                    </Alert>
                  )}
                  {error && (
                    <Alert variant="danger" className="mt-4">
                      {error}
                    </Alert>
                  )}
                  {/* Back Button */}
                  <br></br><Button
      variant="outline"
      className="mb-3"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '30px',
        border: '2px solid rgb(1, 8, 16)',
        backgroundColor: 'transparent',
        color: 'black',
        transition: 'all 0.3s ease', // Smooth transition
        boxShadow: '0 4px 8px rgba(0, 123, 255, 0.2)', // Soft shadow
      }}
      onClick={() => navigate('/login/user')} // Navigate to /user on button click
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';
        e.target.style.boxShadow = '0 6px 12px rgba(0, 123, 255, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = 'black';
        e.target.style.boxShadow = '0 4px 8px rgba(0, 123, 255, 0.2)';
      }}
    >
      <FaArrowLeft style={{ transition: 'transform 0.3s ease' }} />
      Back to Dashboard
    </Button>
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

export default SubsidyForm;
