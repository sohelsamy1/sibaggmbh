import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import References from './pages/References/References'; 
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services'; // ইমপোর্ট করা আছে
import Contact from './pages/Contact/Contact'; 
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Services />} />
        
        {/* References পেজ */}
        <Route path="/referenzen" element={<References />} />
        
        {/* 🎯 AboutUs রাউটটি এখানে যোগ করা হয়েছে */}
        <Route path="/uber-uns" element={<AboutUs />} />
        
        {/* Contact পেজ */}
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;