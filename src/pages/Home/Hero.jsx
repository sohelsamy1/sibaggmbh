import React from 'react';

function Hero() {
  const heroSectionStyle = {
    minHeight: 'calc(100vh - 120px)',
    background: `linear-gradient(to right, rgba(11, 33, 58, 0.95) 0%, rgba(11, 33, 58, 0.85) 35%, rgba(11, 33, 58, 0.2) 70%, rgba(0, 0, 0, 0) 100%), url('/banner.png') no-repeat center center`,
    backgroundSize: 'cover',
  };

  return (
    <section style={heroSectionStyle} className="w-100 d-flex align-items-center">
      <div className="container">
        <div className="text-white" style={{ maxWidth: '580px' }}>
          
          <h1 className="display-4 fw-bold lh-sm text-uppercase mb-4">
            SAUBERKEIT.<br />
            QUALITÄT.<br />
            <span style={{ color: '#72b22f' }}>ZUVERLÄSSIGKEIT.</span>
          </h1>

          <p className="lead mb-4 opacity-75">
            Ihr Partner für Gebäudereinigung, Baureinigung und Bauleistungen.
          </p>

          <div className="d-flex align-items-center gap-3 mb-5 text-center">
            <div className="flex-grow-1">
              <svg className="mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
              <div className="fw-bold text-uppercase" style={{ fontSize: '11px' }}>GEBÄUDEREINIGUNG</div>
            </div>

            <div className="vr bg-white opacity-25" style={{ height: '45px' }}></div>

            <div className="flex-grow-1">
              <svg className="mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="fw-bold text-uppercase" style={{ fontSize: '11px' }}>BAUREINIGUNG</div>
            </div>

            <div className="vr bg-white opacity-25" style={{ height: '45px' }}></div>

            <div className="flex-grow-1">
              <svg className="mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <div className="fw-bold text-uppercase" style={{ fontSize: '11px' }}>BAULEISTUNGEN</div>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-3">
            <a href="#angebot" className="btn fw-bold text-white px-4 py-3 text-uppercase" style={{ backgroundColor: '#72b22f', fontSize: '13px' }}>
              KOSTENLOSES ANGEBOT ANFORDERN →
            </a>
            <a href="#mehr-erfahren" className="btn btn-outline-light fw-bold px-4 py-3 text-uppercase" style={{ fontSize: '13px' }}>
              MEHR ERFAHREN →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;