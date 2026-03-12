import React from 'react';
import Navbar from './Components/layout/Navbar';
import Hero from './Components/sections/Hero';
import About from './Components/sections/About';
import Skills from './Components/sections/Skills';
import Projects from './Components/sections/Projects';
import Services from './Components/sections/Services';
import Testimonials from './Components/sections/Testimonials';
import Contact from './Components/sections/Contact';
import Footer from './Components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
