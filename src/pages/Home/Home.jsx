import React from 'react';
import Hero from './Hero';
import Service from './Service';
import Features from './Features';
import AboutWithForm from './AboutWithForm';
import References from './References';


function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Features />
      <AboutWithForm />
      <References />
     
    </main>
  );
}

export default Home;