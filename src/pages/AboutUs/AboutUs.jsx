import React from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      <Helmet>
        <title>Über Uns | Ihre Experten für Facility Service & Bauleistungen in Berlin | S.I.B.A.G</title>
        <meta 
          name="description" 
          content="Lernen Sie S.I.B.A.G Facility Service GmbH kennen. Wir stehen für Qualität, Werterhalt und nachhaltige Lösungen in der Immobilienbetreuung in Berlin. Erfahren Sie mehr über unsere Mission." 
        />
        <link rel="canonical" href="https://sibaggmbh.com/ueber-uns" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Über Uns - S.I.B.A.G Facility Service GmbH Berlin" />
        <meta property="og:description" content="Erfahren Sie mehr über die Vision und Mission von S.I.B.A.G. Ihr zuverlässiger Partner für Gebäudereinigung und Bauleistungen." />
        <meta property="og:url" content="https://sibaggmbh.com/ueber-uns" />
      </Helmet>

      {/* Hero Sektion */}
      <section className="about-hero-modern">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-3 fw-bolder text-white">Über Uns</h1>
            <p className="hero-subtext">Ihr Partner für Exzellenz in Facility Service & Bauwesen.</p>
          </div>
        </div>
      </section>

      {/* Content Sektion */}
      <section className="about-content py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="about-image-wrapper">
                <img src="/ambulence.webp" alt="S.I.B.A.G Team vor Ort" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-text-box">
                <h2 className="mb-4">S.I.B.A.G – Qualität mit System</h2>
                <p className="mb-4 text-secondary">
                  Wir setzen neue Maßstäbe in der Immobilienbetreuung. Unsere langjährige Erfahrung kombiniert mit modernster Technik sorgt für nachhaltige Ergebnisse, die überzeugen.
                </p>
                <div className="highlight-grid">
                  <div className="highlight-item">
                    <h5>Vision</h5>
                    <p>Führender Anbieter für moderne Gebäudetechnik in Berlin.</p>
                  </div>
                  <div className="highlight-item">
                    <h5>Mission</h5>
                    <p>Werterhalt und Effizienz für jedes Objekt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;