import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
      <section className="about-hero">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-7 text-white">
              <h2 className="about-hero-title mb-4">
                Die S.I.B.A.G Facility Service GmbH steht für Qualität, Zuverlässigkeit und Kompetenz.
              </h2>
              <p className="about-hero-text mb-4">
                Mit langjähriger Erfahrung, einem starken Team und modernster Technik realisieren wir Projekte termingerecht und professionell.
              </p>
              <div className="about-features">
                {[
                  { icon: '👤', text: 'ERFAHRENES TEAM' },
                  { icon: '🛡️', text: 'QUALITÄT & SICHERHEIT' },
                  { icon: '⚙️', text: 'MODERNE TECHNIK' },
                  { icon: '🤝', text: 'ZUVERLÄSSIG & FAIR' }
                ].map((item, idx) => (
                  <div key={idx} className="feature-item d-flex align-items-center mb-3">
                    <span className="feature-icon me-3">{item.icon}</span>
                    <span className="feature-text">{item.text}</span>
                  </div>
                ))}
              </div>
              <h3 className="about-footer-text mt-4">Gemeinsam bauen wir die Zukunft.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* নতুন সেকশন */}
      <section className="about-bottom-info">
        <div className="container text-center">
          <h4 className="mb-3">Warum S.I.B.A.G?</h4>
          <p className="px-lg-5">
            Wir sind Ihr zuverlässiger Partner in Berlin. Von der professionellen Baureinigung bis hin zum komplexen Facility Management – wir garantieren höchste Standards und individuelle Betreuung für Ihre Immobilien.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;