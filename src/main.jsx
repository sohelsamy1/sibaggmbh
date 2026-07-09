import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// বুটস্ট্র্যাপের CSS এবং JS উভয়ই ইম্পোর্ট করুন
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)