import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0b213a', color: '#ffffff' }} className="py-5">
      <div className="container">
        <div className="row g-4">
          
          {/* লোগো এবং ইমারজেন্সি বক্স (বাম পাশে) */}
          <div className="col-12 col-md-3">
            <img src="/logo.png" alt="SIBAG Logo" className="mb-4" style={{ maxWidth: '200px' }} />
            
            {/* লোগোর নিচে ইমারজেন্সি বক্স */}
            <div className="d-flex align-items-center p-2 border border-success rounded" style={{ maxWidth: '200px' }}>
              <div className="text-success fw-bold me-3" style={{ fontSize: '24px' }}>24/7</div>
              <div style={{ fontSize: '12px', lineHeight: '1.2' }}>
                <span className="fw-bold">NOTDIENST</span><br />
                <span>AUF ANFRAGE</span>
              </div>
            </div>
          </div>

          {/* লিংকিং সেকশন */}
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#72b22f' }}>LEISTUNGEN</h6>
            <ul className="list-unstyled">
              <li className="mb-2" style={{ fontSize: '14px' }}>Gebäudereinigung</li>
              <li className="mb-2" style={{ fontSize: '14px' }}>Baureinigung</li>
              <li className="mb-2" style={{ fontSize: '14px' }}>Bauleistungen</li>
              <li className="mb-2" style={{ fontSize: '14px' }}>Facility Service</li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#72b22f' }}>UNTERNEHMEN</h6>
            <ul className="list-unstyled">
              <li className="mb-2" style={{ fontSize: '14px' }}>Über uns</li>
              <li className="mb-2" style={{ fontSize: '14px' }}>Referenzen</li>
              <li className="mb-2" style={{ fontSize: '14px' }}>Karriere</li>
              <li className="mb-2" style={{ fontSize: '14px' }}>Kontakt</li>
            </ul>
          </div>

          {/* কন্টাক্ট ইনফরমেশন (ডান পাশে) */}
          <div className="col-12 col-md-3">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#72b22f' }}>KONTAKT</h6>
            <ul className="list-unstyled" style={{ fontSize: '14px' }}>
              <li className="mb-2">📞 +48 (0) 176 12345678</li>
              <li className="mb-2">✉️ info@sibag-facility.de</li>
              <li className="mb-2">📍 Musterstraße 1, 12345 Musterstadt</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;