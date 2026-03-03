import React from 'react';
import Navbar from './Components/layout/Navbar';
import Hero from './Components/sections/Hero';
import About from './Components/sections/About';

const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar />
      
      <main>
        <Hero />
        <About/>
      </main>
    </div>
  );
}

export default App;
