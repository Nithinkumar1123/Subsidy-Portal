import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
      <Header />


    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#003399', fontSize: '24px' }}>About Us</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>
          Empowering Citizens Through Subsidy Programs for a Brighter Future
        </p>
      </header>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>Introduction</h3>
        <p>
          Welcome to the <strong>National Subsidy Program Portal</strong>, a dedicated initiative by the Government of India
          to provide financial assistance and support to eligible citizens, businesses, and organizations. Our platform serves
          as a bridge to deliver transparent, effective, and accessible subsidy services across the nation.
        </p>
      </section>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>Our Vision</h3>
        <p>
          "To empower individuals and organizations by ensuring equitable access to government resources, fostering growth,
          and reducing economic disparities."
        </p>
      </section>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>Our Mission</h3>
        <ul>
          <li>Facilitate a streamlined process for applying and receiving subsidies.</li>
          <li>Promote transparency and accountability in subsidy distribution.</li>
          <li>Ensure that government benefits reach the deserving and underprivileged sections of society.</li>
          <li>Support innovation and economic development through specialized subsidy programs.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#003399' }}>What We Offer</h3>
        <ul>
          <li><strong>Financial Assistance:</strong> Direct benefit transfers and grants for various sectors such as agriculture, education, housing, and healthcare.</li>
          <li><strong>Transparent Processes:</strong> A fully digital platform for easy application, tracking, and approval of subsidies.</li>
          <li><strong>Guidance & Support:</strong> Assistance for applicants through FAQs, helplines, and regional offices.</li>
          <li><strong>Special Schemes:</strong> Customized programs targeting rural development, women empowerment, and small businesses.</li>
        </ul>
      </section>

    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
