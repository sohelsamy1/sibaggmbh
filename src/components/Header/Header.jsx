import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="site-header">
      {/* ১. টপ বার (Top Bar) - ডেক্সটপের জন্য */}
      <div className="top-bar py-2 bg-dark text-white d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-left d-flex gap-3 small">
            <span>🕒 Montag - Freitag: 08:00 - 18:00 Uhr</span>
            <span>|</span>
            <span>📞 24h Notdienst auf Anfrage</span>
          </div>
          <div className="top-right d-flex gap-3 small">
            <a href="tel:+4917612345678" className="text-white text-decoration-none">📱 +49 (0) 176 12345678</a>
            <a href="mailto:info@sibaggmbh.de" className="text-white text-decoration-none">✉️ info@sibaggmbh.de</a>
          </div>
        </div>
      </div>

      {/* ২. মেইন নেভিগেশন বার (Main Navbar) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white main-navbar shadow-sm py-2">
        <div className="container justify-content-between flex-nowrap">
          
          {/* 🎯 লোগো এরিয়া (মোবাইলে একদম বাম পাশে থাকবে) */}
          <div className="logo-area d-flex align-items-center">
            {/* লোগোতেও ক্লিক করলে যেন মেইন ডোমেইনে যায় সেজন্য <a> ট্যাগ দিয়ে র‍্যাপ করা হলো */}
            <a href="/">
              <img 
                src="/logo.webp" 
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
            </a>
          </div>

          {/* ডেক্সটপ মেনু লিংকস (ল্যাপটপে মাঝখানে এলাইন হবে) */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-4 fw-bold small text-uppercase">
              {/* 🎯 HOME এর href এখন সরাসরি মেইন ডোমেইন "/" */}
              <li className="nav-item"><a href="/" className="nav-link active">STARTSEITE</a></li>
              <li className="nav-item"><a href="#leistungen" className="nav-link">LEISTUNGEN</a></li>
              <li className="nav-item"><a href="#uber-uns" className="nav-link">ÜBER UNS</a></li>
              <li className="nav-item"><a href="#referenzen" className="nav-link">REFERENZEN</a></li>
              <li className="nav-item"><a href="#kontakt" className="nav-link">KONTAKT</a></li>
            </ul>
          </div>

          {/* ডেক্সটপ অ্যাকশন বাটন (ডেক্সটপে ডান পাশে) */}
          <div className="nav-action d-none d-lg-block">
            <a href="#angebot" className="btn btn-quote px-4 py-2 text-white fw-bold">
            GRATIS ANGEBOT <span className="ms-1">→</span>
            </a>
          </div>

          {/* 🎯 টগল বাটন (মোবাইলে একদম ডান পাশে থাকবে) */}
          <button 
            className="navbar-toggler border-0 pe-0" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>

      {/* ৩. 📱 মোবাইল স্লাইডার মেনু (বাম দিক থেকে আসবে) */}
      <div className={`offcanvas offcanvas-start ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
        <div className="offcanvas-header bg-light border-bottom">
          <h5 className="offcanvas-title fw-bold" style={{ color: '#0f2c59' }}>S.I.B.A.G</h5>
          <button type="button" className="btn-close text-reset" onClick={toggleMenu} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          <ul className="navbar-nav gap-2 fw-bold text-uppercase fs-6">
            {/* 🎯 মোবাইল মেনুতেও HOME এর href এখন সরাসরি মেইন ডোমেইন "/" */}
            <li className="nav-item" onClick={toggleMenu}><a href="/" className="nav-link active">STARTSEITE</a></li>
            <li className="nav-item" onClick={toggleMenu}><a href="#leistungen" className="nav-link">LEISTUNGEN</a></li>
            <li className="nav-item" onClick={toggleMenu}><a href="#uber-uns" className="nav-link">ÜBER UNS</a></li>
            <li className="nav-item" onClick={toggleMenu}><a href="#referenzen" className="nav-link">REFERENZEN</a></li>
            <li className="nav-item" onClick={toggleMenu}><a href="#kontakt" className="nav-link">KONTAKT</a></li>
          </ul>

          <div className="mobile-menu-footer mt-4 border-top pt-3">
             <div className="mobile-contact-info small text-muted d-flex flex-column gap-1">
              <span>📞 +49 (0) 176 12345678</span>
              <span>✉️ info@sibaggmbh.de</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* স্লাইডার ওপেন ব্যাকড্রপ */}
      {isOpen && <div className="offcanvas-backdrop fade show" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;