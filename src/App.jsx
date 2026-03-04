import React from 'react';
import Navbar from './Components/layout/Navbar';
import Hero from './Components/sections/Hero';
import About from './Components/sections/About';
import Skills from './Components/sections/Skills';

const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills/>
      </main>
    </div>
  );
}

export default App;
