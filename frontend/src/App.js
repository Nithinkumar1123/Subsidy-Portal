import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import GovernmentPage from './pages/government/GovernmentPage';
import RequestDetail from './pages/government/RequestDetail';
import TrackingPage from './pages/government/TrackingPage';
import RequestPage from './pages/government/RequestPage';
import TrackingStatus from './pages/government/TrackingStatus';
import MediatorPage from './pages/mediator/MediatorPage';

import UserPage from './pages/user/UserPage';
import ApplySubsidy from './pages/user/ApplySubsidy';
import SubsidyForm from './pages/user/SubsidyForm';
import TrackSubsidy from './pages/user/TrackSubsidy';
import SubsidyStatus from './pages/user/SubsidyStatus';
import ContactUs from './pages/contactUs';
import AboutUs from './pages/AboutUs';
import Help from './pages/HelpPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login/:role" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/tracking-page" element={<TrackingPage />} />
        <Route path="/request-page" element={<RequestPage />} />
        <Route path="/tracking-status/:applicationNumber" element={<TrackingStatus />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/mediator" element={<MediatorPage />} />
        <Route path="/apply-subsidy" element={<ApplySubsidy />} />
        <Route path="/apply-subsidy/form/:type" element={<SubsidyForm />} />
        <Route path="/track-subsidy" element={<TrackSubsidy />} />
        <Route path="/subsidy-status/:applicationNumber" element={<SubsidyStatus />} />
        <Route path="/request/:id" element={<RequestDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
