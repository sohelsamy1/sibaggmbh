import React from 'react';
// Swiper কম্পোনেন্ট এবং মডিউল ইম্পোর্ট
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper এর প্রয়োজনীয় CSS ইম্পোর্ট
import 'swiper/css';
import 'swiper/css/pagination';

const References = () => {
  // ৬টি কার্ডের ডাটা
  const projectsData = [
    {
      id: 1,
      image: '/Reference1.webp',
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
    <section id="referenzen" className="py-5 bg-white text-center">
      {/* 🎯 container-fluid বদলে container করা হলো যাতে হেডার ও ফর্মের দুই পাশের মেইন লাইনের সাথে এলাইনমেন্ট ১০০% মিলে যায় */}
      <div className="container">
        
        {/* ─── সেকশন হেডার ─── */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <span className="text-uppercase fw-bold" style={{ color: '#8cc63f', fontSize: '13px', letterSpacing: '1px' }}>
              REFERENZEN
            </span>
            <h3 className="fw-bold mt-1 mb-4" style={{ color: '#0f2c59', fontSize: '24px', letterSpacing: '0.5px' }}>
              AUSZUG UNSERER PROJEKTE
            </h3>
          </div>
        </div>

        {/* ─── 🔄 Swiper স্লাইডার সেকশন ─── */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20} // কার্ডগুলোর মাঝখানের পারফেক্ট গ্যাপ
          slidesPerView={1}  // মোবাইলে ১টি দেখাবে
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 15 },  // ছোট স্ক্রিন
            768: { slidesPerView: 3, spaceBetween: 20 },  // ট্যাবলেট
            1024: { slidesPerView: 4, spaceBetween: 20 }, // ছোট ল্যাপটপ
            1200: { slidesPerView: 5, spaceBetween: 20 }  // 🎯 ডেক্সটপে পারফেক্ট ৫টি কলাম শো হবে মেইন এলাইনমেন্টে
          }}
          className="pb-5" // ডট (Pagination) গুলোর জন্য নিচে স্পেস
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="card h-100 border-0 bg-transparent mb-2">
                
                {/* ইমেজ কন্টেইনার এবং নিখুঁত বর্ডার রেডিয়াস */}
                <div 
                  className="w-100 overflow-hidden shadow-sm" 
                  style={{ 
                    borderRadius: '12px', 
                    aspectRatio: '16/10',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer'
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
                      color: '#0f2c59',
                      fontSize: '12.5px', 
                      letterSpacing: '0.3px',
                      lineHeight: '1.4'
                    }}
                  >
                    {project.titleDE}
                  </h6>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default References;