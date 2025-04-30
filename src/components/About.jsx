import React from 'react';
import { profile } from '../assets';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#161B22] py-16 px-4 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
     
      <div className="w-full md:w-5/12 flex justify-center md:justify-end">
        <img
          src={profile}
          alt="About Me"
          className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-xl shadow-lg"
        />
      </div>

 
      <div className="w-full md:w-7/12 text-center md:text-left relative">

        <div className="absolute left-[35%] -top-6 md:-left-20 md:top-8 md:rotate-[-90deg] text-xs tracking-widest text-[#58A6FF]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-14 h-[1px] bg-[#58A6FF]" />
            <p className="uppercase font-mono">More About</p>
          </div>
        </div>

    
        <h2 className="text-3xl md:text-5xl font-bold text-[#E6EDF3] leading-tight mb-6 md:mb-8 pl-4 md:pl-10">
          A Passionate <br /> Software Developer
        </h2>

        <p className="text-[#8B949E] max-w-2xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
          I’m <span className="text-[#58A6FF] font-semibold">Meet Upadhyay</span>, a dedicated software developer with over 3 years of experience in crafting high-quality web applications. 
          I specialize in the <span className="text-[#58A6FF] font-semibold">MERN stack</span> and Python, focusing on building scalable, user-centric digital experiences.
          From frontend UI/UX to backend APIs, I’ve developed robust solutions for businesses and clients. I’ve also delivered impactful freelance projects tailored to client needs.
        </p>
      </div>
    </section>
  );
};

export default About;
