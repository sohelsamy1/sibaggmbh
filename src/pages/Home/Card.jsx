import React from 'react';

function Card() {
  // ৪টি কার্ডের সম্পূর্ণ আর্টিকেল ডাটা
  const services = [
    {
      title: 'GEBÄUDEREINIGUNG',
      image: '/card1.png',
      // বিল্ডিং ক্লিনিং আইকন
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      ),
      points: [
        'Unterhaltsreinigung',
        'Büroreinigung',
        'Treppenhausreinigung',
        'Praxisreinigung',
        'Industriereinigung',
        'Sonderreinigung'
      ]
    },
    {
      title: 'BAUREINIGUNG',
      image: '/card2.png',
      // ক্রেন/কন্সট্রাকশন আইকন
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 22V2M6 5h12l-3 4 3 4H6" />
          <path d="M2 22h8" />
        </svg>
      ),
      points: [
        'Baugrobreinigung',
        'Bauzwischenreinigung',
        'Bauendreinigung',
        'Baustellenreinigung',
        'Entsorgung von Bauschutt'
      ]
    },
    {
      title: 'BAULEISTUNGEN',
      image: '/card3.png',
      // গ্রিড/কন্সট্রাকশন স্ট্রাকচার আইকন
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      ),
      points: [
        'Rohbauarbeiten',
        'Schalungsarbeiten',
        'Betonarbeiten',
        'Eisenflechten & Bewehrung',
        'Maurerarbeiten',
        'Allgemeine Bauarbeiten'
      ]
    },
    {
      title: 'FACILITY SERVICE',
      image: '/card4.png',
      // হোম/ফ্যাসিলিটি আইকন
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      points: [
        'Hausmeisterservice',
        'Objektbetreuung',
        'Kleinreparaturen',
        'Winterdienst',
        'Außenanlagenpflege',
        'Kontrollgänge'
      ]
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        
        {/* সেকশন টপ হেডিং */}
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold" style={{ color: '#72b22f', fontSize: '13px', letterSpacing: '1px' }}>
            UNSERE LEISTUNGEN
          </span>
          <h2 className="fw-bold mt-1 mb-4" style={{ color: '#0b213a', fontSize: '28px', letterSpacing: '0.5px' }}>
            KOMPETENZ IN JEDEM BEREICH
          </h2>
          <div className="mx-auto" style={{ width: '45px', height: '3px', backgroundColor: '#72b22f' }}></div>
        </div>

        {/* কার্ডের রো এবং কলাম */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm position-relative overflow-visible bg-light" style={{ borderRadius: '6px', paddingBottom: '20px' }}>
                
                {/* ইমেজ কন্টেইনার */}
                <div className="position-relative" style={{ height: '180px' }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover', borderRadius: '6px 6px 0 0' }}
                  />
                  
                  {/* গোল গাঢ় নীল আইকন ব্যাজ (ইমেজের ঠিক নিচের বর্ডারে মাঝখানে থাকবে) */}
                  <div 
                    className="position-absolute start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{ 
                      width: '56px', 
                      height: '56px', 
                      bottom: '-28px', 
                      backgroundColor: '#0b213a',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                      zIndex: '2'
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* কার্ড বডি ও কন্টেন্ট */}
                <div className="card-body pt-5 px-4">
                  <h5 className="fw-bold text-center mb-4 mt-1" style={{ color: '#0b213a', fontSize: '15px', letterSpacing: '0.5px' }}>
                    {service.title}
                  </h5>
                  
                  {/* চেকমার্ক যুক্ত লিস্ট */}
                  <ul className="list-unstyled mb-0" style={{ paddingLeft: '5px' }}>
                    {service.points.map((point, pIndex) => (
                      <li key={pIndex} className="d-flex align-items-start mb-2" style={{ fontSize: '13px', color: '#333', lineHeight: '1.4' }}>
                        <span className="me-2 fw-bold" style={{ color: '#72b22f', fontSize: '12px' }}>✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Card;