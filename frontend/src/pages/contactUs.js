import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#003399', fontSize: '24px' }}>Contact Us</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>Reach Out to Us for Any Queries Regarding the Government Subsidy Program</p>
      </header>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>General Enquiries</h3>
        <p>Email: <a href="mailto:info@govsubsidy.gov.in" style={{ color: '#003399', textDecoration: 'underline' }}>info@govsubsidy.gov.in</a></p>
        <p>Toll-Free Helpline: 1800-123-4567 (Available: Monday to Friday, 9:00 AM to 5:00 PM)</p>
      </section>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>Regional Offices</h3>
        <ul>
          <li>
            <strong>North Region (New Delhi):</strong><br />
            Address: F-205, Main Road, Munirka, New Delhi - 110067<br />
            Phone: +91-9871-292398<br />
            Email: <a href="mailto:northregion@govsubsidy.gov.in" style={{ color: '#003399', textDecoration: 'underline' }}>northregion@govsubsidy.gov.in</a>
          </li>
          <li>
            <strong>South Region (Bangalore):</strong><br />
            Address: No. 25, 12th Cross, Indiranagar, Bangalore - 560038<br />
            Phone: +91-9901-191551<br />
            Email: <a href="mailto:southregion@govsubsidy.gov.in" style={{ color: '#003399', textDecoration: 'underline' }}>southregion@govsubsidy.gov.in</a>
          </li>
           -- Add more regions similarly --
        </ul>
      </section>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>Technical Support</h3>
        <p>Email: <a href="mailto:techsupport@govsubsidy.gov.in" style={{ color: '#003399', textDecoration: 'underline' }}>techsupport@govsubsidy.gov.in</a></p>
        <p>Phone: +91-9123-456789</p>
      </section>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>Feedback and Suggestions</h3>
        <p>Email: <a href="mailto:feedback@govsubsidy.gov.in" style={{ color: '#003399', textDecoration: 'underline' }}>feedback@govsubsidy.gov.in</a></p>
      </section>

     
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;
