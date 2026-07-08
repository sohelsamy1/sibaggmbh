import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import References from './pages/References/References'; 
import Contact from './pages/Contact/Contact'; 
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /referenzen লিঙ্কের জন্য References পেজ */}
        <Route path="/referenzen" element={<References />} />
        
        {/* 🎯 এখানে Contact রাউটটি যোগ করা হলো */}
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;