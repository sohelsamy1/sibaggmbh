import React from 'react';
// স্লাইডারের জন্য প্রয়োজনীয় ইমপোর্ট
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './References.css';
import 'swiper/css';
import 'swiper/css/pagination';

const References = () => {
  // ৮টি মেইন প্রজেক্ট কার্ডের ডাটা
  const projects = [
    { title: 'ROHBAUARBEITEN', subtitle: 'Wohn- und Geschäftshäuser', src: '/References/ref1.webp' },
    { title: 'BETON- UND BEWEHRUNGSARBEITEN', subtitle: 'Mehrfamilienhäuser', src: '/References/ref2.webp' },
    { title: 'HOCHBAUPROJEKTE', subtitle: 'Büro- und Gewerbegebäude', src: '/References/ref3.webp' },
    { title: 'INNENAUSBAU & TROCKENBAU', subtitle: 'Gewerbliche Innenräume', src: '/References/ref4.webp' },
    { title: 'WOHNANLAGEN', subtitle: 'Schlüsselfertige Bauprojekte', src: '/References/ref5.webp' },
    { title: 'SANIERUNGSARBEITEN', subtitle: 'Altbau- und Fassadensanierung', src: '/References/ref6.webp' },
    { title: 'BAUREINIGUNG', subtitle: 'Bauendreinigung & Feinreinigung', src: '/References/ref7.webp' },
    { title: 'GEBÄUDEREINIGUNG', subtitle: 'Büro- und Unterhaltsreinigung', src: '/References/ref8.webp' },
  ];

  // Einsatzbereiche ডাটা অ্যারে
  const einsatzbereicheLeft = [
    'Wohnanlagen',
    'Bürogebäude',
    'Industriehallen',
    'Gewerbeobjekte'
  ];

  const einsatzbereicheRight = [
    'Einkaufszentren',
    'Rohbauprojekte',
    'Sanierungsmaßnahmen',
    'Praxen & Kanzleien'
  ];

  const features = [
    { title: 'ERFAHRENES TEAM', desc: 'Qualifizierte Fachkräfte', icon: '👥' },
    { title: 'QUALITÄT', desc: 'Höchste Standards', icon: '⭐' },
    { title: 'ZUVERLÄSSIG', desc: 'Termingerecht & flexibel', icon: '⏱️' },
    { title: 'SICHERHEIT', desc: 'Sicheres Arbeiten', icon: '🛡️' },
    { title: 'FAIRE PREISE', desc: 'Transparente Angebote', icon: '💰' },
  ];

  return (
    <section className="py-4" style={{ backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <Helmet>
        <title>Unsere Referenzen | Professionelle Bau- und Reinigungsleistungen in Berlin | S.I.B.A.G</title>
        <meta name="description" content="Entdecken Sie die erfolgreich abgeschlossenen Projekte der S.I.B.A.G Facility Service GmbH. Ihr zuverlässiger Partner für Bauarbeiten und Gebäudereinigung in Berlin." />
        <link rel="canonical" href="https://sibaggmbh.com/referenzen" />
        <meta property="og:title" content="Referenzen & Projekte - S.I.B.A.G Facility Service GmbH" />
        <meta property="og:description" content="Erfahren Sie mehr über unsere vielfältigen Projekte im Bereich Hochbau, Sanierung und Gebäudereinigung." />
        <meta property="og:url" content="https://sibaggmbh.com/referenzen" />
      </Helmet>
      
      {/* ─── ১. টপ হেডার সেকশন (অ্যালাইনমেন্ট ফিক্সড) ─── */}
      <div className="container mb-5">
        <div className="row g-0 text-white" style={{ backgroundColor: '#0f2c59', borderRadius: '4px' }}>
          <div className="col-12 p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold mb-1" style={{ letterSpacing: '1px', fontSize: '2.5rem' }}>REFERENZEN</h1>
                <h4 className="fw-bold mb-3" style={{ color: '#8cc63f' }}>Erfolgreiche Projekte. Starke Partner.</h4>
                <p className="small opacity-85 mb-0" style={{ lineHeight: '1.6', fontSize: '13.5px' }}>
                  Die S.I.B.A.G Facility Service GmbH ist stolz auf die erfolgreiche Zusammenarbeit mit namhaften Unternehmen der Bau- und Immobilienbranche. Unsere Referenzen stehen für Qualität, Zuverlässigkeit und professionelle Ausführung.
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

      {/* ─── ২. মেইন ৮টি প্রজেক্ট গ্রিড সেকশন ─── */}
      <div className="container mb-5">
        <div className="row g-3">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow-sm overflow-hidden d-flex flex-column" style={{ borderRadius: '4px' }}>
                
                <div style={{ width: '100%', aspectRatio: '16/10', backgroundColor: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
                  {project.src ? (
                    <img 
                      src={project.src} 
                      alt={project.title} 
                      className="w-100 h-100" 
                      style={{ 
                        objectFit: 'cover', 
                        objectPosition: 'center',
                        display: 'block' 
                      }}
                    />
                  ) : (
                    <div 
                      className="w-100 h-100 d-flex align-items-center justify-content-center text-muted small fw-bold"
                      style={{ backgroundColor: '#f1f5f9', letterSpacing: '0.5px' }}
                    >
                      [ Bild {index + 1} ]
                    </div>
                  )}
                </div>

                <div className="p-3 text-white d-flex flex-column justify-content-center mt-auto" style={{ backgroundColor: '#0f2c59', minHeight: '85px' }}>
                  <h6 className="fw-bold mb-1 text-uppercase" style={{ fontSize: '11.5px', color: '#8cc63f', letterSpacing: '0.5px', lineHeight: '1.4' }}>
                    📐 {project.title}
                  </h6>
                  <p className="mb-0 opacity-75" style={{ fontSize: '11px', lineHeight: '1.3' }}>{project.subtitle}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── ৩. কম্বাইন্ড পার্টনার ও ইনসাটজবেরাইশ (Einsatzbereiche) সেকশন ─── */}
      <div className="container mb-5">
        <div className="row g-4 align-items-stretch">
          
          <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
            <h5 className="fw-bold mb-3 text-center text-lg-start" style={{ color: '#8cc63f', letterSpacing: '1px', fontSize: '14px' }}>
              UNSERE REFERENZPARTNER
            </h5>
            <div className="row g-2 align-items-center justify-content-center py-3 border-top border-bottom h-100">
              
              <div className="col-4">
                <div className="d-flex flex-column align-items-center justify-content-center bg-white" style={{ height: '75px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                  <span className="fw-black" style={{ fontSize: '20px', color: '#dc2626', fontWeight: '900', letterSpacing: '0.2px', lineHeight: '1', fontFamily: 'Arial Black, sans-serif' }}>
                    STRABAG
                  </span>
                  <span className="fw-bold text-dark text-uppercase mt-1" style={{ fontSize: '7.5px', letterSpacing: '0.5px', fontFamily: 'sans-serif' }}>
                    WORK ON PROGRESS
                  </span>
                </div>
              </div>

              <div className="col-4">
                <div className="d-flex align-items-center justify-content-center overflow-hidden bg-white" style={{ height: '75px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                  <img 
                    src="/References/ref10.webp" 
                    alt="LEONHARD WEISS" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }} 
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="d-flex flex-column align-items-center justify-content-center bg-white" style={{ height: '75px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                  <span className="fw-bold" style={{ fontSize: '18px', color: '#00529c', fontWeight: '800', letterSpacing: '0.1px', lineHeight: '1', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    PFAFFINGER
                  </span>
                  <span className="text-secondary text-uppercase mt-1" style={{ fontSize: '6.5px', letterSpacing: '0.5px', fontWeight: '600', color: '#4b5563', fontFamily: 'sans-serif' }}>
                    UNTERNEHMENSGRUPPE
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="p-4 text-white h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: '#0f2c59', borderRadius: '4px' }}>
              <h6 className="fw-bold mb-3" style={{ color: '#8cc63f', letterSpacing: '0.5px', fontSize: '13px' }}>
                EINSATZBEREICHE
              </h6>
              
              <div className="row g-2">
                <div className="col-6">
                  <ul className="list-unstyled mb-0" style={{ fontSize: '11px', lineHeight: '2' }}>
                    {einsatzbereicheLeft.map((item, i) => (
                      <li key={i} className="d-flex align-items-center gap-2 opacity-90">
                        <span style={{ color: '#8cc63f', fontSize: '12px' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="col-6">
                  <ul className="list-unstyled mb-0" style={{ fontSize: '11px', lineHeight: '2' }}>
                    {einsatzbereicheRight.map((item, i) => (
                      <li key={i} className="d-flex align-items-center gap-2 opacity-90">
                        <span style={{ color: '#8cc63f', fontSize: '12px' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    {/* ৪. স্লাইডার সেকশন */}

    <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h5 className="fw-bold mb-4 text-center" style={{ color: '#0f2c59', marginBottom: '40px' }}>
          AUSZUG UNSERER PROJEKTE
        </h5>

        <Swiper 
          modules={[Autoplay, Pagination]} 
          spaceBetween={25} 
          slidesPerView={5} 
          loop={true} 
          autoplay={{ delay: 2500, disableOnInteraction: false }} 
          pagination={{ clickable: true }}
          style={{ paddingBottom: '50px' }} 
          breakpoints={{ 
            320: { slidesPerView: 1 }, 
            576: { slidesPerView: 2 }, 
            768: { slidesPerView: 3 }, 
            1024: { slidesPerView: 5 } 
          }}
        >
          {[
            { title: 'BÜROGEBÄUDE', src: '/Reference1.webp' },
            { title: 'WOHNANLAGEN', src: '/Reference2.webp' },
            { title: 'ROHBAU & BAUARBEITEN', src: '/Reference3.webp' },
            { title: 'INDUSTRIE & GEWERBE', src: '/Reference4.webp' },
            { title: 'PRAXEN & KANZLEIEN', src: '/Reference5.webp' },
            { title: 'EINKAUFSZENTREN', src: '/Reference6.webp' }
          ].map((p, i) => (
            <SwiperSlide key={i}>
              <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '12px', height: '240px' }}>
                <img 
                  src={p.src} 
                  alt={p.title} 
                  style={{ width: '100%', height: '170px', objectFit: 'cover' }} 
                />
                <div className="p-3 text-center d-flex align-items-center justify-content-center" style={{ height: '70px', backgroundColor: '#ffffff' }}>
                  <h6 style={{ fontSize: '11px', color: '#0f2c59', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {p.title}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>


      {/* ─── 5. নিচের প্রফেশনাল ইনফোগ্রাফিক্স বার ─── */}
      <div className="container-fluid py-4 text-white" style={{ backgroundColor: '#0b1d37' }}>
        <div className="container">
          <div className="row align-items-center g-3 text-center text-md-start">
            <div className="col-lg-10">
              <div className="row g-3 justify-content-center">
                {features.map((feat, index) => (
                  <div key={index} className="col-6 col-sm-4 col-md-2.4 col-lg">
                    <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                      <span style={{ fontSize: '20px' }}>{feat.icon}</span>
                      <div>
                        <div className="fw-bold text-uppercase" style={{ fontSize: '10.5px', color: '#8cc63f' }}>{feat.title}</div>
                        <div className="opacity-75" style={{ fontSize: '9.5px' }}>{feat.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-2 text-center text-lg-end border-start border-secondary d-none d-lg-block">
              <div className="fw-bold" style={{ fontSize: '13px', color: '#ffffff' }}>HRB 288 177 B</div>
              <div className="small opacity-50" style={{ fontSize: '10px' }}>Handelsregister</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default References;