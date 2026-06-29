import React from 'react';

const References = () => {
  // ৬টি কার্ডের ডাটা (হুবহু ছবির টাইটেল অনুযায়ী)
  const projectsData = [
    {
      id: 1,
      image: '/Reference1.webp', // পাবলিক ফোল্ডারে তোমার ছবির পাথ দাও
      titleDE: 'BÜROGEBÄUDE'
    },
    {
      id: 2,
      image: '/Reference2.webp',
      titleDE: 'WOHNANLAGEN'
    },
    {
      id: 3,
      image: '/Reference3.webp',
      titleDE: 'ROHBAU & BAUARBEITEN'
    },
    {
      id: 4,
      image: '/Reference4.webp',
      titleDE: 'INDUSTRIE & GEWERBE'
    },
    {
      id: 5,
      image: '/Reference5.webp',
      titleDE: 'PRAXEN & KANZLEIEN'
    },
    {
      id: 6,
      image: '/Reference6.webp',
      titleDE: 'EINKAUFSZENTREN'
    }
  ];

  return (
    /* 🎯 এখানে id="referenzen" যোগ করা হয়েছে যাতে REFERENCES লিঙ্কে ক্লিক করলে এখানে স্ক্রল হয় */
    <section id="referenzen" className="py-5 bg-white text-center">
      <div className="container-fluid px-md-5">
        
        {/* ─── সেকশন হেডার ─── */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            {/* 🟢 লোগোর সবুজ কালার (#8cc63f) এর সাথে এলাইন করা হলো */}
            <span className="text-uppercase fw-bold" style={{ color: '#8cc63f', fontSize: '13px', letterSpacing: '1px' }}>
              REFERENZEN
            </span>
            {/* 🔵 টেক্সটের ডার্ক ব্লু কালারটি (#0f2c59) ম্যাচ করা হলো */}
            <h3 className="fw-bold mt-1 mb-3" style={{ color: '#0f2c59', fontSize: '24px', letterSpacing: '0.5px' }}>
              AUSZUG UNSERER PROJEKTE
            </h3>
          </div>
        </div>

        {/* ─── 🃏 কার্ড গ্রিড (ডেক্সটপে ১ লাইনে ৬টি কলাম দেখাবে) ─── */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-6 g-3 justify-content-center">
          {projectsData.map((project) => (
            <div key={project.id} className="col">
              <div className="card h-100 border-0 bg-transparent">
                
                {/* ইমেজ কন্টেইনার এবং নিখুঁত বর্ডার রেডিয়াস */}
                <div 
                  className="w-100 overflow-hidden shadow-sm" 
                  style={{ 
                    borderRadius: '12px', 
                    aspectRatio: '16/10',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer' /* হোভার করলে হাতের চিহ্ন দেখাবে */
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img 
                    src={project.image} 
                    className="w-100 h-100" 
                    alt={project.titleDE} 
                    style={{ objectFit: 'cover' }}
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3C/svg%3E"; 
                    }}
                  />
                </div>
                
                {/* কার্ডের টাইটেল */}
                <div className="card-body pt-3 px-0 pb-0">
                  <h6 
                    className="text-uppercase fw-bold mb-0 text-center" 
                    style={{ 
                      color: '#0f2c59', /* 🔵 ব্র্যান্ড ডার্ক ব্লু */
                      fontSize: '12.5px', 
                      letterSpacing: '0.3px',
                      lineHeight: '1.4'
                    }}
                  >
                    {project.titleDE}
                  </h6>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default References;