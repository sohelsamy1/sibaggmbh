import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Leistungen() {
  const services = [
    { title: 'GEBÄUDEREINIGUNG', image: '/card1.webp', points: ['Unterhaltsreinigung', 'Büroreinigung', 'Treppenhausreinigung', 'Praxisreinigung', 'Industriereinigung', 'Sonderreinigung'] },
    { title: 'BAUREINIGUNG', image: '/card2.webp', points: ['Baugrobreinigung', 'Bauzwischenreinigung', 'Bauendreinigung', 'Baustellenreinigung', 'Entsorgung von Bauschutt'] },
    { title: 'BAULEISTUNGEN', image: '/card3.webp', points: ['Rohbauarbeiten', 'Schalungsarbeiten', 'Betonarbeiten', 'Eisenflechten & Bewehrung', 'Maurerarbeiten', 'Allgemeine Bauarbeiten'] },
    { title: 'FACILITY SERVICE', image: '/card4.webp', points: ['Hausmeisterservice', 'Objektbetreuung', 'Kleinreparaturen', 'Winterdienst', 'Außenanlagenpflege', 'Kontrollgänge'] }
  ];

  return (
    <>
      {/* ব্যানার সেকশন */}
      <section className="py-4" style={{ backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
        <div className="container mb-3"> 
          <div className="row g-0 text-white" style={{ backgroundColor: '#0f2c59', borderRadius: '4px' }}>
            <div className="col-12 p-4 p-md-5">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <h1 className="fw-bold mb-1" style={{ letterSpacing: '1px', fontSize: '2.5rem' }}>LEISTUNGEN</h1>
                  <h4 className="fw-bold mb-3" style={{ color: '#8cc63f' }}>Vielfalt für Ihr Gebäude.</h4>
                  <p className="small opacity-85 mb-0" style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    Wir bieten umfassende Lösungen für Immobilieninstandhaltung und Sauberkeit. Von der Bauphase bis zur täglichen Objektbetreuung – S.I.B.A.G sorgt für Werterhalt durch höchste Professionalität.
                  </p>
                </div>
                <div className="col-md-5 text-md-end text-center mt-4 mt-md-0">
                  <div className="fw-bold h3 mb-0" style={{ color: '#ffffff' }}>
                    S.I.B.A.G <span style={{ color: '#8cc63f', fontSize: '14px', display: 'block' }}>FACILITY SERVICE GMBH</span>
                  </div>
                  <div className="small opacity-50 mt-2" style={{ fontSize: '10px' }}>BAULEISTUNGEN • GEBÄUDEREINIGUNG • BAUREINIGUNG • FACILITY SERVICE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* কার্ড সেকশন - footer গ্যাপ কন্ট্রোল */}
      <section className="py-3" style={{ paddingBottom: '80px' }}> 
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#0f2c59', fontWeight: 'bold' }}>ALLE LEISTUNGEN IM ÜBERBLICK</h2>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow p-3 d-flex flex-column">
                  <img src={service.image} className="card-img-top" alt={service.title} style={{ borderRadius: '8px' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold" style={{ color: '#0f2c59' }}>{service.title}</h5>
                    <ul className="list-unstyled flex-grow-1 mt-3">
                      {service.points.map((p, i) => (
                        <li key={i} style={{ fontSize: '14px', marginBottom: '8px' }}>
                          <span style={{ color: '#8cc63f', marginRight: '8px' }}>✓</span> {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-3">
                      <Link to="/contact" className="btn w-100" style={{ backgroundColor: '#8cc63f', color: '#fff', fontWeight: '600' }}>
                        ANFRAGE SENDEN
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* এই ডিভটির height পরিবর্তন করে আপনি ফুটারের সাথে গ্যাপ বাড়াতে বা কমাতে পারবেন */}
      
      <div style={{ height: '40px' }}></div> 
    </>
  );
}

export default Leistungen;