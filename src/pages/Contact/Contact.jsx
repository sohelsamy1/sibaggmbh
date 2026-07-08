import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Select from 'react-select'; // react-select ইমপোর্ট
import './Contact.css';

const ContactPage = () => {
  const form = useRef();

  // ড্রপডাউন অপশন
  const options = [
    { value: 'Gebäudereinigung', label: 'Gebäudereinigung' },
    { value: 'Baureinigung', label: 'Baureinigung' },
    { value: 'Bauleistungen', label: 'Bauleistungen' },
    { value: 'Facility Service', label: 'Facility Service' }
  ];

  // react-select কাস্টম স্টাইল
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
      backgroundColor: state.isFocused ? '#8cc63f' : 'white',
      color: state.isFocused ? 'white' : 'black',
      cursor: 'pointer'
    })
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => alert("Nachricht erfolgreich gesendet!"), (error) => alert("Fehler!"));
  };

  return (
    <div className="container py-5" style={{ fontFamily: 'sans-serif' }}>
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
                
                {/* React-Select ড্রপডাউন */}
                <div className="col-12">
                  <Select 
                    name="leistung"
                    options={options} 
                    styles={customStyles} 
                    placeholder="Leistung auswählen"
                    isSearchable={false}
                  />
                </div>
                
                <div className="col-12"><textarea name="nachricht" className="form-control" rows="4" placeholder="Ihre Nachricht" required></textarea></div>
                <div className="col-12">
                  <button type="submit" className="btn text-white w-100 fw-bold btn-submit" style={{ backgroundColor: '#8cc63f', padding: '12px' }}>
                    ANFRAGE SENDEN →
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* ডান পাশ: কন্টাক্ট ইনফো */}
        <div className="col-12 col-lg-5">
          <div className="p-4 p-md-5 h-100 text-white" style={{ backgroundColor: '#0f2c59', borderRadius: '8px' }}>
            <h3 className="fw-bold mb-4" style={{ color: '#8cc63f' }}>KONTAKT</h3>
            <div className="mb-4">
              <div className="h5 mb-2">📍 Adresse</div>
              <p className="opacity-75">Ebersstraße 61, 10827 Berlin-Tempelhof-Schöneberg district</p>
            </div>
            <div className="mb-4">
              <div className="h5 mb-2">📞 Telefon</div>
              <p className="opacity-75">+49 172 6302135</p>
              <p className="small opacity-50 fst-italic">24-hour emergency service on request</p>
            </div>
            <div className="mb-4">
              <div className="h5 mb-2">✉️ E-Mail</div>
              <p className="opacity-75">Info.sibaggmbh@web.de</p>
            </div>
            <div>
              <div className="h5 mb-2">🕒 Bürozeiten</div>
              <p className="opacity-75">Monday - Friday: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* ম্যাপ সেকশন */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="shadow-sm overflow-hidden" style={{ borderRadius: '8px', height: '400px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.665796066224!2d13.348630315783515!3d52.48496464627256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85055375c3d25%3A0xe54d318e87491d9d!2sEbersstra%C3%9Fe+61%2C+10827+Berlin!5e0!3m2!1sbn!2sde!4v1655655555555" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;