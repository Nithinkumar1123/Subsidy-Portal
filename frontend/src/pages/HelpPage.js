import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const HelpPage = () => {
  return (
    <>
      <Header />
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#003399', fontSize: '24px' }}>Help & Support</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>
          Your Guide to Accessing Subsidy Programs and Assistance
        </p>
      </header>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>Introduction</h3>
        <p>
          We are here to help you navigate the <strong>National Subsidy Program Portal</strong>. Whether you have questions about eligibility, application processes, or technical support, this page provides the resources you need for seamless access to government subsidies.
        </p>
      </section>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>How Can We Assist You?</h3>
        <ul>
          <li><strong>FAQs:</strong> Visit the <a href="/faq" style={{ color: '#003399' }}>FAQ</a> page for answers to common questions.</li>
          <li><strong>Contact Support:</strong> Reach out to us via email or helpline for additional help.</li>
          <li><strong>Application Guidance:</strong> Check the <a href="/guide" style={{ color: '#003399' }}>Application Process</a> page for instructions.</li>
        </ul>
      </section>

      
    </div>
    <Footer />
    </>
  );
};

export default HelpPage;
