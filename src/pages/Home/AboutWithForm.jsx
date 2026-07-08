import React from 'react';

function AboutSection() {
  return (
    <section id="uber-uns" className="py-5 bg-white">
      <div className="container">
        {/* কন্টেন্টকে সেন্টারে রাখার জন্য justify-content-center */}
        <div className="row g-4 g-lg-5 align-items-center justify-content-center">
          
          {/* ─── বাম পাশ: টেক্সট কন্টেন্ট (Width বাড়ানো হলো) ─── */}
          <div className="col-12 col-lg-6">
            <span className="text-uppercase fw-bold" style={{ color: '#8cc63f', fontSize: '14px', letterSpacing: '1.5px' }}>
              ÜBER UNS
            </span>
            <h2 className="fw-bold mt-2 mb-4" style={{ color: '#0f2c59', fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: '1.2' }}>
              WIR SORGEN FÜR <br />
              <span style={{ color: '#0f2c59' }}>WERTERHALT UND QUALITÄT</span>
            </h2>
            
            <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.7' }} className="mb-4">
              Die S.I.B.A.G Facility Service GmbH steht für professionelle Reinigungs- und Baudienstleistungen. Unser Ziel ist es, Immobilien dauerhaft sauber, gepflegt und wertbeständig zu betreuen. Mit erfahrenen Mitarbeitern, modernster Technik und höchsten Qualitätsstandards sorgen wir für zufriedene Kunden und langfristige Partnerschaften.
            </p>

            {/* চেকমার্ক লিস্ট */}
            <ul className="list-unstyled mb-0">
              {[
                'Erfahrenes & geschultes Personal',
                'Moderne Reinigungstechnik',
                'Individuelle Lösungen',
                'Höchste Qualitätsstandards',
                'Zuverlässig & termingerecht'
              ].map((item, idx) => (
                <li key={idx} className="d-flex align-items-center mb-3" style={{ fontSize: '15px', color: '#1a202c', fontWeight: '500' }}>
                  <span className="me-3 rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: '22px', height: '22px', fontSize: '12px', backgroundColor: '#8cc63f' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── ডান পাশ: ইমেজ (রেসপন্সিভ হাইট ও শ্যাডো) ─── */}
          <div className="col-12 col-md-8 col-lg-5">
            <div className="shadow-lg overflow-hidden" style={{ borderRadius: '25px' }}>
              <img
                src="/ambulence.webp"
                alt="S.I.B.A.G Delivery Van"
                className="w-100"
                style={{
                  height: 'auto',
                  minHeight: '350px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;