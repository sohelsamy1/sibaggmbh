import React, { useState } from 'react';

function AboutWithForm() {
  // ফর্ম ডাটা হ্যান্ডেল করার জন্য স্টেট
  const [formData, setFormData] = useState({
    name: '',
    firma: '',
    email: '',
    telefon: '',
    leistung: '',
    nachricht: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    /* 🎯 এখানে id="uber-uns" যোগ করা হয়েছে যাতে ABOUT US লিঙ্কে ক্লিক করলে এখানে স্ক্রল হয় */
    <section id="uber-uns" className="py-5 bg-white">
      <div className="container">
        {/* মোবাইলের অর্ডার ঠিক রাখতে এবং ডেক্সটপে সমান হাইট পেতে align-items-lg-stretch ব্যবহার করা হয়েছে */}
        <div className="row g-4 g-lg-5 align-items-lg-stretch">
          
          {/* ─── বাম পাশ: ÜBER UNS (ABOUT TEXT) ─── */}
          {/* মোবাইলে এটি ১ নম্বরে থাকবে */}
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-between order-1">
            <div>
              {/* 🟢 লোগোর সবুজ কালার (#8cc63f) ম্যাচ করা হলো */}
              <span className="text-uppercase fw-bold" style={{ color: '#8cc63f', fontSize: '13px', letterSpacing: '1px' }}>
                ÜBER UNS
              </span>
              {/* 🔵 টেক্সটের ডার্ক ব্লু কালারটি (#0f2c59) ম্যাচ করা হলো */}
              <h3 className="fw-bold mt-1 mb-4" style={{ color: '#0f2c59', fontSize: '26px', lineHeight: '1.3' }}>
                WIR SORGEN FÜR<br />WERTERHALT UND QUALITÄT
              </h3>
              
              <p style={{ fontSize: '13.5px', color: '#4a5568', lineHeight: '1.6' }}>
                Die S.I.B.A.G Facility Service GmbH steht für professionelle Reinigungs- und Baudienstleistungen. Unser Goal ist es, Immobilien dauerhaft sauber, gepflegt und wertbeständig zu betreuen.
              </p>
              <p style={{ fontSize: '13.5px', color: '#4a5568', lineHeight: '1.6' }} className="mb-4">
                Mit erfahrenen Mitarbeitern, modernster Technik und höchsten Qualitätsstandards sorgen wir für zufriedene Kunden und langfristige Partnerships.
              </p>
            </div>

            {/* চেকমার্ক লিস্ট */}
            <ul className="list-unstyled mb-4 mb-lg-0">
              {[
                'Erfahrenes & geschultes Personal',
                'Moderne Reinigungstechnik',
                'Individuelle Lösungen',
                'Höchste Qualitätsstandards',
                'Zuverlässig & termingerecht'
              ].map((item, idx) => (
                <li key={idx} className="d-flex align-items-center mb-2" style={{ fontSize: '13.5px', color: '#1a202c', fontWeight: '500' }}>
                  {/* 🟢 চেকমার্কের ব্যাকগ্রাউন্ড কালারও ব্র্যান্ড গ্রিন করা হলো */}
                  <span className="me-2 rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: '18px', height: '18px', fontSize: '10px', backgroundColor: '#8cc63f' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── মাঝখান: ভ্যান এর ইমেজ ─── */}
          {/* মোবাইলে এটি ২ নম্বরে দেখাবে এবং হাইট-উইডথ রেসপন্সিভ থাকবে */}
          <div className="col-12 col-md-6 col-lg-4 order-2 d-flex align-items-center justify-content-center p-3">
            <img
              src="/ambulence.png"
              alt="S.I.B.A.G Delivery Van"
              className="w-100 h-100"
              style={{
                objectFit: 'fill', /* এটি দিলে ছবি কাটবে না, বক্সের সাথে টেনে ফিট হয়ে যাবে */
                minHeight: '280px',
                maxHeight: '450px',
                borderRadius: '20px'
              }}
            />
          </div>

          {/* ─── ডান পাশ: KOSTENLOSES ANGEBOT FORM ─── */}
          {/* মোবাইলে এটি ৩ নম্বরে থাকবে */}
          {/* 🎯 এখানে id="angebot" যোগ করা হয়েছে যাতে FREE OFFER লিঙ্কে ক্লিক করলে এই ফর্ম বক্সে চলে আসে */}
          <div id="angebot" className="col-12 col-md-6 col-lg-4 order-3">
            {/* 🔵 ফর্মের কন্টেইনার ব্যাকগ্রাউন্ড কালার ডার্ক ব্লু (#0f2c59) করা হলো */}
            <div className="p-4 text-white h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#0f2c59', borderRadius: '8px' }}>
              <div>
                {/* 🟢 টাইটেল কালার ব্র্যান্ড গ্রিন (#8cc63f) করা হলো */}
                <h5 className="fw-bold mb-1" style={{ fontSize: '16px', color: '#8cc63f', letterSpacing: '0.5px' }}>
                  KOSTENLOSES ANGEBOT ANFORDERN
                </h5>
                <p className="opacity-75 mb-4" style={{ fontSize: '12px' }}>
                  Wir melden uns schnellstmöglich bei Ihnen!
                </p>

                {/* ফর্ম এলিমেন্ট শুরু */}
                <form onSubmit={handleSubmit} className="row g-2">
                  <div className="col-6">
                    <input type="text" name="name" className="form-control" placeholder="Ihr Name" style={{ fontSize: '13px', padding: '10px' }} onChange={handleChange} />
                  </div>
                  <div className="col-6">
                    <input type="text" name="firma" className="form-control" placeholder="Firma" style={{ fontSize: '13px', padding: '10px' }} onChange={handleChange} />
                  </div>
                  <div className="col-6">
                    <input type="email" name="email" className="form-control" placeholder="E-Mail" style={{ fontSize: '13px', padding: '10px' }} onChange={handleChange} />
                  </div>
                  <div className="col-6">
                    <input type="tel" name="telefon" className="form-control" placeholder="Telefon" style={{ fontSize: '13px', padding: '10px' }} onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <select name="leistung" className="form-select" style={{ fontSize: '13px', padding: '10px', color: '#4a5568' }} onChange={handleChange}>
                      <option value="">Leistung auswählen</option>
                      <option value="gebau">Gebäudereinigung</option>
                      <option value="bau">Baureinigung</option>
                      <option value="leist">Bauleistungen</option>
                      <option value="facility">Facility Service</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea name="nachricht" className="form-control" rows="3" placeholder="Ihre Nachricht" style={{ fontSize: '13px', padding: '10px' }} onChange={handleChange}></textarea>
                  </div>

                  {/* সাবমিট বাটন */}
                  <div className="col-12 mt-3">
                    {/* 🟢 বাটনের ব্যাকগ্রাউন্ড কালার ব্র্যান্ড গ্রিন (#8cc63f) করা হলো */}
                    <button type="submit" className="btn w-100 fw-bold text-white text-uppercase d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#8cc63f', padding: '12px', fontSize: '13px', border: 'none' }}>
                      ANFRAGE SENDEN →
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutWithForm;