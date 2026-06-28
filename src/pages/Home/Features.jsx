import React from 'react';

function Features() {
  const featureItems = [
    {
      title: 'ERFAHREN & KOMPETENT',
      desc: 'Geschultes Fachpersonal mit langjähriger Erfahrung.',
      // ইউজার/টিম আইকন
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#72b22f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'ZUVERLÄSSIG & FLEXIBEL',
      desc: 'Termingerecht, flexibel und individuell auf Ihre Wünsche.',
      // শিল্ড/চেকমার্ক আইকন
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#72b22f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      )
    },
    {
      title: 'MODERNE TECHNIK',
      desc: 'Effiziente Reinigung mit modernen Geräten und Verfahren.',
      // গিয়ার/সেটিংস আইকন
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#72b22f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'FAIRE PREISE',
      desc: 'Transparente Angebote ohne versteckte Kosten.',
      // প্রাইস ট্যাগ আইকন
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#72b22f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      )
    }
  ];

  return (
    <section style={{ backgroundColor: '#0b213a' }} className="py-4 text-white">
      <div className="container">
        <div className="row g-4 align-items-center">
          {featureItems.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 d-flex align-items-start position-relative">
              
              {/* আইকন বামে */}
              <div className="me-3 mt-1 flex-shrink-0">
                {item.icon}
              </div>
              
              {/* টেক্সট ডানে */}
              <div>
                <h6 className="fw-bold mb-1" style={{ fontSize: '13px', letterSpacing: '0.5px' }}>
                  {item.title}
                </h6>
                <p className="mb-0 opacity-75" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                  {item.desc}
                </p>
              </div>

              {/* ডিভাইডার বার (শুধু বড় স্ক্রিনে ৩টি আইটেমের পর দেখাবে) */}
              {index < 3 && (
                <div className="d-none d-lg-block position-absolute end-0 top-50 translate-middle-y bg-white opacity-25" style={{ width: '1px', height: '40px' }}></div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;