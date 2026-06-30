import React from 'react';

const Footer = () => {
  return (
    /* 🎯 id="kontakt" এবং ব্যাকগ্রাউন্ড সেট করা হলো */
    <footer id="kontakt" style={{ backgroundColor: '#041d42', color: '#ffffff' }} className="py-5">
      <div className="container">
        {/* 🚀 justify-content-between: এটি ডেক্সটপে কলামগুলোকে পুরো উইডথ জুড়ে সুন্দরভাবে ছড়িয়ে দেবে, ডানের গ্যাপ কমাবে */}
        <div className="row g-5 text-center text-md-start justify-content-between">
          
          {/* ১. লোগো এবং ইমারজেন্সি BOX */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <img 
              src="/logo.webp" 
              alt="SIBAG Logo" 
              className="mb-4" 
              style={{ maxWidth: '190px', height: 'auto' }} 
            />
            
            <div 
              className="d-flex align-items-center p-2 border rounded mb-3 mb-md-0" 
              style={{ width: '200px', borderColor: '#8cc63f' }}
            >
              <div className="fw-bold me-3" style={{ fontSize: '24px', color: '#8cc63f' }}>24/7</div>
              <div className="text-start" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                <span className="fw-bold">NOTDIENST</span><br />
                <span>AUF ANFRAGE</span>
              </div>
            </div>
          </div>

          {/* ২. LEISTUNGEN (ps-0 দিয়ে হেডিংয়ের সাথে নিচের লেখা ১০০% সোজাসুজি এলাইন করা হলো) */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#8cc63f', fontSize: '15px', letterSpacing: '0.5px' }}>
              LEISTUNGEN
            </h6>
            <ul className="list-unstyled mb-0 ps-0">
              <li className="mb-2.5"><a href="#leistungen" className="text-white text-decoration-none opacity-75 hov-opacity-100" style={{ fontSize: '13.5px' }}>Gebäudereinigung</a></li>
              <li className="mb-2.5"><a href="#leistungen" className="text-white text-decoration-none opacity-75 hov-opacity-100" style={{ fontSize: '13.5px' }}>Baureinigung</a></li>
              <li className="mb-2.5"><a href="#leistungen" className="text-white text-decoration-none opacity-75 hov-opacity-100" style={{ fontSize: '13.5px' }}>Bauleistungen</a></li>
              <li className="mb-2.5"><a href="#leistungen" className="text-white text-decoration-none opacity-75 hov-opacity-100" style={{ fontSize: '13.5px' }}>Facility Service</a></li>
            </ul>
          </div>

          {/* ③. UNTERNEHMEN (ps-0 ব্যবহার করা হয়েছে) */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#8cc63f', fontSize: '15px', letterSpacing: '0.5px' }}>
              UNTERNEHMEN
            </h6>
            <ul className="list-unstyled mb-0 ps-0">
              <li className="mb-2.5"><a href="#uber-uns" className="text-white text-decoration-none opacity-75 hov-opacity-100" style={{ fontSize: '13.5px' }}>Über uns</a></li>
              <li className="mb-2.5"><a href="#referenzen" className="text-white text-decoration-none opacity-75 hov-opacity-100" style={{ fontSize: '13.5px' }}>Referenzen</a></li>
              <li className="mb-2.5"><a href="#kontakt" className="text-white text-decoration-none opacity-75 hov-opacity-100" style={{ fontSize: '13.5px' }}>Karriere</a></li>
              <li className="mb-2.5"><a href="#kontakt" className="text-white text-decoration-none opacity-75 hov-opacity-100" style={{ fontSize: '13.5px' }}>Kontakt</a></li>
            </ul>
          </div>

          {/* ৪. KONTAKT (ডানে চাপানোর জন্য এবং হেডিং এলাইনমেন্টের জন্য col-md-3 ও ps-0 সেট করা হয়েছে) */}
          <div className="col-12 col-md-3">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#8cc63f', fontSize: '15px', letterSpacing: '0.5px' }}>
              KONTAKT
            </h6>
            <ul className="list-unstyled mb-0 ps-0" style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <li className="mb-3 opacity-90 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span>📞</span> <span>+49 (0) 176 12345678</span>
              </li>
              <li className="mb-3 opacity-90 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span>✉️</span> <span> info@sibaggmbh.de</span>
              </li>
              <li className="mb-3 opacity-90 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span>📍</span> <span>Musterstraße 1, 12345 Musterstadt</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;