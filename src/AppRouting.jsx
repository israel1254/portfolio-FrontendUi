import React from 'react';
import Navbar from './Components/layout/Navbar';
import Hero from './Components/sections/Hero';
import About from './Components/sections/About';
import Skills from './Components/sections/Skills';
import Projects from './Components/sections/Projects';
import Services from './Components/sections/Services';
import Testimonials from './Components/sections/Testimonials';
import Contact from './Components/sections/Contact';


const AppRouting = () => {
  return (
    <div className="min-h-screen bg-black">
        <Hero />
      <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />  
    </div>
  );
}

export default AppRouting;
