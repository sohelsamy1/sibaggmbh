import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      {/* */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-left">
            <span>🕒 Montag - Freitag: 08:00 - 18:00 Uhr</span>
            <span>📞 24h Notdienst auf Anfrage</span>
          </div>
          <div className="top-right">
            <a href="tel:+4917612345678">📱 +49 (0) 176 12345678</a>
            <a href="mailto:info@sibaggmbh.de">✉️ info@sibaggmbh.de</a>
          </div>
        </div>
      </div>

      {/* ২. মেইন নেভিগেশন বার (Main Navbar) - সাদা অংশটা */}
      <nav className="main-navbar">
        <div className="navbar-container">
          {/* */}
          <div className="logo-area">
            <img 
              src="/logo.png" 
              alt="S.I.B.A.G Logo" 
              className="site-logo" 
              onError={(e) => {
               
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }} 
            />
            <span className="dummy-logo" style={{ display: 'none', fontWeight: 'bold', fontSize: '24px', color: '#0f2c59' }}>
              S.I.B.A.G
            </span>
          </div>

          {/* মেনু লিংকস */}
          <ul className="nav-links">
            <li><a href="#startseite" className="active">STARTSEITE</a></li>
            <li><a href="#leistungen">LEISTUNGEN</a></li>
            <li><a href="#uber-uns">ÜBER UNS</a></li>
            <li><a href="#referenzen">REFERENZEN</a></li>
            <li><a href="#kontakt">KONTAKT</a></li>
          </ul>

          {/* অ্যাকশন বাটন */}
          <div className="nav-action">
            <a href="#angebot" className="btn-quote">
              KOSTENLOSES ANGEBOT <span>→</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;