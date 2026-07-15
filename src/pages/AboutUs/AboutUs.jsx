import React from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="container py-5" style={{ fontFamily: 'sans-serif' }}>
      <Helmet>
        <title>Über Uns | Ihre Experten für Facility Service & Bauleistungen in Berlin | S.I.B.A.G</title>
      </Helmet>

      {/* Hero Sektion */}
      <section style={{ marginTop: '-20px', marginBottom: '50px' }}>
        <div className="custom-box-width"> 
          <div className="row g-0 text-white shadow-lg" style={{ backgroundColor: '#0f2c59', borderRadius: '5px' }}>
            <div className="col-12 p-4 p-md-5">
              <div className="row align-items-center">
                
                {/* বাম পাশে: About Us আর্টিকেল */}
                <div className="col-md-7 mb-4 mb-md-0">
                  <h3 className="fw-bold mb-3" style={{ color: '#8cc63f', borderBottom: '2px solid #8cc63f', display: 'inline-block' }}>Über Uns</h3>
                  <p className="lead mb-3">S.I.B.A.G Facility Service GmbH – Qualität mit System.</p>
                  <p className="opacity-75" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Wir setzen neue Maßstäbe in der Immobilienbetreuung. Unsere langjährige Erfahrung kombiniert mit modernster Technik sorgt für nachhaltige Ergebnisse, die überzeugen. 
                    Von der Gebäudereinigung bis hin zu komplexen Bauleistungen stehen wir für Professionalität, Effizienz und Werterhalt. Vertrauen Sie auf einen Partner, der Ihre Immobilie mit Sorgfalt betreut.
                  </p>
                </div>

                
                {/* ডান পাশে: ব্র্যান্ডিং ইনফো */}
              <div className="col-md-5 text-md-end text-center mt-4 mt-md-0 border-start-md border-secondary">
                <div className="fw-bold h2 mb-2" style={{ color: '#ffffff' }}>
                  S.I.B.A.G
                </div>
                <div className="fw-bold mb-3" style={{ color: '#8cc63f', letterSpacing: '1px' }}>
                  FACILITY SERVICE GMBH
                </div>
                <div className="small opacity-50 px-3" style={{ fontSize: '11px', lineHeight: '1.8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                  BAULEISTUNGEN • GEBÄUDEREINIGUNG • BAUREINIGUNG • FACILITY SERVICE
                </div>
              </div>

              </div>
            </div>
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