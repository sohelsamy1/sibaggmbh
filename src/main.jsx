import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'; // ১. এটি ইমপোর্ট করুন

// বুটস্ট্র্যাপের CSS এবং JS উভয়ই ইম্পোর্ট করুন
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* ২. App কে এর ভেতরে র‍্যাপ করে দিন */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)