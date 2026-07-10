import React from 'react';

const Footer = () => {
  return (
    <footer id="kontakt" style={{ backgroundColor: '#041d42', color: '#ffffff' }} className="py-5">
      <div className="container">
        <div className="row g-4 text-center text-md-start justify-content-between">
          
          {/* ১. লোগো এবং ইমারজেন্সি BOX */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <img src="/logo.webp" alt="SIBAG Logo" className="mb-4" style={{ maxWidth: '190px', height: 'auto' }} />
            <div className="d-flex align-items-center p-2 border rounded mb-3 mb-md-0" style={{ width: '200px', borderColor: '#8cc63f' }}>
              <div className="fw-bold me-3" style={{ fontSize: '24px', color: '#8cc63f' }}>24/7</div>
              <div className="text-start" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                <span className="fw-bold">NOTDIENST</span><br />
                <span>AUF ANFRAGE</span>
              </div>
            </div>
          </div>

          {/* ২. LEISTUNGEN */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#8cc63f', fontSize: '15px' }}>LEISTUNGEN</h6>
            <ul className="list-unstyled ps-0">
              <li className="mb-1"><a href="#leistungen" className="text-white text-decoration-none opacity-75" style={{ fontSize: '13.5px' }}>Gebäudereinigung</a></li>
              <li className="mb-1"><a href="#leistungen" className="text-white text-decoration-none opacity-75" style={{ fontSize: '13.5px' }}>Baureinigung</a></li>
              <li className="mb-1"><a href="#leistungen" className="text-white text-decoration-none opacity-75" style={{ fontSize: '13.5px' }}>Bauleistungen</a></li>
              <li className="mb-1"><a href="#leistungen" className="text-white text-decoration-none opacity-75" style={{ fontSize: '13.5px' }}>Facility Service</a></li>
            </ul>
          </div>

          {/* ৩. UNTERNEHMEN */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#8cc63f', fontSize: '15px' }}>UNTERNEHMEN</h6>
            <ul className="list-unstyled ps-0">
              <li className="mb-1"><a href="#uber-uns" className="text-white text-decoration-none opacity-75" style={{ fontSize: '13.5px' }}>Über uns</a></li>
              <li className="mb-1"><a href="#referenzen" className="text-white text-decoration-none opacity-75" style={{ fontSize: '13.5px' }}>Referenzen</a></li>
              <li className="mb-1"><a href="#kontakt" className="text-white text-decoration-none opacity-75" style={{ fontSize: '13.5px' }}>Karriere</a></li>
              <li className="mb-1"><a href="#kontakt" className="text-white text-decoration-none opacity-75" style={{ fontSize: '13.5px' }}>Kontakt</a></li>
            </ul>
          </div>

          {/* ৪. KONTAKT (স্মার্ট অ্যালাইনমেন্ট) */}
              <div className="col-12 col-md-3">
                <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#8cc63f', fontSize: '15px' }}>KONTAKT</h6>
                <ul className="list-unstyled ps-0" style={{ fontSize: '14px' }}>
                  <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                    <span>📞</span> <span>+49 172 6302135</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                    <span>✉️</span> <span>Info.sibaggmbh@web.de</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start justify-content-center justify-content-md-start gap-2">
                    <span>📍</span> <span>Ebersstraße 61, 10827 Berlin</span>
                  </li>
                </ul>
             
              {/* ট্যাক্স আইডি সেকশন - গ্যাপ ঠিক করে দেওয়া হয়েছে */}
                  <div style={{ fontSize: '14px', color: '#a0aec0', marginTop: '-5px' }}>
                    <div className="d-flex gap-2 mb-1">
                      <span style={{ width: '90px' }}>Umsatz ID Nr:</span>
                      <span className="text-white">DE463530931</span>
                    </div>
                    <div className="d-flex gap-2">
                      <span style={{ width: '90px' }}>Steuern Nr:</span>
                      <span className="text-white">29/533/31003</span>
                    </div>
                  </div>
              </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;