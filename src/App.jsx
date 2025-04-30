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

      {/* Content sections with scroll animations */}
      <div className="md:mx-16 md:py-8 space-y-16">
        <div data-aos="fade-up"><About /></div>
        <div data-aos="fade-up"><TechStack /></div>

        <div data-aos="fade-up"><Certifications /></div>
        <div data-aos="fade-up"><Contact /></div>
      </div>

      <Footer />
    </main>
  );
};

export default App;
