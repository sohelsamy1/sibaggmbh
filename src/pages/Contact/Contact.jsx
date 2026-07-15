import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async'; // ইমপোর্ট করা হয়েছে
import emailjs from '@emailjs/browser';
import Select from 'react-select';
import './Contact.css';

const ContactPage = () => {
  const form = useRef();
  const [selectedOption, setSelectedOption] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); // সাকসেস মেসেজ স্টেট

  const options = [
    { value: 'Gebäudereinigung', label: 'Gebäudereinigung' },
    { value: 'Baureinigung', label: 'Baureinigung' },
    { value: 'Bauleistungen', label: 'Bauleistungen' },
    { value: 'Facility Service', label: 'Facility Service' }
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: '5px',
      borderColor: state.isFocused ? '#8cc63f' : '#ced4da',
      boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(140, 198, 63, 0.25)' : 'none',
      '&:hover': { borderColor: '#8cc63f' }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#d1ebb8' : 'white',
      color: state.isFocused ? '#000000' : 'black',
      cursor: 'pointer'
    })
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9svjmvk', 'template_2w2k0u8', form.current, 'aOb8C8-CcBUEkBa0p')
      .then((result) => {
        setSuccessMessage("Nachricht erfolgreich gesendet!"); // সাকসেস মেসেজ সেট
        form.current.reset(); // ফর্ম খালি হবে
        setSelectedOption(null); // ড্রপডাউন খালি হবে
        
        // ৫ সেকেন্ড পর মেসেজটি অদৃশ্য হয়ে যাবে
        setTimeout(() => setSuccessMessage(''), 5000);
      }, (error) => {
        alert("Fehler beim Senden: " + error.text);
      });
  };

  return (
    <div className="container py-5" style={{ fontFamily: 'sans-serif' }}>
      <Helmet>
        <title>Kontaktieren Sie S.I.B.A.G | Bauleistungen & Gebäudereinigung in Berlin</title>
        <meta name="description" content="Haben Sie Fragen zu unseren Leistungen? Kontaktieren Sie die S.I.B.A.G Facility Service GmbH in Berlin für Bauleistungen und Gebäudereinigung. Wir freuen uns auf Ihre Anfrage." />
        <link rel="canonical" href="https://sibaggmbh.com/kontakt" />
        <meta property="og:title" content="Kontakt - S.I.B.A.G Facility Service GmbH" />
        <meta property="og:description" content="Nehmen Sie Kontakt mit uns auf. Ihr Partner für professionelle Facility Services in Berlin." />
        <meta property="og:url" content="https://sibaggmbh.com/kontakt" />
      </Helmet>
    
      {/* সেকশন মার্জিন: marginTop ও marginBottom inline add করা হয়েছে */}
    <section style={{ marginTop: '-20px', marginBottom: '50px' }}> {/* এখান থেকে মার্জিন কন্ট্রোল করুন */}
      <div className="custom-box-width"> 
        <div className="row g-0 text-white shadow-lg" style={{ backgroundColor: '#0f2c59', borderRadius: '5px' }}>
          <div className="col-12 p-4 p-md-5">
            <div className="row align-items-center">
              
              {/* বাম পাশে: কন্টাক্ট ডিটেইলস */}
              <div className="col-md-7 mb-4 mb-md-0">
                <h3 className="fw-bold mb-4" style={{ color: '#8cc63f', borderBottom: '2px solid #8cc63f', display: 'inline-block' }}>KONTAKT</h3>
                <div className="row" style={{ fontSize: '15px' }}>
                  <div className="col-sm-6 mb-3">
                    <p className="mb-1 opacity-50">📍 Adresse</p>
                    <strong className="d-block">Ebersstraße 61, 10827 Berlin</strong>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <p className="mb-1 opacity-50">📞 Telefon</p>
                    <strong className="d-block">+49 172 6302135</strong>
                  </div>
                  <div className="col-sm-6 mb-0">
                    <p className="mb-1 opacity-50">✉️ E-Mail</p>
                    <strong className="d-block">Info.sibaggmbh@web.de</strong>
                  </div>
                  <div className="col-sm-6 mb-0">
                    <p className="mb-1 opacity-50">🕒 Bürozeiten</p>
                    <strong className="d-block">Mo - Fr: 8:00 - 18:00 Uhr</strong>
                  </div>
                </div>
              </div>

              {/* ডান পাশে: ব্র্যান্ডিং ইনফো */}
              <div className="col-md-5 text-md-end text-center mt-4 mt-md-0 border-start-md border-secondary">
                <div className="fw-bold h2 mb-2" style={{ color: '#ffffff' }}>
                  S.I.B.A.G
                </div>
                <div className="fw-bold mb-3" style={{ color: '#8cc63f', letterSpacing: '1px' }}>
                  FACILITY SERVICE GMBH
                </div>
                <div className="small opacity-50 px-3" style={{ fontSize: '11px', lineHeight: '1.8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                  BAULEISTUNGEN • GEBÄUDEREINIGUNG • BAUREINIGUNG • FACILITY SERVICE
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
     </section>

      <div className="row g-4 align-items-stretch">
        
        {/* বাম পাশ: কন্টাক্ট ফর্ম */}
        <div className="col-12 col-lg-7">
          <div className="p-4 p-md-5 h-100 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '8px', borderTop: '4px solid #8cc63f' }}>
            <h3 className="fw-bold mb-1" style={{ color: '#0f2c59' }}>ANGEBOT ANFORDERN</h3>
            <p className="mb-4 text-secondary" style={{ fontSize: '14px' }}>Wir melden uns schnellstmöglich bei Ihnen!</p>
            
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3">
                <div className="col-md-6"><input type="text" name="name" className="form-control" placeholder="Ihr Name" required /></div>
                <div className="col-md-6"><input type="text" name="firma" className="form-control" placeholder="Firma" /></div>
                <div className="col-md-6"><input type="email" name="email" className="form-control" placeholder="E-Mail" required /></div>
                <div className="col-md-6"><input type="tel" name="telefon" className="form-control" placeholder="Telefon" required /></div>
                
                {/* নতুন ৩টি ফিল্ড */}
                <div className="col-md-6"><input type="text" name="stadt_plz" className="form-control" placeholder="Stadt / PLZ" /></div>
                <div className="col-md-6"><input type="date" name="datum" className="form-control" placeholder="Datum" /></div>
                <div className="col-12"><input type="text" name="dringlichkeit" className="form-control" placeholder="Dringlichkeit (z.B. Sofort, Diese Woche)" /></div>
                
                {/* React-Select ড্রপডাউন */}
                <div className="col-12">
                  <Select 
                    options={options} 
                    styles={customStyles} 
                    placeholder="Leistung auswählen"
                    isSearchable={false}
                    onChange={(option) => setSelectedOption(option)}
                  />
                  <input type="hidden" name="leistung" value={selectedOption ? selectedOption.value : ''} />
                </div>
                
                <div className="col-12"><textarea name="nachricht" className="form-control" rows="4" placeholder="Ihre Nachricht" required></textarea></div>
                
                <div className="col-12">
                  <button type="submit" className="btn text-white w-100 fw-bold" style={{ backgroundColor: '#8cc63f', padding: '12px' }}>
                    ANFRAGE SENDEN →
                  </button>
                </div>
              </div>
            </form>

            {/* সাকসেস মেসেজ (বক্স ছাড়া) */}
            {successMessage && (
              <div className="mt-3 text-center fw-bold" style={{ color: '#8cc63f' }}>
                {successMessage}
              </div>
            )}

          </div>
        </div>

        {/* ডান পাশ: ম্যাপ সেকশন  */}
        <div className="col-12 col-lg-5">
          <div className="shadow-sm overflow-hidden" style={{ borderRadius: '8px', height: '700px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.528355606627!2d13.348637476579606!3d52.48395567205423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850772477c77d%3A0x6b45a6c3f6e1f062!2sEbersstra%C3%9Fe%2061%2C%2010827%20Berlin!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location Map">
            </iframe>
           </div>
        </div>
      </div>    
    </div>
  );
};

export default ContactPage;