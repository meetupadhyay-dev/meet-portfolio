import { useState } from 'react';
import { skills, tools } from '../utils/data/techstack';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const dataToRender = activeTab === 'skills' ? skills : tools;

  return (
    <section className="min-h-screen w-full px-4 md:px-8 xl:px-20 text-white flex items-center py-16">
      <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center justify-center">
        
        <div className="w-full lg:w-1/2 relative text-center lg:text-left">
          <div className="absolute left-[35%] -top-6 lg:-left-20 lg:top-10 lg:rotate-[-90deg] text-xs tracking-widest text-[#58A6FF]">
            <div className="flex items-center gap-2">
              <div className="w-14 h-[1px] bg-[#58A6FF]" />
              <p className="uppercase font-mono">All Skills</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#E6EDF3] mb-6 leading-tight">
            Explore My Expertise <br className="hidden md:block" />
            & Tech Stack
          </h2>

          <p className="text-[#8B949E] text-sm md:text-base leading-relaxed mb-6">
            These are the technologies and tools I use to craft modern, responsive, and scalable web applications. From frontend frameworks to backend infrastructure, my stack allows me to deliver fast, accessible, and maintainable solutions. I'm always expanding my knowledge to stay ahead in the evolving tech world.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button
              onClick={() => setActiveTab('skills')}
              className={`rounded-lg px-5 py-2 font-medium transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-[#58A6FF] text-white'
                  : 'bg-transparent border border-[#30363D] text-[#8B949E] hover:bg-[#21262D]'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`rounded-lg px-5 py-2 font-medium transition-all duration-300 ${
                activeTab === 'tools'
                  ? 'bg-[#58A6FF] text-white'
                  : 'bg-transparent border border-[#30363D] text-[#8B949E] hover:bg-[#21262D]'
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {dataToRender.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="bg-[#21262D] hover:bg-[#30363D] rounded-xl shadow-md p-4 flex flex-col items-center transition-all duration-300"
              >
                <Icon size={50} className="text-[#58A6FF]" />
                <p className="text-sm text-[#E6EDF3] mt-2">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

