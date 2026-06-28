import React from 'react';
import Header from './components/Header/Header'; // 👈 সঠিক পাথ
import Home from './pages/Home/Home';           // 👈 হোম পেজ ইম্পোর্ট

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;