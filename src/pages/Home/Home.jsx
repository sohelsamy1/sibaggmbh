import React from 'react';
import { Helmet } from 'react-helmet-async';

// সেকশনগুলো ইমপোর্ট করুন (আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথ ঠিক করে নেবেন)
import Hero from './Hero';
import Service from './Service';
import Features from './Features';
import AboutWithForm from './AboutWithForm';
import References from './References';

function Home() {
  return (
    <>
      <Helmet>
        <title>S.I.B.A.G Facility Service GmbH | Professionelle Gebäudereinigung & Baudienstleistungen in Berlin</title>
        <meta 
          name="description" 
          content="S.I.B.A.G Facility Service GmbH bietet professionelle Gebäudereinigung, Baureinigung und Bauleistungen in Berlin. Ihr zuverlässiger Partner für Werterhalt und Qualität." 
        />
        <link rel="canonical" href="https://sibaggmbh.com/" />
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="S.I.B.A.G Facility Service GmbH - Berlin" />
        <meta property="og:description" content="Professionelle Reinigungs- und Baudienstleistungen in Berlin. Qualität und Zuverlässigkeit für Ihre Immobilie." />
        <meta property="og:url" content="https://sibaggmbh.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Hero />
        <Service />
        <Features />
         <AboutWithForm />
        <References />
      </main>
    </>
  );
}

export default Home;