import React, { useEffect, useState } from 'react';
import { Header, Hero, About, TechStack } from './components';
import Footer from './components/Footer';
import { codeBg } from './assets';
import WhatIDo from './components/WhatIdo';
import Project from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Loader from './components/Loader'; // Import the loader
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Projects';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Simulate loading time (2s here)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="relative min-h-screen bg-[#0D1117] text-white">
      {/* Background image behind Header + Hero */}
      <div className="relative lg:min-h-screen md:height-[50%]">
        <img
          src={codeBg}
          alt="code background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 brightness-75 z-0 hidden md:block"
        />
        <div className="relative z-10" id='home'>
          <Header />
          <Hero />
        </div>
      </div>

      {/* Content sections with scroll animations */}
      <div className="md:mx-16 md:py-8 space-y-16">
        <div data-aos="fade-up" id="about"><About /></div>
        <div data-aos="fade-up" id="skills"><TechStack /></div>
        <div data-aos="fade-up" id="projects"><Projects /></div>
        <div data-aos="fade-up" id="certifications"><Certifications /></div>
        <div data-aos="fade-up" id="contact"><Contact /></div>
      </div>

      <Footer />
    </main>
  );
};

export default App;
