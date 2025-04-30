import React from 'react';
import { Header, Hero, About, LeftBorder, RightBorder, TechStack } from './components';
import Footer from './components/Footer';
import { codeBg } from './assets';
import WhatIdo from './components/WhatIdo';
import Project from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App = () => {
  return (
    <main className="relative min-h-screen bg-[#0D1117] text-white">
      {/* Border Components */}
      {/* <LeftBorder />
      <RightBorder /> */}

      {/* Background image behind Header + Hero */}
      <div className="relative min-h-screen">
        <img
          src={codeBg}
          alt="code background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 brightness-75 z-0 hidden md:block"
        />
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>

      {/* Rest of the site */}
      <div className="md:mx-16 md:py-8">
        <About />
        <TechStack />
        {/* <Project /> */}
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default App;
