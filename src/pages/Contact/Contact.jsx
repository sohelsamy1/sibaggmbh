import React, { useRef, useState } from 'react';
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
        
        // ৫ সেকেন্ড পর মেসেজটি অদৃশ্য হয়ে যাবে
        setTimeout(() => setSuccessMessage(''), 5000);
      }, (error) => {
        alert("Fehler beim Senden: " + error.text);
      });
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

            {/* সাকসেস মেসেজ (বক্স ছাড়া) */}
            {successMessage && (
              <div className="mt-3 text-center fw-bold" style={{ color: '#8cc63f' }}>
                {successMessage}
              </div>
            )}

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