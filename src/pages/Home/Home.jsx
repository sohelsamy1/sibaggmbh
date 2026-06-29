import React from 'react';
import Hero from './Hero';
import Service from './Service';
import Features from './Features';
import AboutWithForm from './AboutWithForm';
import References from './References';
import Footer from "../../components/Footer/Footer"; // তোমার স্ট্রাকচার অনুযায়ী পাথ ঠিক করলাম

function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Features />
      <AboutWithForm />
      <References />
      <Footer />
    </main>
  );
}

export default Home;