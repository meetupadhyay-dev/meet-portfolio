import React from 'react';
import { Header, Hero, About, LeftBorder, RightBorder, TechStack } from './components';
import { codeBg } from './assets';

const App = () => {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Border Components */}
      <LeftBorder />
      <RightBorder />

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
      </div>
    </main>
  );
};

export default App;
