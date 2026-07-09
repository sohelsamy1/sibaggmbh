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
    // marginTop এখান থেকে কমিয়ে 30px করা হয়েছে
    <section className="py-5" style={{ marginTop: '30px' }}>
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: '#0f2c59' }}>ALLE LEISTUNGEN IM ÜBERBLICK</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              {/* কার্ডের ডিজাইন ঠিক রাখা হয়েছে */}
              <div className="card h-100 border-0 shadow p-3 d-flex flex-column">
                <img src={service.image} className="card-img-top" alt={service.title} />
                
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold" style={{ color: '#0f2c59' }}>{service.title}</h5>
                  <ul className="list-unstyled flex-grow-1">
                    {service.points.map((p, i) => <li key={i}>✓ {p}</li>)}
                  </ul>
                  
                  {/* বাটন নিচে ফিক্সড রাখার জন্য mt-auto */}
                  <div className="mt-auto">
                    <Link to="/contact" className="btn w-100" style={{ backgroundColor: '#8cc63f', color: '#fff' }}>
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
  );
}

export default Leistungen;